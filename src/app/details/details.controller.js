export class DetailsController {
  constructor ($log,$routeParams,programsBlueprint) {
    'ngInject';
    this.guid = $routeParams.guid;
    this.currentProgram;
    this.goals;
    this.totalIncentive;
    this.log = $log.log;
    this.createGoals(programsBlueprint);

  }
  //Asynchronously retrieve goals from programsBlueprint Service
  createGoals(service){
    service.getGoals().then((response)=>{
        this.goals = response.data.goals;
        this.createPrograms(service);
        return this.goals;
    })
    .catch((err)=>{
      throw err;
    });
  }
//Asynchronously retrieve programs_blueprint json data from programsBlueprint Service
  createPrograms(service){
    service.getPrograms().then((response)=>{
        this.programs = response.data.program_blueprints;
        this.showSelectedProgram(this.programs)
        return this.programs;
    })
    .catch((err)=>{
      throw err;
    });
  }
//set this.currentProgram to the program that have been selected in dashboard
  showSelectedProgram(programs){
    const guid = this.guid;
    let currentProgram;

    programs.forEach((program)=>{
      if(program.guid === guid){
        return  currentProgram = program;
      }
    });
    this.currentProgram = currentProgram;
    this.currentProgram.goals = this.mapGoals(currentProgram)
  }
//map out goals array to array with {title:.. , incentive:...}
  mapGoals(currentProgram){
    let goals = this.goals;

    goals =  currentProgram.goals.map((x)=>{
                let goal;

                goals.forEach((y)=>{
                  if(x.guid === y.guid){
                    return goal = y;
                  }
                });
                return {
                  title:goal.title,
                  incentiveValue:goal.incentive_value
                };
    });
    this.totalIncentive = this.sumIncentives(goals)
    return goals;
  }
//sum up all of the incentives for the goals
  sumIncentives(goals){
    this.log(this.currentProgram.incentive_description)
    return (
        goals.map((goal)=>{
         return goal.incentiveValue
       })
       .reduce((x,y)=>{
         return x + y;
       },0)
   )
  }

}

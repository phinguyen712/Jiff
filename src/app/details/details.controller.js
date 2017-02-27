export class DetailsController {
  constructor ($log,$routeParams,programsBlueprint) {
    'ngInject';
    this.guid = $routeParams.guid;
    this.currentPrograms;
    this.goals;
    this.totalIncentive;
    this.log = $log;

    this.createGoals(programsBlueprint);
  }

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
    this.totalIncentive = this.totalGoals(goals)
    return goals;
  }

  totalGoals(goals){
    return (
        goals.map((goal)=>{
         return goal.incentiveValue
       })
       .reduce((x,y)=>{
         return x + y;
       })
   )
  }

}

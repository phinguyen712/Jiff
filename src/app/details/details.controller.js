export class DetailsController {
  constructor ($log,$routeParams,programsBlueprint) {
    'ngInject';
    this.guid = $routeParams.guid;
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
    this.mapGoals(currentProgram)
  }

  mapGoals(currentProgram){
    const goals = this.goals;
    this.log.log(goals);
    // currentProgram.goals.map((x)=>{
    //   goals.forEach
    //   const goalData = {
    //
    //   }
    //})
  }
}

export class DashboardController {
  constructor ($log,$timeout,programsBlueprint) {
    'ngInject';
    this.createPrograms(programsBlueprint)
  }
  //Asynchronously retrieve goals from programsBlueprint Service
  createPrograms(service){
    service.getPrograms().then((response)=>{
      this.programs = response.data.program_blueprints;
      return this.programs;
    })
    .catch((err)=>{
      throw err;
    });
  }
}

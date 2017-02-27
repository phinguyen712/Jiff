export class DashboardController {
  constructor ($log,$timeout,programsBlueprint) {
    'ngInject';
    this.programs;
    this.createPrograms(programsBlueprint)
  }
  //Asynchronously retrieve programs_blueprint json data from programsBlueprint Service
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

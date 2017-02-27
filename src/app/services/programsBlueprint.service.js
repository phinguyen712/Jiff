export class ProgramsBlueprintService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
  }

  getPrograms (){
    return this.$http.get('../assets/program_blueprints.json');
  }

  getGoals (){
    return this.$http.get('../assets/goals.json');
  }
}

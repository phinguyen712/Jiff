
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { DashboardController } from '../app/dashboard/dashboard.controller';
import { ProgramsBlueprintService } from '../app/services/programsBlueprint.service';
import { DetailsController } from '../app/details/details.controller';

angular.module('jiffChalenge', ['ngRoute', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('programsBlueprint',ProgramsBlueprintService)
  .controller('DashboardController',DashboardController)
  .controller('DetailsController',DetailsController)

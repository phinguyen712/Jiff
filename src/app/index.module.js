/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { DashboardController } from '../app/dashboard/dashboard.controller';
import { ProgramsBlueprintService } from '../app/services/programsBlueprint.service';
import { DetailsController } from '../app/details/details.controller';

angular.module('jiffChalenge', ['ngRoute', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('programsBlueprint',ProgramsBlueprintService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('DashboardController',DashboardController)
  .controller('DetailsController',DetailsController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);

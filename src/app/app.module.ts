// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './core/core.module';
import { moduleName as showingModule } from './showing/showing.module';

export const moduleName =
  angular.module('application', [
    coreModule,
    showingModule,
  ])
  .name;

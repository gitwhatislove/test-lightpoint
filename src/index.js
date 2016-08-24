'use strict';

import angular from 'angular';
import dashboard from './dashboard/index';

export default angular.module('app',
    [
        'ui.router',
        'ui.bootstrap',
        'ng-sortable',
        dashboard.name
    ])
    .config(($locationProvider) => {
        $locationProvider.html5Mode(true);
    });

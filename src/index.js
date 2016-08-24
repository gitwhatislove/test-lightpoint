'use strict';

import angular from 'angular';
import Api from './api';
import dashboard from './dashboard/index';

export default angular.module('app',
    [
        'ui.router',
        'ui.bootstrap',
        'ng-sortable',
        dashboard.name
    ])
    .service('api', Api)
    .config(($locationProvider) => {
        $locationProvider.html5Mode(true);
    });

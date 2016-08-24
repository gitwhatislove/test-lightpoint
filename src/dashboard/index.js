'use strict';

import angular from 'angular';
import main from './main/index';
import list from './list/index';
import addShop from './addShop/index';


export default angular.module('dashboard',
    [
        main.name,
        list.name,
        addShop.name,
    ])
    .config($stateProvider => {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                views: {
                    '': {
                        template: require('./template.html')
                    },
                    'dashboard-header@dashboard': {
                        template: require('./header/template.html')
                    },
                    'dashboard-footer@dashboard': {
                        template: require('./footer/template.html')
                    }
                }
            });
    });

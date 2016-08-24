'use strict';

import angular from 'angular';
import ListCtrl from './controller.js';


export default angular.module('dashboard.list', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.list', {
                template: require('./template.html'),
                url: '/list/:id',
                controller: ListCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    shops: function($http, $stateParams){
                        return $http({method: 'GET', url: '/json/all.json'});
                    }
                }
            });
    });

'use strict';

import angular from 'angular';
import AddShopCtrl from './controller.js';


export default angular.module('dashboard.addShop', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.addShop', {
                template: require('./template.html'),
                url: '/new-shop',
                controller: AddShopCtrl,
                controllerAs: 'ctrl',
            });
    });

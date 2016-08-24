'use strict';

export default class MainCtrl {
    constructor(shops, $scope) {
        this.updateShops = false;
        $scope.sortableOptions = {
              group: 'ng',
              animation: 200
        }
        if (sessionStorage.getItem("shops")) {
        	this.shops = JSON.parse(sessionStorage.getItem("shops"));
        } 
        else { 
        	this.shops = shops.data;  
        	sessionStorage.setItem("shops", JSON.stringify(this.shops));
        }
        this.adress = this.addAdress(this.shops);

    }
    
    addAdress(shops) {
        var adress = [];
        for (var i = 0; i < shops.length; i++) {
            adress.push(shops[i].adress);
        }
        return adress;
    }
    update() {
        this.updateShops = true;
    }
    saveSort() {
        if (this.updateShops) {
            sessionStorage.setItem("shops", JSON.stringify(this.shops));
        }
        // this.showBtnSave = true;
    }
    

    

}
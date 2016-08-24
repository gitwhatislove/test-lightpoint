'use strict';

export default class ListCtrl {
    constructor(shops, $stateParams) {

    	if (sessionStorage.getItem("shops")) {
        	this.shops = JSON.parse(sessionStorage.getItem("shops"));
        } 
        else { 
        	this.shops = shops.data;  
        	sessionStorage.setItem("shops", JSON.stringify(this.shops));
        }
        this.shop = this.shops.find(f => f.id == $stateParams.id);
        console.log(this.shop);

    }

   
}
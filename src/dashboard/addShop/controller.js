'use strict';

export default class AddShopCtrl {
    constructor($state) {
        this.state = $state;
		this.shops = JSON.parse(sessionStorage.getItem("shops"));
	    this.addShop = {
	     	name: '',
	     	time: '',
	     	adress: '',
            products: []
	    }
        this.addProduct = {
            name: '',
            description: ''
        }

	    this.addShop.id = -1;
        for (var i = 0; i < this.shops.length; i++) {
            if (this.shops[i].id > this.addShop.id) this.addShop.id = this.shops[i].id;
        }
        this.addShop.id++;
        console.log(this.addShop);
    }

    pushShop() {
        console.log(this.addShop);
    	this.shops.push(this.addShop);
    	sessionStorage.setItem("shops", JSON.stringify(this.shops));
    	this.state.go('dashboard.main');

    }
    pushProduct() {
        this.addShop.products.push(this.addProduct);
        this.addProduct = {
            name: '',
            description: ''
        }
    }
}
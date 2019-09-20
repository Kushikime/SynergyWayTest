import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

    addToCart(){
        //get the current product card object
        let productId = parseInt((<HTMLInputElement>event.target).value);
        let currentProduct = this.productsList[productId-1];
    
        //get cart object and push current product to that
        let cart = JSON.parse(localStorage.getItem("cart"));
        
        var addedFirst = true;
        
        cart.forEach(function(product){
            if(currentProduct.id == product.id){
                if(product.quantity == undefined){
                    product.quantity = 2;
                } else{
                    product.quantity+=1;
                    console.log("Item added again!");
                }
                addedFirst = false;
            }
        })
        
        console.log(cart);
        //if the product is added to cart first time
        
        
        if(addedFirst === true){
            currentProduct = {
                "id": currentProduct["id"],
                "name": currentProduct["name"],
                "price":currentProduct["price"],
                "label":currentProduct["label"]
            }
            cart.push(currentProduct)
            console.log("Item added first time!");
        } else {
            console.log("Item already in the cart!");
        }
        
        
        
        
        
        
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }

  constructor() {
    if(!localStorage.getItem('cart')){
        let cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
  
  }
  productsList = [
        {
            "id":1,
            "name":"article 1",
            "label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price":25
        },
        {
            "id":2,
            "name":"article 2",
            "label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price":35
        },
        {
            "id":3,
            "name":"article 3",
            "label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price":45
        }
    ];
  ngOnInit() {
  }

}

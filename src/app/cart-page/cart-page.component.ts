import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartPageComponent implements OnInit {

    totalPrice(){
        let prices = document.getElementsByClassName("price");
        let total=0;
        
        for(var i=0;i<prices.length;i++){
            total+= parseInt(prices[i].innerHTML);
        }
        return total;
    }
    
    calcPrice(product){
        if(product.quantity!= null||product.quantity !=undefined){
             return product.price*product.quantity;
         }else{
             return product.price;
         }
    }

    removeProduct(product){
        //check current quantity
        var quantity = product.quantity;
        var productId = product.id;
        
        
        let cart = JSON.parse(localStorage.getItem("cart"));
        
        
        
        
        
        //if 0 -> delete
        if(quantity == null||quantity == undefined){
            //delete product from localStorage
            cart.forEach(function(product){
                if(productId == product.id){
                    var index = cart.indexOf(product);
                    if (index > -1) {
                      cart.splice(index, 1);
                    }
                }
            })

            localStorage.setItem('cart', JSON.stringify(cart));


            ( <HTMLElement>event.target ).parentElement.parentElement.remove();
        } else if(quantity == 1){
            cart.forEach(function(product){
                if(productId == product.id){
                    var index = cart.indexOf(product);
                    if (index > -1) {
                      cart.splice(index, 1);
                    }
                }
            })

            localStorage.setItem('cart', JSON.stringify(cart));


            ( <HTMLElement>event.target ).parentElement.parentElement.remove();
        } else{
            console.log(quantity)
            cart.forEach(function(product){
                if(productId == product.id){
                    product.quantity -=1;
                    console.log(product.quantity)
                }
            })

            localStorage.setItem('cart', JSON.stringify(cart));
            //get current product id and
            this.cartList = JSON.parse(localStorage.getItem("cart"));
        }
        //else quantity - 1
        
    }
  constructor() { 
  }
  cartList = JSON.parse(localStorage.getItem("cart"));
  ngOnInit() {
    
  }

}

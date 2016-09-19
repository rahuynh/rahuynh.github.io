
(function(){//3. move app into function with closure
var app = angular.module('gemStore',[] );// 1. define module 
    
app.controller('storeController',function(){
    this.products=gems; //6. set this.product equal to gem,
});// 4. create controller with name and  empty function
    
 var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 }
  ];    
    
});
"use strict";
exports.__esModule = true;
//this page will be for functions
//let me put the funtions in a class and import the interfaces
var arrayData = new Array();
var Clothes = /** @class */ (function () {
    //this will have every item in the store
    function Clothes(itemType, itemPrice) {
        this.itemType = itemType;
        this.itemPrice = itemPrice;
        this.itemType = itemType;
        this.itemPrice = itemPrice;
    }
    //the array to store getValues values
    //function gets values from price and calls the creat function
    Clothes.prototype.getValues = function () {
        //prvents the submit function
        //ev.preventDefault()
        console.log("this is test 1");
        //get the item's type and price
        var charObj = { charType: this.itemType, charPrice: this.itemPrice };
        //putting item and price in array
        var arrayData = new Array();
        //check if item or price are empty
        if (charObj.charPrice !== 0 || charObj.charType !== '') {
            //push into array
            arrayData.push(charObj);
            //put item and price into local storage
            localStorage.setItem("shopObj", JSON.stringify(arrayData));
            //call the createTable function cannot create inside the class
            this.createTable(charObj.charType, charObj.charPrice);
        }
        else
            (console.log("if statment error"));
    };
    //The creat function adds elemnts to the table
    Clothes.prototype.createTable = function (type, price) {
        var table = document.getElementById("table");
        /* let tableRow = `
        <tr>
            <td class="lead">${type}</td>
            <td class="lead">${price}</td>
        </tr>
        ` */
        var row = table.insertRow(); //tr
        var colPro = row.insertCell(0); //td
        var colPrice = row.insertCell(1); //td
        colPro.innerText = type;
        colPrice.innerText = price;
        table.insertBefore(row, table.firstElementChild.nextSibling);
        //return tableRow;
    };
    // fuction fillCart/init
    //this function will grab information form the local storage 
    //and call the create function so information does not go away when page loads
    Clothes.prototype.fillCart = function () {
        //ev.preventDefault()
        //check if get is true
        if (localStorage.getItem("shopObj")) {
            //get from localstorage
            var localShop = localStorage.getItem("shopObj");
            //parse information
            var shopJson = JSON.parse(localShop);
            //make array equel to parse
            var fillArray = new Array();
            fillArray = shopJson;
            //make loop i = array.length - 1
            for (var i = fillArray.length - 1; i > -1; i--) {
                // check if parse is empty
                if (fillArray[i].charType !== "" || fillArray[i].charPrice !== 0) {
                    //call create
                    this.createTable(fillArray[i].charType, fillArray[i].charPrice);
                }
            }
        }
    };
    return Clothes;
}());
//this page will display shoping
//need to call let call = new clothes(get type, getprice)
//get by id
var redShirt = document.getElementById("r-shirt");
var blackPants = document.getElementById("b-pants");
var blueShirt = document.getElementById("b-shirt");
var desPants = document.getElementById("d-pants");
//event listeners for click
redShirt.addEventListener('click', isRedShirt());
blackPants.addEventListener('click', isBlackPants());
blueShirt.addEventListener('click', isBlueShrit());
desPants.addEventListener('click', isDesPants());
//fuction to get price and type
function isRedShirt() {
    var productType = "Red Shirt";
    var productPrice = 20;
    var redClothes = new Clothes(productType, productPrice);
    redClothes.getValues();
}
function isBlackPants() {
    var productType = "Black Pants";
    var productPrice = 60;
    var blackClothes = new Clothes(productType, productPrice);
    blackClothes.getValues();
}
function isBlueShrit() {
    var productType = "Blue Shirt";
    var productPrice = 20;
    var blueClothes = new Clothes(productType, productPrice);
    blueClothes.getValues();
}
function isDesPants() {
    var productType = "Designer Pants";
    var productPrice = 200;
    var desClothes = new Clothes(productType, productPrice);
    desClothes.getValues();
}
var productType = "";
var productPrice = 0;
var clothes = new Clothes(productType, productPrice);
window.onload = clothes.fillCart();
console.log("this is test 2");

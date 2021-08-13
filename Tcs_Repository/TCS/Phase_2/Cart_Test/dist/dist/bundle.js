/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js_ts/cart_fun.ts":
/*!*******************************!*\
  !*** ./src/js_ts/cart_fun.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Clothes = void 0;
// this page will be for functions
// let me put the funtions in a class and import the interfaces
var arrayData = new Array();
var fillArray = new Array();
var math = 0;
var cSize = 0;
var Clothes = /** @class */ (function () {
    // this will have every item in the store
    function Clothes(itemType, itemPrice) {
        this.itemType = itemType;
        this.itemPrice = itemPrice;
        this.itemType = itemType;
        this.itemPrice = itemPrice;
    }
    // the array to store getValues values
    // function gets values from price and calls the creat function
    Clothes.prototype.getValues = function () {
        // prvents the submit function
        // ev.preventDefault()
        // get the item's type and price
        var charObj = { charType: this.itemType, charPrice: this.itemPrice };
        // putting item and price in array
        // check if item or price are empty
        if (charObj.charPrice !== 0 || charObj.charType !== '') {
            // push into array
            arrayData.push(charObj);
            // put item and price into local storage
            localStorage.setItem("shopObj", JSON.stringify(arrayData));
            // call the createTable function cannot create inside the class
            this.writeTable(charObj.charType, charObj.charPrice);
        }
    };
    Clothes.prototype.cSize = function () {
        cSize = cSize + 1;
        var cartS = document.getElementById("cartSize");
        cartS.innerText = "Cart Size: " + cSize;
        return cartS.innerText;
    };
    // The creat function adds elemnts to the table
    Clothes.prototype.writeTable = function (type, price) {
        var table = document.getElementById("table");
        var row = table.insertRow(0); // tr
        var colPro = row.insertCell(0); // td
        var colPrice = row.insertCell(1); // td
        colPro.innerText = type;
        colPrice.innerText = price.toString();
        table.insertBefore(row, table.firstElementChild.nextSibling);
    };
    // fuction fillCart/init
    // this function will grab information form the local storage
    // and call the create function so information does not go away when page loads
    Clothes.prototype.fillCart = function () {
        // check if get is true
        if (localStorage.getItem("shopObj")) {
            // get from localstorage
            var localShop = localStorage.getItem("shopObj");
            // parse information
            var shopJson = JSON.parse(localShop);
            // make array equel to parse
            fillArray = shopJson;
            // math
            // make loop i = array.length - 1
            for (var i = fillArray.length - 1; i > -1; i--) {
                // check if parse is empty
                if (fillArray[i].charType !== "" || fillArray[i].charPrice !== 0) {
                    // call create
                    this.writeTable(fillArray[i].charType, fillArray[i].charPrice);
                    math = math + parseInt(fillArray[i].charPrice);
                }
            }
        }
        document.getElementById("math").innerText = math.toString();
        // (document.getElementById("cartSize") as HTMLUListElement).innerText = "Cart Size "+ fillArray.length;
    };
    return Clothes;
}());
exports.Clothes = Clothes;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var exports = {};
/*!********************************!*\
  !*** ./src/js_ts/shop_page.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// focus on connections
var cart_fun_1 = __webpack_require__(/*! ./cart_fun */ "./src/js_ts/cart_fun.ts");
// this page will display shoping
// need to call let call = new clothes(get type, getprice)
// get by id
/* const ex = `hello`
const dum: number = 2
const shoppingPage:string = ` <!--write out the page lay out with dummy variables start here--><div class="container-fluid"> <nav class="navbar navbar-light bg-light"><a class="navbar-brand" href="#"><h1 class="display-3">myShoppingSite</h1></a><ul class="nav nav-pills">                   <li class="navbar-item ">
                        <a href="#" class= "nav-link disabled" >cart size : then the size is displayed here</a>
                    </li>
                    <li class="navbar-item active ">
                        <a href="cart.html" class="nav-link"> Checkout</a>
                    </li>
                </ul>
        </nav>

        <div class="wrapper">
                <form action="" class="form-group">
                    <div class="row p-2 ">

                        <div class="col-6 p-2">
                            <div class="row ">
                                <div class="col-12 ">
                                    <img class="img-fluid"  src="https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dwb2b66880/product_images/0126468680167NEW_01_065.jpg?sw=458&sh=710&sm=fit" alt="">
                                    <br>
                                </div>
                                <div class="col-12">
                                    <small><b>Red shrit</b></small><br>

                                </div>
                                <div class="col-12">
                                    <small class="lead">$ 20 </small><br>
                                </div>
                                <div class="col-12">
                                    <input type="button" id="r-shirt" value="Add to cart" class="btn btn-primary">
                                </div>
                            </div>

                        </div>
                        <div class="col-6 p-2  ">
                            <div class="row">
                                <div class="col-12">
                                    <img class="img-fluid"  src="https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw8eb8dc7c/product_images/0133491920057NEW_01_001.jpg?sw=458&sh=710&sm=fit" alt="">
                                    <br>
                                </div>
                                <div class="col-12">                                        <small><b>Black pants</b></small>
                                        <br>

                                </div>
                                <div class="col-12">

                                    <small class="lead">$ 60 </small><br>

                                </div>
                                <div class="col-12">
                                    <input type="button" id="b-pants" value="Add to cart" class="btn btn-primary">
                                </div>
                            </div>

                        </div>
                        <div class="col-6 p-2">
                            <div class="row">
                                <div class="col-12">
                                    <img class="img-fluid"  src="https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw326b5219/product_images/0120468680027NEW_01_051.jpg?sw=458&sh=710&sm=fit" alt="">
                                    <br>
                                </div>
                                <div class="col-12">

                                    <small><b>Blue Shirt</b></small><br>

                                </div>
                                <div class="col-12">
                                    <small class="lead">$ 20 </small><br>
                                </div>
                                <div class="col-12">
                                    <input type="button" id="b-shirt" value="Add to cart" class="btn btn-primary">
                                </div>
                            </div>
                        </div>
                        <div class="col-6 p-2 ">
                            <div class="row">
                                <div class="col-12">
                                    <img class="img-fluid"  src="https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw55a3d097/product_images/0130250500071NEW_01_010.jpg?sw=458&sh=710&sm=fit" alt="">
                                    <br>
                                </div>
                                <div class="col-12">

                                    <small><b>Designer Pants</b></small><br>

                                </div>
                                <div class="col-12">
                                    <small class="lead">$ 200 </small><br>
                                </div>
                                <div class="col-12">
                                    <input type="button" id="d-pants" value="Add to cart" class="btn btn-primary">
                                </div>
                            </div>

                        </div>
                    </div>

                </form>

            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    ` */
// const bodyTag = document.getElementById("shopBody") as HTMLDivElement
// bodyTag.textContent= shoppingPage;
// document.write(shoppingPage)
/*
const desPants = (document.getElementById("d-pants") as HTMLElement);

// event listeners for click
if(document.getElementById("r-shirt") as HTMLElement != null){
    const redShirt = (document.getElementById("r-shirt") as HTMLElement)
    redShirt?.addEventListener('click',isRedShirt())
}
if(document.getElementById("b-pants") as HTMLElement != null){
    const blackPants = (document.getElementById("b-pants") as HTMLElement);
    blackPants?.addEventListener('click',isBlackPants())

}
if(document.getElementById("b-shirt") as HTMLElement != null){
    const blueShirt = (document.getElementById("b-shirt") as HTMLElement);
    blueShirt?.addEventListener('click',isBlueShrit())

}
if(document.getElementById("d-pants") as HTMLElement != null){
    const desPants = (document.getElementById("d-pants") as HTMLElement);
    desPants.addEventListener('click',isDesPants())

} */
/* const testme =  document.querySelector('#r-shirt') as HTMLButtonElement
 function test ():any {
    if (testme){
        // testThing = document.querySelector("#r-shirt") as HTMLButtonElement
        console.log("good")
        return testme

    }else{
        // const testThing = document.querySelector("#r-shirt") as HTMLButtonElement
        return testme
    }
}

console.log("test console")
if(test() == null){
    console.log("do not want to showtest console in if  "+test())
}
console.log("test console out of if  "+test())
 */
var i = 0;
if (localStorage.getItem("shopObj")) {
    // get from localstorage
    var localShop = localStorage.getItem("shopObj");
    // parse information
    var shopJson_1 = JSON.parse(localShop);
    console.log(shopJson_1.length);
    if (document.getElementById("cartSize")) {
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector("button").addEventListener("click", function (ev) {
                ev.preventDefault();
                i++;
                var cartS = document.getElementById("cartSize");
                cartS.innerText = "Cart Size: " + shopJson_1.length;
                console.log("this is i  " + i);
                console.log("table test" + cartS.innerText);
            });
        });
    }
}
if (document.getElementById("r-shirt")) {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("r-shirt").addEventListener("click", function (ev) {
            ev.preventDefault();
            var RType = "Red Shirt";
            var RPrice = 20;
            var redClothes = new cart_fun_1.Clothes(RType, RPrice);
            redClothes.getValues();
        });
    });
    var test = document.getElementById("r-shirt");
    console.log("check me   " + test);
}
if (document.getElementById("b-pants")) {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("b-pants").addEventListener("click", function (ev) {
            ev.preventDefault();
            var bpType = "Black Pants";
            var bpPrice = 60;
            var blackClothes = new cart_fun_1.Clothes(bpType, bpPrice);
            blackClothes.getValues();
        });
    });
}
if (document.getElementById("b-shirt")) {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("b-shirt").addEventListener("click", function (ev) {
            ev.preventDefault();
            var bsType = "Blue Shirt";
            var bsPrice = 20;
            var blueClothes = new cart_fun_1.Clothes(bsType, bsPrice);
            blueClothes.getValues();
        });
    });
}
if (document.getElementById("d-pants")) {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("d-pants").addEventListener("click", function (ev) {
            ev.preventDefault();
            var dType = "Designer Pants";
            var dPrice = 200;
            var desClothes = new cart_fun_1.Clothes(dType, dPrice);
            desClothes.getValues();
        });
    });
}
// fuction to get price and type
/*  function isRedShirt ():any {
    const RType:string = "Red Shirt"
    const RPrice:number = 20
    const redClothes = new Clothes(RType,RPrice)
    redClothes.getValues()
}
function isBlackPants ():any {
    const bpType:string = "Black Pants"
    const bpPrice:number = 60
    const blackClothes = new Clothes(bpType,bpPrice)
    blackClothes.getValues()


}
function isBlueShrit ():any {
    const bsType:string = "Blue Shirt"
    const bsPrice:number = 20
    const blueClothes = new Clothes(bsType,bsPrice)
     blueClothes.getValues()


}
function isDesPants():any {
    const dType:string = "Designer Pants"
    const dPrice:number = 200
    const desClothes = new Clothes(dType,dPrice)
     desClothes.getValues()

} */
// document.write(shoppingPage)
// (document.getElementById("r-shirt") as HTMLElement).innerHTML = shoppingPage;

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./src/js_ts/cart_man.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// inport functions
var cart_fun_1 = __webpack_require__(/*! ./cart_fun */ "./src/js_ts/cart_fun.ts");
// import {isRedShirt} from "./shop_page"
var productType = "";
var productPrice = 0;
if (document.getElementById("table")) {
    document.addEventListener("DOMContentLoaded", function () {
        var clothes = new cart_fun_1.Clothes(productType, productPrice);
        document.getElementById("cartBody").addEventListener('onload', clothes.fillCart());
    });
}
/* if(document.getElementById("table") as HTMLElement){
    const table = document.getElementById("table") as HTMLElement
    console.log("table test"+table)
}else{
    const table = document.getElementById("table") as HTMLElement

    console.log("not working " +table)
} */
// const clothes = new Clothes(productType,productPrice)
// clothes.fillCart()
// this will be the desplay page
// import classes, interface, and abstract function
// i may be using the singleton design patter look at video again
// remember solid if i have time
// this page will be for displaying content
// (document.getElementById("cartBody") as HTMLElement).innerHTML= `
// let page =
/* `<div class="container-fluid">
<header class="header">
    <nav class="navbar navbar-light bg-dark text-light">

        <a class="navbar-brand" href="#"><h1 class="display-3 text-light">myShoppingSite</h1></a>
        <ul class="nav nav-pills">

            <li class="navbar-item active nav-pills ">
                <a href="shopping.html" class="nav-link">Continue Shopping</a>
            </li>
        </ul>
    </nav>

</header>
<div class="title">
    <h2 class="display1">Shoping cart Check out</h2>
</div>
<div>
    <table class="table table-striped" id="table">
        <tr class="thead-dark">
            <th>Item Name</th>
            <th>Price</th>
        </tr>
        <tr>
            <td class="lead">name of poduct</td>
            <td class="lead">price of product as number</td>
        </tr>
        <tr>
            <td class="lead">total price</td>
            <td class="lead">total price as number</td>
        </tr>
    </table>
</div>
</div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>`
 */
// document.write(page)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFFO0lBRzNHLENBQUMsQ0FBRTtDQUNOO0FBRUQ7Ozs7Ozs7SUFPSTtBQUNSLHdEQUF3RDtBQUN4RCxxQkFBcUI7QUFHckIsZ0NBQWdDO0FBQ2hDLG1EQUFtRDtBQUNuRCxpRUFBaUU7QUFDakUsZ0NBQWdDO0FBRWhDLDJDQUEyQztBQUUzQyxvRUFBb0U7QUFDcEUsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q0c7QUFFSCx1QkFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJ0X3Rlc3QvLi9zcmMvanNfdHMvY2FydF9mdW4udHMiLCJ3ZWJwYWNrOi8vY2FydF90ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcnRfdGVzdC8uL3NyYy9qc190cy9zaG9wX3BhZ2UudHMiLCJ3ZWJwYWNrOi8vY2FydF90ZXN0Ly4vc3JjL2pzX3RzL2NhcnRfbWFuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBub2RlIH0gZnJvbSBcIndlYnBhY2tcIjtcclxuaW1wb3J0IHtTdG9yZUZ1bn0gZnJvbSBcIi4vY2FydF9pblwiXHJcbi8vIHRoaXMgcGFnZSB3aWxsIGJlIGZvciBmdW5jdGlvbnNcclxuLy8gbGV0IG1lIHB1dCB0aGUgZnVudGlvbnMgaW4gYSBjbGFzcyBhbmQgaW1wb3J0IHRoZSBpbnRlcmZhY2VzXHJcbmNvbnN0IGFycmF5RGF0YSA9IG5ldyBBcnJheTxhbnk+KClcclxubGV0IGZpbGxBcnJheSA9IG5ldyBBcnJheTxhbnk+KClcclxubGV0IG1hdGggPSAwXHJcbmxldCBjU2l6ZSA9IDBcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG90aGVzIGltcGxlbWVudHMgU3RvcmVGdW57XHJcbiAgICAvLyB0aGlzIHdpbGwgaGF2ZSBldmVyeSBpdGVtIGluIHRoZSBzdG9yZVxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGl0ZW1UeXBlOnN0cmluZywgcHVibGljIGl0ZW1QcmljZTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXRlbVR5cGUgPSBpdGVtVHlwZTtcclxuICAgICAgICB0aGlzLml0ZW1QcmljZSA9IGl0ZW1QcmljZTtcclxuICAgIH1cclxuICAgIC8vIHRoZSBhcnJheSB0byBzdG9yZSBnZXRWYWx1ZXMgdmFsdWVzXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRzIHZhbHVlcyBmcm9tIHByaWNlIGFuZCBjYWxscyB0aGUgY3JlYXQgZnVuY3Rpb25cclxuICAgIGdldFZhbHVlcygpIHtcclxuICAgICAgICAvLyBwcnZlbnRzIHRoZSBzdWJtaXQgZnVuY3Rpb25cclxuICAgICAgICAvLyBldi5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgaXRlbSdzIHR5cGUgYW5kIHByaWNlXHJcbiAgICAgICAgY29uc3QgY2hhck9iaiA9IHtjaGFyVHlwZTp0aGlzLml0ZW1UeXBlLGNoYXJQcmljZTp0aGlzLml0ZW1QcmljZX1cclxuXHJcblxyXG4gICAgICAgIC8vIHB1dHRpbmcgaXRlbSBhbmQgcHJpY2UgaW4gYXJyYXlcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSBvciBwcmljZSBhcmUgZW1wdHlcclxuICAgICAgICBpZihjaGFyT2JqLmNoYXJQcmljZSAhPT0gMCB8fCBjaGFyT2JqLmNoYXJUeXBlICE9PSAnJyl7XHJcbiAgICAgICAgICAgIC8vIHB1c2ggaW50byBhcnJheVxyXG4gICAgICAgICAgICBhcnJheURhdGEucHVzaChjaGFyT2JqKVxyXG4gICAgICAgICAgICAvLyBwdXQgaXRlbSBhbmQgcHJpY2UgaW50byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hvcE9ialwiLEpTT04uc3RyaW5naWZ5KGFycmF5RGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBjYWxsIHRoZSBjcmVhdGVUYWJsZSBmdW5jdGlvbiBjYW5ub3QgY3JlYXRlIGluc2lkZSB0aGUgY2xhc3NcclxuICAgICAgICAgICAgdGhpcy53cml0ZVRhYmxlKGNoYXJPYmouY2hhclR5cGUsIGNoYXJPYmouY2hhclByaWNlKVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNTaXplICgpOnN0cmluZ3tcclxuXHJcbiAgICAgICAgY1NpemUgPSBjU2l6ZSArIDFcclxuICAgICAgICBjb25zdCBjYXJ0UyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydFNpemVcIikgYXMgSFRNTExJRWxlbWVudFxyXG4gICAgICAgIGNhcnRTLmlubmVyVGV4dCA9IFwiQ2FydCBTaXplOiBcIiArIGNTaXplO1xyXG4gICAgICAgIHJldHVybiAgY2FydFMuaW5uZXJUZXh0XHJcbiAgICB9XHJcblxyXG4vLyBUaGUgY3JlYXQgZnVuY3Rpb24gYWRkcyBlbGVtbnRzIHRvIHRoZSB0YWJsZVxyXG4gICAgd3JpdGVUYWJsZSh0eXBlOnN0cmluZyxwcmljZTpudW1iZXIpOmFueXtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVcIikgYXMgSFRNTFRhYmxlRWxlbWVudFxyXG5cclxuICAgICAgICAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KDApLy8gdHJcclxuXHJcbiAgICAgICAgY29uc3QgY29sUHJvID0gcm93Lmluc2VydENlbGwoMCkvLyB0ZFxyXG4gICAgICAgIGNvbnN0IGNvbFByaWNlID0gcm93Lmluc2VydENlbGwoMSkvLyB0ZFxyXG5cclxuICAgICAgICBjb2xQcm8uaW5uZXJUZXh0ID0gdHlwZTtcclxuICAgICAgICBjb2xQcmljZS5pbm5lclRleHQgPSBwcmljZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRhYmxlLmluc2VydEJlZm9yZShyb3csIHRhYmxlLmZpcnN0RWxlbWVudENoaWxkLm5leHRTaWJsaW5nKVxyXG4gICAgIH1cclxuXHJcbi8vIGZ1Y3Rpb24gZmlsbENhcnQvaW5pdFxyXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgZ3JhYiBpbmZvcm1hdGlvbiBmb3JtIHRoZSBsb2NhbCBzdG9yYWdlXHJcbi8vIGFuZCBjYWxsIHRoZSBjcmVhdGUgZnVuY3Rpb24gc28gaW5mb3JtYXRpb24gZG9lcyBub3QgZ28gYXdheSB3aGVuIHBhZ2UgbG9hZHNcclxuICAgIGZpbGxDYXJ0KCk6YW55IHtcclxuXHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIGdldCBpcyB0cnVlXHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG9wT2JqXCIpKXtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCBmcm9tIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgICAgICBjb25zdCBsb2NhbFNob3A6YW55ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG9wT2JqXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gcGFyc2UgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgY29uc3Qgc2hvcEpzb246YW55ID0gSlNPTi5wYXJzZShsb2NhbFNob3ApXHJcblxyXG4gICAgICAgICAgICAvLyBtYWtlIGFycmF5IGVxdWVsIHRvIHBhcnNlXHJcbiAgICAgICAgICAgIGZpbGxBcnJheSA9IHNob3BKc29uXHJcbiAgICAgICAgICAgIC8vIG1hdGhcclxuICAgICAgICAgICAgLy8gbWFrZSBsb29wIGkgPSBhcnJheS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IGZpbGxBcnJheS5sZW5ndGggLSAxOyBpID4gLTEgOyBpLS0pe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHBhcnNlIGlzIGVtcHR5XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbEFycmF5W2ldLmNoYXJUeXBlICE9PSBcIlwiIHx8IGZpbGxBcnJheVtpXS5jaGFyUHJpY2UgIT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgY3JlYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cml0ZVRhYmxlKGZpbGxBcnJheVtpXS5jaGFyVHlwZSwgZmlsbEFycmF5W2ldLmNoYXJQcmljZSlcclxuICAgICAgICAgICAgICAgICAgICBtYXRoID0gbWF0aCArIHBhcnNlSW50KGZpbGxBcnJheVtpXS5jaGFyUHJpY2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRoXCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQgPSBtYXRoLnRvU3RyaW5nKCk7XHJcbiAgICAgICAvLyAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0U2l6ZVwiKSBhcyBIVE1MVUxpc3RFbGVtZW50KS5pbm5lclRleHQgPSBcIkNhcnQgU2l6ZSBcIisgZmlsbEFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZm9jdXMgb24gY29ubmVjdGlvbnNcclxuaW1wb3J0IHtDbG90aGVzfSBmcm9tIFwiLi9jYXJ0X2Z1blwiXHJcblxyXG5cclxuLy8gdGhpcyBwYWdlIHdpbGwgZGlzcGxheSBzaG9waW5nXHJcbi8vIG5lZWQgdG8gY2FsbCBsZXQgY2FsbCA9IG5ldyBjbG90aGVzKGdldCB0eXBlLCBnZXRwcmljZSlcclxuLy8gZ2V0IGJ5IGlkXHJcblxyXG4vKiBjb25zdCBleCA9IGBoZWxsb2BcclxuY29uc3QgZHVtOiBudW1iZXIgPSAyXHJcbmNvbnN0IHNob3BwaW5nUGFnZTpzdHJpbmcgPSBgIDwhLS13cml0ZSBvdXQgdGhlIHBhZ2UgbGF5IG91dCB3aXRoIGR1bW15IHZhcmlhYmxlcyBzdGFydCBoZXJlLS0+PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPiA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodFwiPjxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj48aDEgY2xhc3M9XCJkaXNwbGF5LTNcIj5teVNob3BwaW5nU2l0ZTwvaDE+PC9hPjx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIj4gICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2YmFyLWl0ZW0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9IFwibmF2LWxpbmsgZGlzYWJsZWRcIiA+Y2FydCBzaXplIDogdGhlbiB0aGUgc2l6ZSBpcyBkaXNwbGF5ZWQgaGVyZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmJhci1pdGVtIGFjdGl2ZSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNhcnQuaHRtbFwiIGNsYXNzPVwibmF2LWxpbmtcIj4gQ2hlY2tvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHAtMiBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiICBzcmM9XCJodHRwczovL3d3dy5wYWNzdW4uY29tL2R3L2ltYWdlL3YyL0FBSkVfUFJEL29uL2RlbWFuZHdhcmUuc3RhdGljLy0vU2l0ZXMtcGFjc3VuX3N0b3JlZnJvbnRfY2F0YWxvZy9kZWZhdWx0L2R3YjJiNjY4ODAvcHJvZHVjdF9pbWFnZXMvMDEyNjQ2ODY4MDE2N05FV18wMV8wNjUuanBnP3N3PTQ1OCZzaD03MTAmc209Zml0XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD48Yj5SZWQgc2hyaXQ8L2I+PC9zbWFsbD48YnI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwibGVhZFwiPiQgMjAgPC9zbWFsbD48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwici1zaGlydFwiIHZhbHVlPVwiQWRkIHRvIGNhcnRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHAtMiAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgIHNyYz1cImh0dHBzOi8vd3d3LnBhY3N1bi5jb20vZHcvaW1hZ2UvdjIvQUFKRV9QUkQvb24vZGVtYW5kd2FyZS5zdGF0aWMvLS9TaXRlcy1wYWNzdW5fc3RvcmVmcm9udF9jYXRhbG9nL2RlZmF1bHQvZHc4ZWI4ZGM3Yy9wcm9kdWN0X2ltYWdlcy8wMTMzNDkxOTIwMDU3TkVXXzAxXzAwMS5qcGc/c3c9NDU4JnNoPTcxMCZzbT1maXRcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPjxiPkJsYWNrIHBhbnRzPC9iPjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImxlYWRcIj4kIDYwIDwvc21hbGw+PGJyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJiLXBhbnRzXCIgdmFsdWU9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgIHNyYz1cImh0dHBzOi8vd3d3LnBhY3N1bi5jb20vZHcvaW1hZ2UvdjIvQUFKRV9QUkQvb24vZGVtYW5kd2FyZS5zdGF0aWMvLS9TaXRlcy1wYWNzdW5fc3RvcmVmcm9udF9jYXRhbG9nL2RlZmF1bHQvZHczMjZiNTIxOS9wcm9kdWN0X2ltYWdlcy8wMTIwNDY4NjgwMDI3TkVXXzAxXzA1MS5qcGc/c3c9NDU4JnNoPTcxMCZzbT1maXRcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD48Yj5CbHVlIFNoaXJ0PC9iPjwvc21hbGw+PGJyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImxlYWRcIj4kIDIwIDwvc21hbGw+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cImItc2hpcnRcIiB2YWx1ZT1cIkFkZCB0byBjYXJ0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHAtMiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiAgc3JjPVwiaHR0cHM6Ly93d3cucGFjc3VuLmNvbS9kdy9pbWFnZS92Mi9BQUpFX1BSRC9vbi9kZW1hbmR3YXJlLnN0YXRpYy8tL1NpdGVzLXBhY3N1bl9zdG9yZWZyb250X2NhdGFsb2cvZGVmYXVsdC9kdzU1YTNkMDk3L3Byb2R1Y3RfaW1hZ2VzLzAxMzAyNTA1MDAwNzFORVdfMDFfMDEwLmpwZz9zdz00NTgmc2g9NzEwJnNtPWZpdFwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPjxiPkRlc2lnbmVyIFBhbnRzPC9iPjwvc21hbGw+PGJyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImxlYWRcIj4kIDIwMCA8L3NtYWxsPjxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkLXBhbnRzXCIgdmFsdWU9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjIuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1LSjNvMkRLdElrdllJSzNVRU56bU03S0NrUnIvckU5L1FwZzZhQVpHSndGRE1WTkEvR3BHRkY5M2hYcEc1S2tOXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTIuOS91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1BcE5iZ2g5QitZMVFLdHYzUm43VzNtZ1B4aFU5Sy9TY1FzQVA3aFVpYlgzOWo3ZmFrRlBza3ZYdXN2ZmEwYjRRXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1KWlI2U3Blamg0VTAyZDhqT3Q2dkxFSGZlL0pRR2lSUlNRUXhTZkZXcGkxTXF1VmRBeWpVYXI1Kzc2UFZDbVlsXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgIGAgKi9cclxuIC8vIGNvbnN0IGJvZHlUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3BCb2R5XCIpIGFzIEhUTUxEaXZFbGVtZW50XHJcbiAvLyBib2R5VGFnLnRleHRDb250ZW50PSBzaG9wcGluZ1BhZ2U7XHJcbi8vIGRvY3VtZW50LndyaXRlKHNob3BwaW5nUGFnZSlcclxuXHJcbi8qXHJcbmNvbnN0IGRlc1BhbnRzID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZC1wYW50c1wiKSBhcyBIVE1MRWxlbWVudCk7XHJcblxyXG4vLyBldmVudCBsaXN0ZW5lcnMgZm9yIGNsaWNrXHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwici1zaGlydFwiKSBhcyBIVE1MRWxlbWVudCAhPSBudWxsKXtcclxuICAgIGNvbnN0IHJlZFNoaXJ0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwici1zaGlydFwiKSBhcyBIVE1MRWxlbWVudClcclxuICAgIHJlZFNoaXJ0Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaXNSZWRTaGlydCgpKVxyXG59XHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYi1wYW50c1wiKSBhcyBIVE1MRWxlbWVudCAhPSBudWxsKXtcclxuICAgIGNvbnN0IGJsYWNrUGFudHMgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiLXBhbnRzXCIpIGFzIEhUTUxFbGVtZW50KTtcclxuICAgIGJsYWNrUGFudHM/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxpc0JsYWNrUGFudHMoKSlcclxuXHJcbn1cclxuaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiLXNoaXJ0XCIpIGFzIEhUTUxFbGVtZW50ICE9IG51bGwpe1xyXG4gICAgY29uc3QgYmx1ZVNoaXJ0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYi1zaGlydFwiKSBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICBibHVlU2hpcnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxpc0JsdWVTaHJpdCgpKVxyXG5cclxufVxyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImQtcGFudHNcIikgYXMgSFRNTEVsZW1lbnQgIT0gbnVsbCl7XHJcbiAgICBjb25zdCBkZXNQYW50cyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImQtcGFudHNcIikgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgZGVzUGFudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGlzRGVzUGFudHMoKSlcclxuXHJcbn0gKi9cclxuLyogY29uc3QgdGVzdG1lID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyLXNoaXJ0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnRcclxuIGZ1bmN0aW9uIHRlc3QgKCk6YW55IHtcclxuICAgIGlmICh0ZXN0bWUpe1xyXG4gICAgICAgIC8vIHRlc3RUaGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjci1zaGlydFwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ29vZFwiKVxyXG4gICAgICAgIHJldHVybiB0ZXN0bWVcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAvLyBjb25zdCB0ZXN0VGhpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Itc2hpcnRcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnRcclxuICAgICAgICByZXR1cm4gdGVzdG1lXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwidGVzdCBjb25zb2xlXCIpXHJcbmlmKHRlc3QoKSA9PSBudWxsKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZG8gbm90IHdhbnQgdG8gc2hvd3Rlc3QgY29uc29sZSBpbiBpZiAgXCIrdGVzdCgpKVxyXG59XHJcbmNvbnNvbGUubG9nKFwidGVzdCBjb25zb2xlIG91dCBvZiBpZiAgXCIrdGVzdCgpKVxyXG4gKi9cclxubGV0IGkgPSAwXHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG9wT2JqXCIpKXtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGZyb20gbG9jYWxzdG9yYWdlXHJcbiAgICAgICAgY29uc3QgbG9jYWxTaG9wOmFueSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvcE9ialwiKTtcclxuXHJcbiAgICAgICAgLy8gcGFyc2UgaW5mb3JtYXRpb25cclxuICAgICAgICBjb25zdCBzaG9wSnNvbjphbnkgPSBKU09OLnBhcnNlKGxvY2FsU2hvcClcclxuICAgICAgICBjb25zb2xlLmxvZyhzaG9wSnNvbi5sZW5ndGgpXHJcblxyXG4gICAgICAgIGlmKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnRTaXplXCIpIGFzIEhUTUxMSUVsZW1lbnQpKXtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PntcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXY6RXZlbnQpOmFueSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0U2l6ZVwiKSBhcyBIVE1MTElFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFMuaW5uZXJUZXh0ID0gXCJDYXJ0IFNpemU6IFwiICsgc2hvcEpzb24ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBpICBcIisgaSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhYmxlIHRlc3RcIitjYXJ0Uy5pbm5lclRleHQpXHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyLXNoaXJ0XCIpYXMgSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInItc2hpcnRcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldjpFdmVudCk6YW55ID0+IHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgUlR5cGU6c3RyaW5nID0gXCJSZWQgU2hpcnRcIlxyXG4gICAgICAgICAgICBjb25zdCBSUHJpY2U6bnVtYmVyID0gMjBcclxuICAgICAgICAgICAgY29uc3QgcmVkQ2xvdGhlcyA9IG5ldyBDbG90aGVzKFJUeXBlLFJQcmljZSlcclxuICAgICAgICAgICAgcmVkQ2xvdGhlcy5nZXRWYWx1ZXMoKVxyXG5cclxuICAgICAgICB9IClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdGVzdCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInItc2hpcnRcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpXHJcbiAgICBjb25zb2xlLmxvZyAoXCJjaGVjayBtZSAgIFwiICt0ZXN0KVxyXG59XHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYi1wYW50c1wiKWFzIEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PntcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiLXBhbnRzXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXY6RXZlbnQpOmFueSA9PiB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJwVHlwZTpzdHJpbmcgPSBcIkJsYWNrIFBhbnRzXCJcclxuICAgICAgICAgICAgY29uc3QgYnBQcmljZTpudW1iZXIgPSA2MFxyXG4gICAgICAgICAgICBjb25zdCBibGFja0Nsb3RoZXMgPSBuZXcgQ2xvdGhlcyhicFR5cGUsYnBQcmljZSlcclxuICAgICAgICAgICAgYmxhY2tDbG90aGVzLmdldFZhbHVlcygpXHJcblxyXG4gICAgICAgIH0gKVxyXG4gICAgfSk7XHJcbn1cclxuaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiLXNoaXJ0XCIpYXMgSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImItc2hpcnRcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldjpFdmVudCk6YW55ID0+IHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgYnNUeXBlOnN0cmluZyA9IFwiQmx1ZSBTaGlydFwiXHJcbiAgICAgICAgICAgIGNvbnN0IGJzUHJpY2U6bnVtYmVyID0gMjBcclxuICAgICAgICAgICAgY29uc3QgYmx1ZUNsb3RoZXMgPSBuZXcgQ2xvdGhlcyhic1R5cGUsYnNQcmljZSlcclxuICAgICAgICAgICAgIGJsdWVDbG90aGVzLmdldFZhbHVlcygpXHJcblxyXG5cclxuICAgICAgICB9IClcclxuICAgIH0pO1xyXG59XHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZC1wYW50c1wiKWFzIEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PntcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkLXBhbnRzXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXY6RXZlbnQpOmFueSA9PiB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRUeXBlOnN0cmluZyA9IFwiRGVzaWduZXIgUGFudHNcIlxyXG4gICAgICAgICAgICBjb25zdCBkUHJpY2U6bnVtYmVyID0gMjAwXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc0Nsb3RoZXMgPSBuZXcgQ2xvdGhlcyhkVHlwZSxkUHJpY2UpXHJcbiAgICAgICAgICAgICBkZXNDbG90aGVzLmdldFZhbHVlcygpXHJcblxyXG4gICAgICAgIH0gKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGZ1Y3Rpb24gdG8gZ2V0IHByaWNlIGFuZCB0eXBlXHJcbi8qICBmdW5jdGlvbiBpc1JlZFNoaXJ0ICgpOmFueSB7XHJcbiAgICBjb25zdCBSVHlwZTpzdHJpbmcgPSBcIlJlZCBTaGlydFwiXHJcbiAgICBjb25zdCBSUHJpY2U6bnVtYmVyID0gMjBcclxuICAgIGNvbnN0IHJlZENsb3RoZXMgPSBuZXcgQ2xvdGhlcyhSVHlwZSxSUHJpY2UpXHJcbiAgICByZWRDbG90aGVzLmdldFZhbHVlcygpXHJcbn1cclxuZnVuY3Rpb24gaXNCbGFja1BhbnRzICgpOmFueSB7XHJcbiAgICBjb25zdCBicFR5cGU6c3RyaW5nID0gXCJCbGFjayBQYW50c1wiXHJcbiAgICBjb25zdCBicFByaWNlOm51bWJlciA9IDYwXHJcbiAgICBjb25zdCBibGFja0Nsb3RoZXMgPSBuZXcgQ2xvdGhlcyhicFR5cGUsYnBQcmljZSlcclxuICAgIGJsYWNrQ2xvdGhlcy5nZXRWYWx1ZXMoKVxyXG5cclxuXHJcbn1cclxuZnVuY3Rpb24gaXNCbHVlU2hyaXQgKCk6YW55IHtcclxuICAgIGNvbnN0IGJzVHlwZTpzdHJpbmcgPSBcIkJsdWUgU2hpcnRcIlxyXG4gICAgY29uc3QgYnNQcmljZTpudW1iZXIgPSAyMFxyXG4gICAgY29uc3QgYmx1ZUNsb3RoZXMgPSBuZXcgQ2xvdGhlcyhic1R5cGUsYnNQcmljZSlcclxuICAgICBibHVlQ2xvdGhlcy5nZXRWYWx1ZXMoKVxyXG5cclxuXHJcbn1cclxuZnVuY3Rpb24gaXNEZXNQYW50cygpOmFueSB7XHJcbiAgICBjb25zdCBkVHlwZTpzdHJpbmcgPSBcIkRlc2lnbmVyIFBhbnRzXCJcclxuICAgIGNvbnN0IGRQcmljZTpudW1iZXIgPSAyMDBcclxuICAgIGNvbnN0IGRlc0Nsb3RoZXMgPSBuZXcgQ2xvdGhlcyhkVHlwZSxkUHJpY2UpXHJcbiAgICAgZGVzQ2xvdGhlcy5nZXRWYWx1ZXMoKVxyXG5cclxufSAqL1xyXG5cclxuLy8gZG9jdW1lbnQud3JpdGUoc2hvcHBpbmdQYWdlKVxyXG4vLyAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyLXNoaXJ0XCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBzaG9wcGluZ1BhZ2U7IiwiLy8gaW5wb3J0IGZ1bmN0aW9uc1xyXG5pbXBvcnQge0Nsb3RoZXN9IGZyb20gXCIuL2NhcnRfZnVuXCJcclxuLy8gaW1wb3J0IHtpc1JlZFNoaXJ0fSBmcm9tIFwiLi9zaG9wX3BhZ2VcIlxyXG5cclxuY29uc3QgcHJvZHVjdFR5cGU6c3RyaW5nID0gXCJcIlxyXG5jb25zdCBwcm9kdWN0UHJpY2U6bnVtYmVyID0gMFxyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlXCIpYXMgSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBjbG90aGVzID0gbmV3IENsb3RoZXMocHJvZHVjdFR5cGUscHJvZHVjdFByaWNlKTtcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydEJvZHlcIikgYXMgSFRNTEJvZHlFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdvbmxvYWQnLGNsb3RoZXMuZmlsbENhcnQoKSApXHJcblxyXG5cclxuICAgICAgICB9IClcclxuICAgIH1cclxuXHJcbiAgICAvKiBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlXCIpIGFzIEhUTUxFbGVtZW50KXtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVcIikgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRhYmxlIHRlc3RcIit0YWJsZSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZVwiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3Qgd29ya2luZyBcIiArdGFibGUpXHJcbiAgICB9ICovXHJcbi8vIGNvbnN0IGNsb3RoZXMgPSBuZXcgQ2xvdGhlcyhwcm9kdWN0VHlwZSxwcm9kdWN0UHJpY2UpXHJcbi8vIGNsb3RoZXMuZmlsbENhcnQoKVxyXG5cclxuXHJcbi8vIHRoaXMgd2lsbCBiZSB0aGUgZGVzcGxheSBwYWdlXHJcbi8vIGltcG9ydCBjbGFzc2VzLCBpbnRlcmZhY2UsIGFuZCBhYnN0cmFjdCBmdW5jdGlvblxyXG4vLyBpIG1heSBiZSB1c2luZyB0aGUgc2luZ2xldG9uIGRlc2lnbiBwYXR0ZXIgbG9vayBhdCB2aWRlbyBhZ2FpblxyXG4vLyByZW1lbWJlciBzb2xpZCBpZiBpIGhhdmUgdGltZVxyXG5cclxuLy8gdGhpcyBwYWdlIHdpbGwgYmUgZm9yIGRpc3BsYXlpbmcgY29udGVudFxyXG5cclxuLy8gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydEJvZHlcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTD0gYFxyXG4vLyBsZXQgcGFnZSA9XHJcbi8qIGA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbjxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWRhcmsgdGV4dC1saWdodFwiPlxyXG5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+PGgxIGNsYXNzPVwiZGlzcGxheS0zIHRleHQtbGlnaHRcIj5teVNob3BwaW5nU2l0ZTwvaDE+PC9hPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIj5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmJhci1pdGVtIGFjdGl2ZSBuYXYtcGlsbHMgXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwic2hvcHBpbmcuaHRtbFwiIGNsYXNzPVwibmF2LWxpbmtcIj5Db250aW51ZSBTaG9wcGluZzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcblxyXG48L2hlYWRlcj5cclxuPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICA8aDIgY2xhc3M9XCJkaXNwbGF5MVwiPlNob3BpbmcgY2FydCBDaGVjayBvdXQ8L2gyPlxyXG48L2Rpdj5cclxuPGRpdj5cclxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIiBpZD1cInRhYmxlXCI+XHJcbiAgICAgICAgPHRyIGNsYXNzPVwidGhlYWQtZGFya1wiPlxyXG4gICAgICAgICAgICA8dGg+SXRlbSBOYW1lPC90aD5cclxuICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwibGVhZFwiPm5hbWUgb2YgcG9kdWN0PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwibGVhZFwiPnByaWNlIG9mIHByb2R1Y3QgYXMgbnVtYmVyPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwibGVhZFwiPnRvdGFsIHByaWNlPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwibGVhZFwiPnRvdGFsIHByaWNlIGFzIG51bWJlcjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgIDwvdGFibGU+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4yLjEuc2xpbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtS0ozbzJES3RJa3ZZSUszVUVOem1NN0tDa1JyL3JFOS9RcGc2YUFaR0p3RkRNVk5BL0dwR0ZGOTNoWHBHNUtrTlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTIuOS91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1BcE5iZ2g5QitZMVFLdHYzUm43VzNtZ1B4aFU5Sy9TY1FzQVA3aFVpYlgzOWo3ZmFrRlBza3ZYdXN2ZmEwYjRRXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuPHNjcmlwdCBzcmM9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9qcy9ib290c3RyYXAubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUpaUjZTcGVqaDRVMDJkOGpPdDZ2TEVIZmUvSlFHaVJSU1FReFNmRldwaTFNcXVWZEF5alVhcjUrNzZQVkNtWWxcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG48L2JvZHk+XHJcbjwvaHRtbD5gXHJcbiAqL1xyXG5cclxuLy8gZG9jdW1lbnQud3JpdGUocGFnZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
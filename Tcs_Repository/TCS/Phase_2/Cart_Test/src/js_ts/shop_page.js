"use strict";
exports.__esModule = true;
// focus on connections
var cart_fun_1 = require("./cart_fun");
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
//const bodyTag = document.getElementById("shopBody") as HTMLDivElement
//bodyTag.textContent= shoppingPage;
//document.write(shoppingPage)
var redShirt = document.getElementById("r-shirt");
var blackPants = document.getElementById("b-pants");
var blueShirt = document.getElementById("b-shirt");
var desPants = document.getElementById("d-pants");
// event listeners for click
redShirt === null || redShirt === void 0 ? void 0 : redShirt.addEventListener('click', isRedShirt());
blackPants === null || blackPants === void 0 ? void 0 : blackPants.addEventListener('click', isBlackPants());
blueShirt === null || blueShirt === void 0 ? void 0 : blueShirt.addEventListener('click', isBlueShrit());
desPants === null || desPants === void 0 ? void 0 : desPants.addEventListener('click', isDesPants());
// fuction to get price and type
function isRedShirt() {
    var RType = "Red Shirt";
    var RPrice = 20;
    var redClothes = new cart_fun_1.Clothes(RType, RPrice);
    redClothes.getValues();
}
function isBlackPants() {
    var bpType = "Black Pants";
    var bpPrice = 60;
    var blackClothes = new cart_fun_1.Clothes(bpType, bpPrice);
    blackClothes.getValues();
}
function isBlueShrit() {
    var bsType = "Blue Shirt";
    var bsPrice = 20;
    var blueClothes = new cart_fun_1.Clothes(bsType, bsPrice);
    blueClothes.getValues();
}
function isDesPants() {
    var dType = "Designer Pants";
    var dPrice = 200;
    var desClothes = new cart_fun_1.Clothes(dType, dPrice);
    desClothes.getValues();
}
//document.write(shoppingPage)
//(document.getElementById("r-shirt") as HTMLElement).innerHTML = shoppingPage;

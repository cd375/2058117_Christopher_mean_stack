// inport functions
import {Clothes} from "./cart_fun"
// import {isRedShirt} from "./shop_page"

const productType:string = ""
const productPrice:number = 0
if(document.getElementById("table")as HTMLButtonElement){
    document.addEventListener("DOMContentLoaded",()=>{
            const clothes = new Clothes(productType,productPrice);
            (document.getElementById("cartBody") as HTMLBodyElement).addEventListener('onload',clothes.fillCart() )


        } )
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
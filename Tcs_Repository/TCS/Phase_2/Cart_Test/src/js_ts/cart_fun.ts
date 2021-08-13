
import { node } from "webpack";
import {StoreFun} from "./cart_in"
// this page will be for functions
// let me put the funtions in a class and import the interfaces
const arrayData = new Array<any>()
let fillArray = new Array<any>()
let math = 0
let cSize = 0

export class Clothes implements StoreFun{
    // this will have every item in the store
    constructor(public itemType:string, public itemPrice:number){
        this.itemType = itemType;
        this.itemPrice = itemPrice;
    }
    // the array to store getValues values

// function gets values from price and calls the creat function
    getValues() {
        // prvents the submit function
        // ev.preventDefault()

        // get the item's type and price
        const charObj = {charType:this.itemType,charPrice:this.itemPrice}


        // putting item and price in array

        // check if item or price are empty
        if(charObj.charPrice !== 0 || charObj.charType !== ''){
            // push into array
            arrayData.push(charObj)
            // put item and price into local storage
            localStorage.setItem("shopObj",JSON.stringify(arrayData));
            // call the createTable function cannot create inside the class
            this.writeTable(charObj.charType, charObj.charPrice)


        }

    }
    cSize ():string{

        cSize = cSize + 1
        const cartS = document.getElementById("cartSize") as HTMLLIElement
        cartS.innerText = "Cart Size: " + cSize;
        return  cartS.innerText
    }

// The creat function adds elemnts to the table
    writeTable(type:string,price:number):any{
        const table = document.getElementById("table") as HTMLTableElement

         const row = table.insertRow(0)// tr

        const colPro = row.insertCell(0)// td
        const colPrice = row.insertCell(1)// td

        colPro.innerText = type;
        colPrice.innerText = price.toString();
        table.insertBefore(row, table.firstElementChild.nextSibling)
     }

// fuction fillCart/init
// this function will grab information form the local storage
// and call the create function so information does not go away when page loads
    fillCart():any {


        // check if get is true
        if(localStorage.getItem("shopObj")){

            // get from localstorage
            const localShop:any = localStorage.getItem("shopObj");

            // parse information
            const shopJson:any = JSON.parse(localShop)

            // make array equel to parse
            fillArray = shopJson
            // math
            // make loop i = array.length - 1
            for(let i = fillArray.length - 1; i > -1 ; i--){

                // check if parse is empty
                if (fillArray[i].charType !== "" || fillArray[i].charPrice !== 0){
                    // call create
                    this.writeTable(fillArray[i].charType, fillArray[i].charPrice)
                    math = math + parseInt(fillArray[i].charPrice)
                }
            }

        }

        (document.getElementById("math") as HTMLElement).innerText = math.toString();
       // (document.getElementById("cartSize") as HTMLUListElement).innerText = "Cart Size "+ fillArray.length;

    }




}



import {StoreFun} from "./cart_in"
// this page will be for functions
// let me put the funtions in a class and import the interfaces

class Clothes implements StoreFun{
    // this will have every item in the store
    constructor(public itemType:string, public itemPrice:number){
        this.itemType = itemType;
        this.itemPrice = itemPrice;
    }
    // the array to store getValues values

// function gets values from price and calls the creat function
    getValues():void {
        // prvents the submit function
        // ev.preventDefault()

        // get the item's type and price
        const charObj = {charType:this.itemType,charPrice:this.itemPrice}


        // putting item and price in array
        const arrayData = new Array<any>()
        // check if item or price are empty
        if(charObj.charPrice !== 0 || charObj.charType !== ''){
            // push into array
            arrayData.push(charObj)
            // put item and price into local storage
            localStorage.setItem("shopObj",JSON.stringify(arrayData));
            // call the createTable function cannot create inside the class
            this.createTable(charObj.charType, charObj.charPrice)


        }



    }


// The creat function adds elemnts to the table
    createTable(type:string,price:number): any{
        const table:any = (document.getElementById("table") as HTMLElement)
        /* let tableRow = `
        <tr>
            <td class="lead">${type}</td>
            <td class="lead">${price}</td>
        </tr>
        ` */
        const row = table.insertRow()// tr

        const colPro = row.insertCell(0)// td
        const colPrice = row.insertCell(1)// td



        colPro.innerText = type;
        colPrice.innerText = price;
        table.insertBefore(row, table.firstElementChild.nextSibling)
        // return tableRow;
     }


// fuction fillCart/init
// this function will grab information form the local storage
// and call the create function so information does not go away when page loads
    fillCart():any {
        // ev.preventDefault()

        // check if get is true
        if(localStorage.getItem("shopObj")){

            // get from localstorage
            const localShop:any = localStorage.getItem("shopObj");

            // parse information
            const shopJson:any = JSON.parse(localShop)

            // make array equel to parse
            let fillArray = new Array<any>()
            fillArray = shopJson

            // make loop i = array.length - 1
            for(let i = fillArray.length - 1; i > -1 ; i--){

                // check if parse is empty
                if (fillArray[i].charType !== "" || fillArray[i].charPrice !== 0){
                    // call create
                    this.createTable(fillArray[i].charType, fillArray[i].charPrice)
                }
            }
        }

    }




}


// this page will display shoping
// need to call let call = new clothes(get type, getprice)
// get by id
const redShirt = (document.getElementById("r-shirt") as HTMLElement);
const blackPants = (document.getElementById("b-pants") as HTMLElement);
const blueShirt = (document.getElementById("b-shirt") as HTMLElement);
const desPants = (document.getElementById("d-pants") as HTMLElement);

// event listeners for click
redShirt.addEventListener('click',isRedShirt())
blackPants.addEventListener('click',isBlackPants())
blueShirt.addEventListener('click',isBlueShrit())
desPants.addEventListener('click',isDesPants())


// fuction to get price and type
 function isRedShirt ():any {
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

}
const productType:string = ""
const productPrice:number = 0
const clothes = new Clothes(productType,productPrice)
window.onload = clothes.fillCart()


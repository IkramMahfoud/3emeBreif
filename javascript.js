const ordrBtn = document.querySelectorAll(".order")

ordrBtn.forEach(Element =>{
    Element.addEventListener("click",function(){
        let hrcarte= document.querySelector(".hrCarte")

        let parentElement =  Element.parentElement
        let productName =(parentElement.querySelector("#sushi_name").innerHTML)
        let productPrice =(parentElement.querySelector("#sushi_price").innerHTML)
        let producyImg =(parentElement.querySelector("img").src)
      

        let html =  `<div class="mycatreStyle">
        <img src=${producyImg} >
        <p id="price">${productPrice}</p>
        <input input id="qntt" type="number" value="1">
       
    </div>`
    hrcarte.insertAdjacentHTML("beforeend",html)
    })
})


const totalbtn = document.querySelector(".clc")
totalbtn.addEventListener("click",function(){
    const panier = document.querySelector(".hrCarte")
    const orderdiv = panier.querySelectorAll(".mycatreStyle")
    let totalaArray = []


    orderdiv.forEach(Element => {
        let productPrice =Element.querySelector("#price").innerHTML.replace("$","")
        let quantity = Element.querySelector("#qntt")
        // console.log(productPrice ,quantity.value)
        totalaArray.push(quantity.value* Number(productPrice))
        
    })
    console.log(totalaArray)
    let total = totalaArray.reduce((previousValue, currentValue) => previousValue + currentValue)
    console.log("$" + total)
    alert("$" + total)
})
// --------------------------------------------------------------------------------------------
function toggel1() {
    var menu = document.getElementById("toggel");
    menu.style.display = "flex";
}
function toggel() {
    var menu = document.getElementById("toggel");
    menu.style.display = "none";
}





/*______________FILTER_______________*/ 

function salade(){
    let cards = document.querySelectorAll('.picture')

    cards.forEach( function(card){
        if(card.classList.contains('salade')){
            card.style.display = 'block';
        }else {
            card.style.display = 'none';
        }
})}


function sushi(){
    let crd= document.querySelectorAll('.picture')

    crd.forEach(function(card){
        if(card.classList.contains('sushi')){
            card.style.display= 'block';
        }else{
            card.style.display= 'none';
        }
})}


function alcohol(){
    let cads= document.querySelectorAll('.picture')

    cads.forEach(function(card){
        if(card.classList.contains('shopAlchool')){
            card.style.display= 'block';
        }else{
            card.style.display= 'none';
        }
})} 


function obento(){
    let cds= document.querySelectorAll('.picture')

    cds.forEach(function(card){
        if(card.classList.contains('obento')){
            card.style.display= 'block';
        }else{
            card.style.display= 'none';
        }
})}
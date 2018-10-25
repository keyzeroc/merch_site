var storageName="hscart";
var totalPriceP;
var itemsArray;
//------items storage in code :\\\\
var hoody1={
	name:"Hoody1",
	price:30,
	imgPath:"img/clothings/hoody1.png"
};
var hoody2={
	name:"Hoody2",
	price:30,
	imgPath:"img/clothings/hoody2.png"
};
var hoody3={
	name:"Hoody3",
	price:30,
	imgPath:"img/clothings/hoody3.png"
};
//----------FUNCS-----------
$(document).ready(function(){
	totalPriceP = $("#cart-total-price");
	itemsArray = getSavedItems();
	let total = calcPrice();
	totalPriceP.text(totalPriceP.text()+" "+total+"$");
	console.log(total);
});
function calcPrice(){
	let total = 0;
	for (i = 0;i<itemsArray.length;i++) {
		switch(itemsArray[i]) {
    		case hoody1.name:
        		total+=hoody1.price;
        	break;
    		case hoody2.name:
        		total+=hoody2.price;
        	break;
    		case hoody3.name:
        		total+=hoody3.price;
        	break;
		}
	}
	return total;
}

var totalPrice=0;
var storageName="hscart";
var itemsDiv;
//------items storage in code :\\\\
var hoody1={
	name:"Hoody1",
	price:30,
	imgPath:"img/hoody1.png"
};
var hoody2={
	name:"Hoody2",
	price:30,
	imgPath:"img/hoody2.png"
};
var hoody3={
	name:"Hoody3",
	price:30,
	imgPath:"img/hoody3.png"
};
//----------FUNCS-----------
window.onload = function(){
	itemsDiv = document.getElementById("cart-items");
	setupCheckout();
}
function setupItem(item){
	switch(item) {
		case hoody1.name:
			createAndSetupItem(hoody1);
			totalPrice+=hoody1.price;			        
	break;
		case hoody2.name:
			createAndSetupItem(hoody2);
			totalPrice+=hoody2.price;
	break;
		case hoody3.name:
			createAndSetupItem(hoody3);
			totalPrice+=hoody3.price;
	break;
		default:
	return;
	}
}
function createAndSetupItem(item){
	// item image
	let image = document.createElement("img");
	image.src = item.imgPath;
	// item name
	let name = document.createElement("p");
	name.innerHTML = item.name;
	// item price
	let price = document.createElement("p");
	price.innerHTML = item.price;
	// container
	let containerDiv = document.createElement("div");
	containerDiv.appendChild(image);
	containerDiv.appendChild(name);
	containerDiv.appendChild(price);
	containerDiv.className = "col";
	// append item in item list
	itemsDiv.appendChild(containerDiv);
}
function setupCheckout(){
	let itemsArray = getStoreArray(storageName);
	if(itemsArray.length===0){
		alert("Cart is empty!");
	}else{
		for (var i = 0; i < itemsArray.length; i++) {
			setupItem(itemsArray[i]);
		}
	}
}
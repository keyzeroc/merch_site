var storageName="hscart";

window.onload=function() {
	loadItems();
};

function handleButton(item){
	let itemsArray = getStoreArray(storageName);
	if(itemsArray.includes(item)) return;
	addtoList(item)
	save(item);
}
function addtoList(item){
	createLiAndSetup(item);
}
function createLiAndSetup(item){
	let li = document.createElement("li");
	let ul = document.getElementById(storageName);
	li.innerHTML = item;
	li.onclick = function() {
		ul.removeChild(li);
		clear(item);
	};
	ul.appendChild(li);
}
//------------------LOCAL STORAGE FUNCS---------------------
function save(item) {
	let itemsArray = getStoreArray(storageName);
	itemsArray.push(item);
	localStorage.setItem(storageName, JSON.stringify(itemsArray));
}
function clearAll() {
	let ul = document.getElementById(storageName);
	while (ul.firstChild) {
    	ul.removeChild(ul.firstChild);
	}
	localStorage.clear();
}
function clear(item){
	let itemsArray = getStoreArray(storageName);
	for(let i=0;i<itemsArray.length;i++){
		if(itemsArray[i]===item){
			itemsArray.splice(i,1);
			localStorage.setItem(storageName, JSON.stringify(itemsArray));
			return;
		}
	}
}
function loadItems() {
	itemsArray = getSavedItems();
	let ul = document.getElementById(storageName);
	if (itemsArray != null) {
		for (let i = 0; i < itemsArray.length; i++) {
			createLiAndSetup(itemsArray[i]);
		}
	}
}
function getSavedItems() {
	return getStoreArray(storageName);
}
function getStoreArray(key) {
	let itemsArray = localStorage.getItem(key);
	if (itemsArray == null || itemsArray =="") {
		itemsArray = new Array();
	}
	else {
		itemsArray = JSON.parse(itemsArray);
	}
	return itemsArray;
}
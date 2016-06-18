
// ====================QUESTION ONE===========================
var pricelookup = items.map(function(cat){                 
	return cat.price;
});
var addtotal = pricelookup.reduce(function(a,b) {
	return (a + b);
});

var average = addtotal / pricelookup.length 

average = average.toFixed(2);

var returnavg =document.querySelector(".finalanswer");
	returnavg.innerHTML = average;


// =====================QUESTION TWO============================

var currencylookup = items.filter(function(cat){                 
	return ((cat.currency_code == "USD") && (cat.price>14 && cat.price<18));
});

var textlookup = currencylookup.map(function(cat){                 
	return cat.title;
});

var returnitems =document.querySelector(".finalitems");
	returnitems.innerHTML = textlookup;

var finaltitletext = document.querySelector(".finalitems");

var newHTML = "";
	 textlookup.forEach (function(title) {
  newHTML += "<p>" + title + "</p>";
});

	finaltitletext.innerHTML = newHTML;


// ======================QUESTION THREE==========================
// var currencylookup = items.forEach(function(dog){
// 	if (dog.currency_code == "GBP");
// 	return [dog.title, dog.price];
// });

var currencylookup = items.filter(function(cat){                 
	return cat.currency_code == "GBP";
});

var titleprice = currencylookup.map(function(things){
	return [things.title, things.price];
});

var itempricelist = document.querySelector(".finaltitleprice");


var newHTML = "";
titleprice.forEach(function (thing) {
  newHTML += "<p>" + thing[0] + " costs " + thing[1] + "</p>";
});
itempricelist.innerHTML = newHTML;


// ========================QUESTION FOUR=========================

var materialslookup = items.map(function(dog) {
	return dog.materials;
});

var woodlookup = materialslookup.map(function(cat){
	if (cat == "wood");
	return cat;
});

// var woollookup = function (mouse) { 
//   var max = null;
//   for(var index = 0; index < items.length; index++) {
//     if (items[index] > max) { max = items[index]; }
//   };
// 	return mouse;
// };

// var arrayMax = function (items) {
//   var max = null;
//   for(var index = 0; index < items.length; index++) {
//     if (items[index] > max) { max = items[index]; }
//   };
//   return max;
// };

// var woollookup = function (mouse) { 
// if (woollookup == wool);
// 	return mouse;
// };


// var woollookup = items.filter(function(cat){                 
// 	return cat.wool;
// });

// var normalArrayMax = function (items) {
//   var max = null;
//   items.forEach(function (number) {
//     if (number > max) { max = number; }
//   });
// };

// for(int i = 0; i < array.length; i++) {

//     if(word.equals(array[i]) {

//        ....

//     }

// }

// =================QUESTION FIVE=================


// =================QUESTION SIX==================
var whomadelookup = items.filter(function(dog){                 
	return dog.who_made == "i_did";
});


whomadelookup.reduce(function (a, b) {
    return a + b;
});


// var answer1_box = document.querySelector("#answer1")
// undefined
// answer1_box
// <div class=​"answer" id=​"answer1">​</div>​
// typeof answre
// "undefined"
// typeof answer1_box
// "object"
// answer1_box.innerHTML
// ""
// answer1_box.innerHTML = "<h1>Cool</h1>"
// "<h1>Cool</h1>"
// answer1_box
// <div class=​"answer" id=​"answer1">​…​</div>​<h1>​Cool​</h1>​</div>​
// answer1_box.innerHTML = ""
// ""
// items
// [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object]
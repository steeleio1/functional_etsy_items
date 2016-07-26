
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

var currencylookup = items.filter(function(dog){                 
	return dog.currency_code == "GBP";
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

var woodlookup = items.filter(function(item){
return item.materials.includes ("wood") ||
		item.materials.includes ("Wood")

});


// var wooditems = document.querySelector(".woodlist");
// 	wooditems.innerHTML = woodlookup;

// 	wooditems.innerHTML = newHTML;

// =================QUESTION FIVE=================
var filterFive = items.filter(function(obj){
  if (obj.materials.length >= 8) {
    console.log(obj.title + " has " + obj.materials.length + " materials");
    console.log(obj.materials);
  }
})

// =================QUESTION SIX==================
var whomadelookup = items.filter(function(dog){                 
	return dog.who_made == "i_did";
});

var totalwhomade = whomadelookup.length;

var sellers = document.querySelector(".totalmade");
	sellers.innerHTML = totalwhomade + " were made by their sellers";





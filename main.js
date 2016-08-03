
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

var woodlookup = items.filter(function(item) {
	var materials = item.materials;
	return materials.includes("wood") || materials.includes("Wood");
	  // return item.materials.includes ("wood") ||
			// item.materials.includes ("Wood")
});

var wooditems = document.querySelector(".woodlist");
var newHTML = "";
 	woodlookup.forEach(function(wooditem) {
	newHTML += "<p>" + wooditem.title + " is made of wood." + "</p>";
	wooditems.innerHTML = newHTML
});

	// wooditems.innerHTML = newHTML;

// =================QUESTION FIVE=================
var filterFive = items.filter(function(obj){
  return obj.materials.length >= 8
})
console.log(filterFive);

var questFive = document.querySelector("#answer5");
// var altquestFive = document.querySelector(".materialsList");

var newHTML = "";

  filterFive.forEach(function(listitem){
  	// console.log(listitem)
  	console.log(listitem.materials);
  	newHTML += "<h4 class=\"nameItemList\"><p>" + listitem.title + " has " + listitem.materials.length + " materials:" + "</p></h4>";
  	// loop over the *materials* because it's an array. add an li to newHTML for every material
  	newHTML += "<ul class=\"materialsList\"";
  	listitem.materials.forEach(function (material) {
 		newHTML += "<li>" + material + "</li>";
  	});
  	newHTML += "</ul>";
  	// materialsHTML += "<li>" + listitem.materials + "</li>";
  });

  questFive.innerHTML = newHTML;


// =================QUESTION SIX==================
var whomadelookup = items.filter(function(dog){                 
	return dog.who_made == "i_did";
});

var totalwhomade = whomadelookup.length;

var sellers = document.querySelector(".totalmade");
	sellers.innerHTML = totalwhomade + " were made by their sellers";





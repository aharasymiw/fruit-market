// Global price variables, initiated to a base price
var totalCash = 0;
var applePrice = 500;
var orangePrice = 500;
var bananaPrice = 500;
var grapePrice = 500;
var appleStore = {
	num: 0, 
	avg: 0
};

// Return a random number between min and max
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// Return a random number between -50 and 50
function randomPrice() {
	var randomValue = 0;
	 
	 randomValue = randomNumber(0, 50);
	if (randomNumber(1, 10) % 2 === 0){
		return randomValue;
	}else {
		return -1 * randomValue;
	}
}

// Update prices ever 15 seconds
function priceStream(){
	setInterval(function(){
	
		// Get a random price adjustment for the fruit
		applePrice += randomPrice();
		orangePrice += randomPrice();
		bananaPrice += randomPrice();
		grapePrice += randomPrice();
	
		// Update value of the global variable for the fruit's price
		if(applePrice < 50){applePrice = 50;}
		if(applePrice > 999){applePrice = 999;}
		if(orangePrice < 50){orangePrice = 50;}
		if(orangePrice > 999){orangePrice = 999;}
		if(bananaPrice < 50){bananaPrice = 50;}
		if(bananaPrice > 999){bananaPrice = 999;}		
		if(grapePrice < 50){grapePrice = 50;}
		if(grapePrice > 999){grapePrice = 999;}		
	
		//Update current price of the fruit in the DOM
		$('#apple span').first().remove();
		$('#apple > h3').append($('<span>').text((applePrice/100).toFixed(2)));
		$('#orange span').first().remove();
		$('#orange > h3').append($('<span>').text((orangePrice/100).toFixed(2)));
		$('#banana span').first().remove();
		$('#banana > h3').append($('<span>').text((bananaPrice/100).toFixed(2)));
		$('#grape span').first().remove();
		$('#grape > h3').append($('<span>').text((grapePrice/100).toFixed(2)));
	}, 500)
}

function buy(){
	$('button').on('click', '#apple', function(){
		
		appleStore.num++;
		 
	})
}
// Document ready wraper
$(function(){

	priceStream();

	// Button?
}); 


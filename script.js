// Global price variables, initiated to a base price
var applePrice = 500;
var orangePrice = 500;
var bananaPrice = 500;
var grapePrice = 500;

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
$(function(){
    setInterval(function(){

		// Initialize empty string variables from 
		var appleString = '';
		var orangeString = '';
		var bananaString = '';
		var grapeString = '';
		
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
		
		// Convert the fruit's current price to a formated string for display
		appleString = applePrice.toString().substring(0,1) + '.' + applePrice.toString().substring(1,3);
		orangeString = orangePrice.toString().substring(0,1) + '.' + orangePrice.toString().substring(1,3);
		bananaString = bananaPrice.toString().substring(0,1) + '.' + bananaPrice.toString().substring(1,3);
		grapeString = grapePrice.toString().substring(0,1) + '.' + grapePrice.toString().substring(1,3);
		
		//Update current price of the fruit in the DOM
		$('#apple span').first().remove();
		$('#apple > h3').append($('<span>').text(appleString));
		$('#orange span').first().remove();
		$('#orange > h3').append($('<span>').text(orangeString));
		$('#banana span').first().remove();
		$('#banana > h3').append($('<span>').text(bananaString));
		$('#grape span').first().remove();
		$('#grape > h3').append($('<span>').text(grapeString));
    }, 500)
}); 
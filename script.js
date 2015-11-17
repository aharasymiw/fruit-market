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
		applePrice += randomPrice();
		orangePrice += randomPrice();
		bananaPrice += randomPrice();
		grapePrice += randomPrice();
		
		if(applePrice < 50){applePrice = 50;}
		if(applePrice > 999){applePrice = 999;}
		if(orangePrice < 50){orangePrice = 50;}
		if(orangePrice > 999){orangePrice = 999;}
		if(bananaPrice < 50){bananaPrice = 50;}
		if(bananaPrice > 999){bananaPrice = 999;}		
		if(grapePrice < 50){grapePrice = 50;}
		if(grapePrice > 999){grapePrice = 999;}		
		
		$('#apple  span').remove();
		$('#apple > h3').append($('<span>').text(applePrice));
		$('#orange  span').remove();
		$('#orange > h3').append($('<span>').text(orangePrice));
		$('#banana  span').remove();
		$('#banana > h3').append($('<span>').text(bananaPrice));
		$('#grape  span').remove();
		$('#grape > h3').append($('<span>').text(grapePrice));
		console.log(applePrice, orangePrice, bananaPrice, grapePrice);		
    }, 15000)
}); 
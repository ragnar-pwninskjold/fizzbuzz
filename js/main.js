$(document).ready(function(){

	//on page load, prompt for #

	do {

		input = prompt("Enter a valid number between 1 and 100 to check for FizzBuzness");
	}

	while (checker(input) == false);

	// take argument from prompt and do the fizzbuzz


	fizzBuzz(input);
}); 

//make a function that will check if they actually entered a valid number

		//make sure the user is actually entering a number, not a world like "hello"

		//make sure they aren't entering a decimal value

		//method of converting input to an integer parseInt() could work

function checker(x) {

	var y = parseInt(x);

	if (isNaN(parseInt(x)) == true) {
	
		return false;

	}

	else if (y % 1 != 0) {

		return false;
	}

	else {

		return true;

	}

}

//make a function that checks for FizzBuzz

function fizzBuzz (limit) {

//do fizzBuzz while counter < limit, also document write this to the screen each time


for (i = 1; i <= limit; i++) {

		if (i % 3 == 0 && i % 5 == 0) {
			document.write("FizzBuzz" + "<br>"+ "<br>");
		}
		else if (i % 3 != 0 && i % 5 == 0) {
			document.write("Buzz" + "<br>"+ "<br>");
		}
		else if (i % 3 == 0 && i % 5 != 0) {
			document.write("Fizz" + "<br>"+ "<br>");
		}
		else {
			document.write(i + "<br>"+ "<br>");
		}
	}	


}
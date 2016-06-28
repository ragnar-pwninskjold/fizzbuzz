$(document).ready(function(){

	for (i = 1; i < 100; i++) {

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

}); 
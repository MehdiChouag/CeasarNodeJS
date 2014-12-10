#!/usr/bin/env node

var program = require('commander');

program
.version("0.0.1")
.option("-d [number]", "Define the number the of shift");

console.log(CaesarCrypto("100", "ZZ"));
function CaesarCrypto(number, string){
	if (isNaN(number)){
		return "The shift for the caesar cryptography is not a number"
	}
	else if (!isNaN(string)) {

		return "The string contain contains only number";
	}
	else {
		number = parseInt(number);
		var ret = "";
		for (var i = 0;  i <= string.length - 1; i++) {
			var asciiCode = string.charCodeAt(i);
			if (asciiCode >= 65 && asciiCode <= 90 || asciiCode >= 97 && asciiCode <= 122) {
				if (asciiCode >= 65 && asciiCode <= 90 && asciiCode + number > 90 && number > 0)
					asciiCode = 64;
				else if (asciiCode >= 97 && asciiCode <= 122 && asciiCode + number > 122 && number > 0)
					asciiCode = 96;
				ret += String.fromCharCode(asciiCode + number % 26);
			}
			else
				ret += string.charAt(i);
		}
		return ret;
	}
}
#!/usr/bin/env node

var program = require('commander');

program
  .usage("[option] <file...>")
  .option("-d <n> <items>");

program.on("-d", function (number, string){
	console.log(number);
	console.log(string);
  	var display = [];
	if (number && string) {
		for (var i = 0; i <= string.length - 1; i++) {
			display.push(CaesarCrypto(number, string[i]));
		}
		display.forEach(function (str){
			console.log(str);
		});
	}
	else if (process.argv.length < 3)
		console.log ("Usage : bin/caesar.js -d [number] [string...]");
});

program.parse(process.argv);



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
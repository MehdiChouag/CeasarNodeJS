#!/usr/bin/env node

/* Require on commander */

var program = require('commander');

/* Setting commander and the options */
program
.usage("[option] <file...>")
.option("-d <n>", "[number] [string...]")
.parse(process.argv);

/* handle the -d option and check if the argument is valid and is the string to encode exist */
program
.on("-d", function (number){
	var display = [];
	var string = program.args;
	if (number && program.args.length >= 1) {
		for (var i = 0; i <= string.length - 1; i++) {
			display.push(CaesarCrypto(number, string[i]));
		}
		display.forEach(function (str){
			console.log(str);
		});
	}
	else
		console.log ("Usage : bin/caesar.js -d [number] [string...]");
})
.parse(process.argv);


/* This function return the string encode or an error and takes 
an argument the number for the shift and the string to encode */ 
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
				if (number % 26 != 0){
					number %= 26;
					if (asciiCode >= 97 && asciiCode <= 122 && (asciiCode + number > 122 || asciiCode + number < 97)) {
						asciiCode = (asciiCode + number > 122) ? (96 + asciiCode + number - 122) : (122 + asciiCode + number - 96);
						ret += String.fromCharCode(asciiCode);
					} else if (asciiCode >= 65 && asciiCode <= 90 && (asciiCode + number > 90 || asciiCode + number < 65)){
						asciiCode = (asciiCode + number > 90) ? (64 + asciiCode + number - 90) : (90 + asciiCode + number - 64);
						ret += String.fromCharCode(asciiCode);
					} else {
						ret += String.fromCharCode(asciiCode + number);
					}
				}
				else
					ret += String.fromCharCode(asciiCode);
			}
			else
				ret += string.charAt(i);
		}
		return ret;
	}
}

module.exports = CaesarCrypto;
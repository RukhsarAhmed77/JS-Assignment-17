// Part 01

// Question No. 1
// While LOOP
// var i = 0;
// while (i <= 3) {
// alert(i);
// i++;
// }

// Question No.2
// Do While LOOP
// var i = 0;
// do {
// alert(i);
// i++;
// } while (i <= 3);

// Question No.3
// Check Index Documentry File

// Question No.4
// Js Coment Syntax
/*  Css Coment Syntax */
/* When a comment requires more than one line,
a block comment like this, with its opening
// and closing tags, is the way to go.*/ //(also used in JS for comenting multiple lines)

// <!-- --> Html Coment Syntax

// Question No.5

// Custom indexOf function to find the index of a single character in a string

// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i; // Return the index if character matches
//       }
//     }
//     return -1; // Return -1 if character is not found
//   }
  
//   // Example usage:
//   console.log(customIndexOf("hello", "e"));
//   console.log(customIndexOf("hello", "z"));
  

// Question No.6

// Function to remove all vowels from a sentence

// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
//   }
  
// Question No.7

// Function to count occurrences of two successive vowels

// function countVowelPairs(text) {
//     var count = 0;
//     for (var i = 0; i < text.length - 1; i++) {
//       var pair = text[i] + text[i + 1];
//       switch (pair.toLowerCase()) {
//         case 'ae':
//         case 'ea':
//         case 'io':
//         case 'oi':
//         case 'ui':
//           count++;
//           break;
//         default:
//           break;
//       }
//     }
//     return count;
//   }
  
// Question No.8

// Function to convert distance from kilometers to other units

// function convertDistance(km) {
//     var meters = km * 1000;
//     var feet = km * 3280.84;
//     var inches = km * 39370.1;
//     var centimeters = km * 100000;
  
//     console.log(`Distance in Meters: ${meters} m`);
//     console.log(`Distance in Feet: ${feet} ft`);
//     console.log(`Distance in Inches: ${inches} in`);
//     console.log(`Distance in Centimeters: ${centimeters} cm`);
//   }
  
//   convertDistance(5);
  
// Question No.9

// Function to calculate overtime pay for employees
// function calculateOvertime(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12;
//     if (hoursWorked > regularHours) {
//       var overtimeHours = hoursWorked - regularHours;
//       var overtimePay = overtimeHours * overtimeRate;
//       console.log(`Overtime Pay: Rs ${overtimePay}`);
//     } else {
//       console.log("No overtime worked.");
//     }
//   }
  
//   calculateOvertime(45);
//   calculateOvertime(35);
  
// Question No.10

// Function to calculate the number of currency notes for a given amount
// function calculateCurrencyNotes(amount) {
//     var totalAmount = amount * 100;
  
//     var note100 = Math.floor(totalAmount / 100);
//     totalAmount %= 100;
  
//     var note50 = Math.floor(totalAmount / 50);
//     totalAmount %= 50;
  
//     var note10 = Math.floor(totalAmount / 10);
//     totalAmount %= 10;
  
//     console.log(`Notes of Rs 100: ${note100}`);
//     console.log(`Notes of Rs 50: ${note50}`);
//     console.log(`Notes of Rs 10: ${note10}`);
//   }
  
//   calculateCurrencyNotes(15);
//   calculateCurrencyNotes(23);
  
// Part 02

// Question No.1

// function showAlert() {
//   alert("You clicked the link!");
// }

// Question No.2

// function showAlert(mobileName) {
//   alert("You clicked on " + mobileName);
// }

// Question No.4

// function changeImage() {
//   document.getElementById("lightBulb").src = "Bulb ON.webp";
// }

// function restoreImage() {
//   document.getElementById("lightBulb").src = "Bulb OFF.webp";
// }

// Question No.5

// var count = 0;

// function increase() {
//     count++;
//     document.getElementById("counter").innerHTML = count;
// }

// function decrease() {
//     count--;
//     document.getElementById("counter").innerHTML = count;
// }
/*
JavaScript 6 th Edition
Chapter 4
Hands - on Project 4 - 4

Author: Conner Duncan
Date: 02.21 .18

Filename: places.js
*/

var places = []; // new array to store entered places
var i = 0; // counter variable to track array indexes

// function to add input to array and then generate list after 5th submission
function processInput() {
    var listItem; //Stops listItem from being declared as a global variable due to logical fallacy.
    var placeBox = document.getElementById("placeBox"); //variable added for efficiency/readability
    places[i] = placeBox.value; // add entered value to array
    placeBox.value = ""; // clear text box
    if (i < 4) { // iterate counter variable if i is not equal to the final index needed in the array.
        i++;
    } else { // add entered value to array and write results to document
        document.getElementById("resultsExpl").innerHTML = "You entered the following places:";
        listItem = "";
        for (var j = 1; j <= 5; j++) { // write each array element to its corresponding list item
            listItem = "item" + j;
            document.getElementById(listItem).innerHTML = places[j - 1];
        }

    }
}
// add backward compatible event listener to Submit button
var submitButton = document.getElementById("button");
if (submitButton.addEventListener) {
    submitButton.addEventListener("click", processInput, false);
} else if (submitButton.attachEvent) {
    submitButton.attachEvent("click", processInput);
}
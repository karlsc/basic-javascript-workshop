// This function will be used to find out the first letter of a string

function returnFirstCharacter(aString) {
    
    return aString[0];
    
}

var yourString = prompt("Enter something of your choice");

if(yourString.length > 0){

    returnFirstCharacter(yourString);
    
} else {
    
    console.log("Nothing was entered!");

}

// This function will be used to find out the last letter of a string

function returnLastCharacter(aString) {

    return aString[aString.length - 1];
    
}

var yourString = prompt("Enter something of your choice");

if(yourString.length > 0){

    returnLastCharacter(yourString);
    
} else {
    
    console.log("Nothing was entered!");

}

// This function will be used to find out the letter position of your choice in a string

function returnLastCharacter(aString) {
    var stringHowLong = aString.length;
    var position = prompt("Select a number from 1 to " + stringHowLong) - 1;
    if(position <= aString.length - 1){
        
        return aString[position];
        
    } else {
        
       console.log("There is no character at this position.");
        
    }
}

var yourString = prompt("Enter something of your choice");

if(yourString.length > 0){

    returnLastCharacter(yourString);
    
} else {
    
    console.log("Nothing was entered!");

}

// This function is to add to numbers together

function addTwoNumbers(numberOne,numberTwo) {
    
    return numberOne + numberTwo;

}
    
 
addTwoNumbers(5,6);

// This function is to multiply to numbers together

function multiplyTwoNumbers(numberOne,numberTwo) {
    
    return numberOne * numberTwo;

}
    
 
multiplyTwoNumbers(5,6);

// This function takes two numbers and pass the action that you decide
// add, substract, mult, div

function actionOnTwoNumbers(numberOne,numberTwo,action) {
    
    if(action === "add") {
        
        return numberOne + numberTwo;
        
    } else if(action === "substract") {
        
        return numberOne - numberTwo;
        
    }
    else if(action === "mult") {
        
        return numberOne * numberTwo;
        
    }
    else if(action === "div") {
        
        return numberOne / numberTwo;
        
    }
    else {
        
        console.log("DOES NOT COMPUTE!!!!");
        
    }
    
}

actionOnTwoNumbers(2,3,"add");

// This function will repeat your string the number of time specified

function returnStringNumberOfTime(yourString,numberOfTime){
    
    var answer = ""
    
    while(numberOfTime > 0){
        
        answer += yourString;
        numberOfTime--;
        
    }
    
    return answer;
    
}

returnStringNumberOfTime("Hello",3);

// This function is to reverse a string

function reverseAString(yourString){
    
    return yourString.split("").reverse().join("");
    
}

reverseAString("Hey how are you?");
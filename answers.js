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

// This function is to return the factorial of a number

function factorial(yourNumber){
    
    var answer = 1;
    
    if(yourNumber === 0){
        
        return 1;
    } else {
        
        for(var i = 0 ; i < yourNumber ; yourNumber--){
            
            answer = answer * yourNumber;
            
        }
        
        return answer;
        
    }
}
    
factorial(5);

// This function returns the longest word in a string

function longestWord(yourString){
    
    var splitSentence = yourString.split(" ");
    var longest = 0;
    var answer = "";
    
    for(var i = 0 ; i < splitSentence.length ; i++ ){
        
        if(longest < splitSentence[i].length){
            
            longest = splitSentence[i].length;
            answer = splitSentence[i];
            
        }
        
    }
    
    return answer;
    
}

longestWord("This is a sentence");

// This function will capitalize the first letter of each words in a string

function capitalizeFirstLetter(yourString){
    
    var splitSentence = yourString.toLowerCase().split(" ");
    var answer = "";
    
    for(var i = 0 ; i < splitSentence.length ; i++){
        
        if(i === splitSentence.length -1){
            
            answer += splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1);
            
        }else {
        
        answer += splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1) +" ";
        
        }
        
    }
    
    return answer;
    
}

capitalizeFirstLetter("this is a SENtence");
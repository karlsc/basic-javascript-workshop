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

// This function will return the biggest number of an array

function biggestNumber(yourArray){
    
    var biggest = 0;
    var answer = 0;
    
    for(var i = 0 ; i < yourArray.length ; i++){
        
        if(biggest < yourArray[i]){
            
            biggest = yourArray[i];
            
        }
        
    }
    
    return biggest;
    
}

biggestNumber([2,5,9,4]);

// This function will filter an array to find the truthy

function filterMyArray(value){
    
    return !(value === false | value === "" | value === 0 | value === null | value === undefined | value === isNaN);
    
}

([2,0,true,"","test",false,-1,[2,2]]).filter(filterMyArray);

// This function will add all the numbers in an array together

function addNumbersInArray(yourArray){
    
    var answer = 0;
    
    for(var i = 0 ; i < yourArray.length ; i++){
        
        if(typeof yourArray[i] === "number"){
            
            answer += yourArray[i];
            
        }
        
    }
    
    return answer;
    
}

addNumbersInArray([1,4,false,"allo",true,12,true,true,"Allo",132,-2,5]);

// This function will return unique numbers of different arrays in one array

function returnUniquesOfArrays(arrayA,arrayB){

var arrayC = arrayA.filter(function(obj) { return arrayB.indexOf(obj) == -1; });
var arrayD = arrayB.filter(function(obj) { return arrayA.indexOf(obj) == -1; });
var arrayE = arrayC.concat(arrayD);

return arrayE;

}

returnUniquesOfArrays([12,2,45,4],[2,3,4,32]);

// This function will map a function to every values of an array

function addOne(value){
    
    var answer = [];
    
    for(var i = 0 ; i < value.length ; i++){
        
        answer.push(value[i]+1);
        
    }
    
    return answer;
    
}

function mapToEveryValue(yourArray,aFunction){

    return aFunction(yourArray);
    
}

mapToEveryValue([1,2,3],addOne);
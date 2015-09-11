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
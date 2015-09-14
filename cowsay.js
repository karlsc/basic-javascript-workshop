var fortuneRandom = Math.floor(Math.random()*10);
var sentence = "";

switch(fortuneRandom) {
    case 0:
        sentence = "Land is always on the mind of a flying bird.";
        break;
    case 1:
        sentence = "You cannot love life until you live the life you love.";
        break;
    case 2:
        sentence = "Your shoes will make you happy today.";
        break;
    case 3:
        sentence = "If you have something good in your life, don't let it go!";
        break;
    case 4:
        sentence = "You learn from yourmistakes. You will learn a lot today.";
        break;
    case 5:
        sentence = "A chance meeting opens new doors to success and friendship.";
        break;
    case 6:
        sentence = "People are naturally attracted to you.";
        break;
    case 7:
        sentence = "Enjoy the good luck a companion brings you.";
        break;
    case 8:
        sentence = "Change can hurt, but it leads a path to something better.";
        break;
    case 9:
        sentence = "Hard work pays off in the future, laziness pays off now.";
        break;
    default:
}

if(sentence.length > 30){
    
    for(var i = 29 ; i > 0 ; i--){
        
        if(sentence[i] === " " || sentence[i] === "." || sentence[i] === "!" || sentence[i] === "?"){
            
            sentence = sentence.slice(0,i)+"<br>"+sentence.slice(i,sentence.length);
            i = 0;
            
        }
    }
}

console.log(sentence+"<br>"+"^__^  //<br>"+"(oo) /<br>"+"(__)");


/*
 * Create a list that holds all of your cards
 */

//find and returns a list of elements with the class "card";
 let card = document.querySelectorAll(".card");
//let cards = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];
//spread operator to expand object into multiple element;
let cards = [...card]

//points to the parent element of cards;
const deck = document.getElementById("card-deck");

//Array which holds opened cards;
var openedCards = [];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



document.body.onload = Begin();


function Begin(){

    cards = shuffle(cards);
       cards.forEach(function(toremove){

        deck.innerHTML = "";
        cards.forEach(function(toappend) {
            deck.appendChild(toappend);

        });

        toremove.classList.remove("show", "open", "matched","locked");
    
       });
}





/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


var ifMatched = function(){
            openedCards[0].classList.remove("show", "open", "locked");
            openedCards[1].classList.remove("show", "open", "locked");
            openedCards = [];

};





var ifUnmatched = function(){
    setTimeout(function(){
            openedCards[0].classList.remove("show", "open", "unmatched", "locked");
            openedCards[1].classList.remove("show", "open", "unmatched", "locked");
            openedCards = [];
    },1000);

};




var compareCards = function (){



     if(openedCards[0].innerHTML === openedCards[1].innerHTML){
            openedCards[0].classList.add("matched");
            openedCards[1].classList.add("matched");
            //if comparison matches;
            ifMatched();

        } else {
            openedCards[0].classList.add("unmatched");
            openedCards[1].classList.add("unmatched");
            //if comparison doesn't match;
            ifUnmatched();
        }

      

   };

   
var showCard = function (){
    this.classList.add("open", "show", "locked");

     openedCards.push(this);

    var len = openedCards.length;
    if(len === 2){
        //to campare cards
         compareCards();
    }
};


 for (const card of cards){

    card.addEventListener("click",showCard);

 }

 /*
cards.forEach(function(elem)
{   
    elem.addEventListener("click", showCard);

});*/
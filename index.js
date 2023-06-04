// variables
let line = document.querySelector('#quoted');
 let author = document.querySelector('#auth');

 let changer = document.querySelector('#butt');

 

const quoteArray = [
        {
            quote: "'It is never too late to be what you might have been.'",
            person: "George Eliot"
        },{
            quote: "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' ",
            person: "Ralph Waldo Emerson"
        },{
            quote: "'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.'",
            person: "Voltaire"
        },{
            quote: "'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.'",
            person: "Stephen King"
        },{
            quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
            person: "Toni Morrison"
        },{
            quote: "'You cannot find peace by avoiding life'",
            person: "Virginia Woolf"
        },{
            quote: "'The greatest glory in living lies not in never falling, but in rising every time we fall.'",
            person: "Nelson Mandela"
        },{
            quote: "'The future belongs to those who believe in the beauty of their dreams.'",
            person: "Eleanor Roosevelt"
        },{
            quote: "'Spread love everywhere you go. Let no one ever come to you without leaving happier.'",
            person: "Mother Teresa"
        },{
            quote: "'You will face many defeats in life, but never let yourself be defeated.'",
            person: "Maya Angelou"
        },{
            quote: "'Life is really simple, but we insist on making it complicated.'",
            person: "Confucius"
        },{
            quote: "'Love the life you live. Live the life you love.'",
            person: "Bob Marley"
        } ];

   

     function generator(){
        let random  = Math.floor(Math.random() * quoteArray.length);
        line.textContent = quoteArray[random].quote; 
        author.textContent = quoteArray[random].person; 
     }
     let savedQuote = document.querySelector(".saved_quotes");
     let savedAuthor = document.querySelector(".saved_authors");

     let lastPart = document.querySelector(".another");
     let mainContainer = document.querySelector(".container");

     function saveIt(){
            if(savedQuote.textContent === "Nothing Saved!"){
                savedQuote.textContent = "";
            }
        lastPart.setAttribute("id", "open");
        mainContainer.setAttribute("id", "newContainer");
        document.querySelector(".lower_part").style.marginRight = "20px";
        savedQuote.innerHTML += 
        `<li>
               " ${line.textContent} "         
        </li> \n` ;
     }
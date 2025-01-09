const QUOTE = document.querySelector(".QUOTE")
const TEXTBOX = document.querySelector(".QUOTEBOX")
const SUBMIT = document.querySelector(".SUBMITBTN")

const RANDOMBTN = document.querySelector(".RANDOMBTN")
const SEEALLBTN = document.querySelector(".SEEALLBTN")

const ALLQUOTES = document.querySelector(".ALLQUOTES")
const CLOSEBTN = document.querySelector(".CLOSEBTN")


const Quotes = [
       "The best way to predict the future is to invent it. -- Alan Kay",
  "Life is what happens when you’re busy making other plans. -- John Lennon",
  "Do what you can, with what you have, where you are. -- Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. -- Albert Schweitzer",
  "It does not matter how slowly you go as long as you do not stop. -- Confucius",
  "In the middle of every difficulty lies opportunity. -- Albert Einstein",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. -- Zig Ziglar",
  "The only way to do great work is to love what you do. -- Steve Jobs",
  "Believe you can and youre halfway there. -- Theodore Roosevelt",
  "Your time is limited, so dont waste it living someone elses life. -- Steve Jobs",
  "Happiness is not something ready-made. It comes from your own actions. -- Dalai Lama",
  "The purpose of our lives is to be happy. -- Dalai Lama",
  "Be the change that you wish to see in the world. -- Mahatma Gandhi",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -- Nelson Mandela",
  "If life were predictable it would cease to be life, and be without flavor. -- Eleanor Roosevelt",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. -- Ralph Waldo Emerson",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn. -- Benjamin Franklin",
  "It is during our darkest moments that we must focus to see the light. -- Aristotle",
  "Whoever is happy will make others happy too. -- Anne Frank",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. -- Mother Teresa",
  "Always remember that you are absolutely unique. Just like everyone else. -- Margaret Mead",
  "The future belongs to those who believe in the beauty of their dreams. -- Eleanor Roosevelt",
  "You will face many defeats in life, but never let yourself be defeated. -- Maya Angelou",
  "The greatest gift of life is friendship, and I have received it. -- Hubert H. Humphrey",
  "In the end, its not the years in your life that count. Its the life in your years. -- Abraham Lincoln",
  "Never let the fear of striking out keep you from playing the game. -- Babe Ruth",
  "Dont judge each day by the harvest you reap but by the seeds that you plant. -- Robert Louis Stevenson",
  "The only limit to our realization of tomorrow will be our doubts of today. -- Franklin D. Roosevelt",
  "Its not whether you get knocked down, its whether you get up. -- Vince Lombardi",
  "Everything youve ever wanted is on the other side of fear. -- George Addair",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate. -- Ralph Waldo Emerson",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. -- Ralph Waldo Emerson",
  "You miss 100% of the shots you dont take. -- Wayne Gretzky",
  "Dream big and dare to fail. -- Norman Vaughan",
  "I am not a product of my circumstances. I am a product of my decisions. -- Stephen Covey",
  "It does not matter how slowly you go as long as you do not stop. -- Confucius",
  "Strive not to be a success, but rather to be of value. -- Albert Einstein",
  "I attribute my success to this: I never gave or took any excuse. -- Florence Nightingale",
  "You cant use up creativity. The more you use, the more you have. -- Maya Angelou",
  "I would rather die of passion than of boredom. -- Vincent van Gogh",
  "Build your own dreams, or someone else will hire you to build theirs. -- Farrah Gray",
  "The question isnt who is going to let me; its who is going to stop me. -- Ayn Rand",
  "The only way to achieve the impossible is to believe it is possible. -- Charles Kingsleigh",
  "The harder you work for something, the greater youll feel when you achieve it. -- Unknown",
  "Do what you feel in your heart to be right – for youll be criticized anyway. -- Eleanor Roosevelt",
  "Success is walking from failure to failure with no loss of enthusiasm. -- Winston Churchill",
  "Hardships often prepare ordinary people for an extraordinary destiny. -- C.S. Lewis",
  "Go confidently in the direction of your dreams. Live the life you have imagined. -- Henry David Thoreau"
];



function randomizeQuote() {
  let randomQuote = Math.floor(Math.random() * Quotes.length)
  
  QUOTE.innerText = Quotes[randomQuote]
}


RANDOMBTN.addEventListener("click", randomizeQuote)

SUBMIT.addEventListener("click", function() {
  
    let Input = TEXTBOX.value

    if (Input!= "" && Input.length > 5) {

        Quotes.push(Input)
        QUOTE.innerText = Input

    }else if (Input != "" && Input.length <= 5) {
        alert("!ENTER A LONGER QUOTE!")
    }else {
          alert("!ENTER A QUOTE!")
    }

})

SEEALLBTN.addEventListener("click", function() {

        ALLQUOTES.style.display = "block"

        for (let i=0; i< Quotes.length; i++) {

          let NEWQUOTE = document.createElement("li")

          NEWQUOTE.classList.add("AQUOTE")
          NEWQUOTE.innerText = Quotes[i]

          ALLQUOTES.appendChild(NEWQUOTE)
        }
})

CLOSEBTN.addEventListener("click", function() {
   
        ALLQUOTES.style.display = "none"
        ALLQUOTES.innerHTML = '<button class="CLOSEBTN"><b>X</b></button>'
    
})


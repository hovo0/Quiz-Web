let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const question = document.getElementById("question")
const choices = document.getElementsByClassName("choice-text")
const BackgroundAudio = document.getElementById("myAudio");

BackgroundAudio.onended = function() {
    return window.location.assign("/end.html");
};

document.onclick = function() {

    BackgroundAudio.play();
}
let questions = [{
        question: "If someone asked to see your ID, what might you show them?",
        choice1: "Your tongue",
        choice2: "Your teeth",
        choice3: "Your passport",
        choice4: "The door",
        answer: 3
    },
    {
        question: "A magnet would most likely attract which of the folowing?",
        choice1: "Metal",
        choice2: "Plastic",
        choice3: "Wood",
        choice4: "Man",
        answer: 1
    },
    {
        question: "What can chameleons change? ",
        choice1: "Hairstyle",
        choice2: "Color",
        choice3: "Political party",
        choice4: "Underwear",
        answer: 2
    },
    {
        question: "What year was JavaScript launched?",
        choice1: "1990",
        choice2: "1995",
        choice3: "2000",
        choice4: "1989",
        answer: 2
    },
    {
        question: "How many seconds are in a minute?  ",
        choice1: "1",
        choice2: "30",
        choice3: "60",
        choice4: "300",
        answer: 3
    },
    {
        question: "What city contains the Eiffel Tower?",
        choice1: "Paris",
        choice2: "Yerevan",
        choice3: "New York",
        choice4: "Tokyo",
        answer: 1
    },
    {
        question: "Which sport is also known as football?",
        choice1: "Soccer",
        choice2: "Basketball",
        choice3: "Baseball",
        choice4: "Cricket",
        answer: 1
    }, {
        question: "Which of the following is not a type of pasta?",
        choice1: "Spaghetti",
        choice2: "Ziti",
        choice3: "Fettuccine",
        choice4: "Escargot",
        answer: 4
    }, {
        question: "What product does Tesla produce?",
        choice1: "Ice Cream",
        choice2: "Hair brushes",
        choice3: "TV",
        choice4: "Electric cars",
        answer: 4
    }, {
        question: "Which animal is not a primate?",
        choice1: "Gorilla",
        choice2: "Dolphin",
        choice3: "Chimpanzee",
        choice4: "Orangutan",
        answer: 2
    }, {
        question: "What American holiday falls on July 4?",
        choice1: "Thanksgiving Day",
        choice2: "Christmas Day",
        choice3: "Independence Day",
        choice4: "New Year's Day",
        answer: 3
    }, {
        question: "Which candy bar shares its name with a galaxy?",
        choice1: "Snickers",
        choice2: "Milky Way",
        choice3: "3 Musketeers",
        choice4: "Almond Joy",
        answer: 2
    }, {
        question: "What is the capital of England?",
        choice1: "London",
        choice2: "Rome",
        choice3: "Moscow",
        choice4: "Rio",
        answer: 1
    }, {
        question: "Which video game system does Sony produce?",
        choice1: "Game Boy",
        choice2: "Xbox",
        choice3: "Atari",
        choice4: "PlayStation",
        answer: 4
    }, {
        question: "What are the names of the Super Mario Bros.?",
        choice1: "Tim and Eric",
        choice2: "Batman and Robin",
        choice3: "Sonic and Tails",
        choice4: "Mario and Luigi",
        answer: 4
    }, {
        question: "Which princess lost a glass slipper?",
        choice1: "Snow White",
        choice2: "Mulan",
        choice3: "Cinderella",
        choice4: "Belle",
        answer: 3
    }, {
        question: "Which American car company makes the Mustang, the F-150 and Escape?",
        choice1: "Ford",
        choice2: "Toyota",
        choice3: "Nissan",
        choice4: "BMW",
        answer: 1
    }, {
        question: "Which car company makes the G63, the E63 and GLE63?",
        choice1: "Mercedes-AMG",
        choice2: "Lexus",
        choice3: "Lada",
        choice4: "Mazda",
        answer: 1
    }, {
        question: "How many days are in a leap year?",
        choice1: "28",
        choice2: "44",
        choice3: "350",
        choice4: "366",
        answer: 4
    }, {
        question: "Which website is the most popular search engine?",
        choice1: "Google",
        choice2: "Bing",
        choice3: "Yandex",
        choice4: "Myspace",
        answer: 1
    }, {
        question: "Who is the current British monarch?",
        choice1: "King Philippe",
        choice2: "King George",
        choice3: "Queen Victoria",
        choice4: "Queen Elizabeth II",
        answer: 4
    }, {
        question: "What is the first letter of the Greek alphabet?",
        choice1: "Y",
        choice2: "Alpha",
        choice3: "EY",
        choice4: "Omega",
        answer: 2
    }, {
        question: "What is the largest external organ on the human body?",
        choice1: "Ears",
        choice2: "Nose",
        choice3: "Skin",
        choice4: "Eyes",
        answer: 3
    }, {
        question: "What is the largest country in the world?",
        choice1: "Russia",
        choice2: "China",
        choice3: "USA",
        choice4: "Monaco",
        answer: 1
    }, {
        question: "Which of the following is the correct formula of the Pythagorean Theorem?",
        choice1: "y=mx+b",
        choice2: "S=4πr²",
        choice3: "A= πr²",
        choice4: "a²+b²=c²",
        answer: 4
    }, {
        question: "A caffè macchiato has ________ origins.",
        choice1: "Italian",
        choice2: "American",
        choice3: "Spanish",
        choice4: "French",
        answer: 1
    }, {
        question: "<The Scream> is a famous painting that was created by...?",
        choice1: "Claude Monet",
        choice2: "Edvard Munch",
        choice3: "Henri Matisse",
        choice4: "Pablo Picasso",
        answer: 2
    }, {
        question: "Which of these countries were NOT part of the Axis Powers during World War II?",
        choice1: "Japan",
        choice2: "Italy",
        choice3: "Germany",
        choice4: "China",
        answer: 4
    }, {
        question: "How long did the Hundred Years' War last?",
        choice1: "101 years",
        choice2: "116 years",
        choice3: "99 years",
        choice4: "100 years",
        answer: 2
    }, {
        question: "What is the capital of South Dakota?",
        choice1: "Fande",
        choice2: "Pierre",
        choice3: "Columbia",
        choice4: "Bismark",
        answer: 2
    }, {
        question: "Who was the 15th president of the United States?",
        choice1: "Franklin Pierce",
        choice2: "Zachary Taylor",
        choice3: "James K. Polk",
        choice4: "James Buchanan",
        answer: 4
    }, {
        question: "Which of these is NOT one of the seven wonders of the 'Ancient World?'",
        choice1: "Lighthouse of Alexandria",
        choice2: "Temple of Artemis at Ephesus",
        choice3: "Colossus of Rhodes",
        choice4: "Capuchin Monastery Catacombs",
        answer: 4
    }, {
        question: "Which of these is NOT a fruit?",
        choice1: "Apple",
        choice2: "Rutabaga",
        choice3: "Banana",
        choice4: "Peppers",
        answer: 2
    }, {
        question: "Which of these was Walt Disney's first movie?",
        choice1: "Snow White and the Seven Dwarfs",
        choice2: "Fantasia",
        choice3: "Dumbo",
        choice4: "Pinocchio",
        answer: 1
    }, {
        question: "What is the largest internal organ in the human body?",
        choice1: "Brain",
        choice2: "Eyes",
        choice3: "Liver",
        choice4: "Spleen",
        answer: 3
    }, {
        question: "Agent 007, featured in many movies dating back to 1962, is known as _______ Bond?",
        choice1: "John",
        choice2: "James",
        choice3: "Elizer",
        choice4: "Ben",
        answer: 2
    }, {
        question: "What plant is traditionally the primary ingredient in wine?",
        choice1: "Plum",
        choice2: "Grape",
        choice3: "Peach",
        choice4: "Avocado",
        answer: 2
    }, {
        question: "Who was the original 'King' of rock n' roll?",
        choice1: "Michael Jackson",
        choice2: "Elvis Presley",
        choice3: "Mick Jagger",
        choice4: "Steven Tyler",
        answer: 2
    }, {
        question: "In the Harry Potter series, Harry must battle which evil wizard?",
        choice1: "Grindelwald",
        choice2: "Sirius Black",
        choice3: "Voldemort",
        choice4: "Dumbledore",
        answer: 3
    }, {
        question: "What animal feeds almost exclusively on bamboo?",
        choice1: "Orangutans",
        choice2: "Kangaroos",
        choice3: "Koalas",
        choice4: "Pandas",
        answer: 4
    }, {
        question: "Where is Mount Kilimanjaro?",
        choice1: "Russia",
        choice2: "Argentina",
        choice3: "Japan",
        choice4: "Tanzania",
        answer: 4
    }, {
        question: "What is the Taj Mahal?",
        choice1: "A mausoleum.",
        choice2: "A large business center.",
        choice3: "A monument to learning.",
        choice4: "A royal palace.",
        answer: 1
    }, {
        question: "Where do penguins live?",
        choice1: "Nova Scotia",
        choice2: "Greenland",
        choice3: "Various locales in the Southern Hemisphere",
        choice4: "Antarctica only",
        answer: 3
    }, {
        question: "Which language is spoken by the most people on the continent of Africa?",
        choice1: "Arabic",
        choice2: "English",
        choice3: "French",
        choice4: "Spanish",
        answer: 2
    }, {
        question: "Which of these colors isn't in the rainbow?",
        choice1: "Red",
        choice2: "Yellow",
        choice3: "White",
        choice4: "Yellow",
        answer: 3
    }, {
        question: "Which of these is not like the others?",
        choice1: "Cherry",
        choice2: "Plum",
        choice3: "Peach",
        choice4: "Watermelon",
        answer: 4
    }, {
        question: "What is the head of an orchestra called?",
        choice1: "Composer",
        choice2: "Conductor",
        choice3: "Director",
        choice4: "Leader",
        answer: 2
    }, {
        question: "Which major world religion holds the cow as sacred?",
        choice1: "Hinduism",
        choice2: "Islam",
        choice3: "Judaism",
        choice4: "Christianity",
        answer: 1
    }, {
        question: "Who is commonly credited with inventing the light bulb?",
        choice1: "Nikola Tesla",
        choice2: "Thomas Edison",
        choice3: "Benjamin Franklin",
        choice4: "Alexander Bell",
        answer: 2
    }, {
        question: "Who is famous for saying, 'Veni, Vidi, Vici'?",
        choice1: "Pope Gregory the Great",
        choice2: "Julius Caesar",
        choice3: "Cicero",
        choice4: "Octavian",
        answer: 2
    }, {
        question: "Can you name the two numbers are used in binary code?",
        choice1: "0 & 1",
        choice2: "6 & 7",
        choice3: "2 & 4",
        choice4: "1 & 2",
        answer: 1
    }, {
        question: "What was the last letter added to the English alphabet?",
        choice1: "X",
        choice2: "J",
        choice3: "A",
        choice4: "Z",
        answer: 2
    }, {
        question: "Can you name the national animal of Scotland?",
        choice1: "Rabbit",
        choice2: "Unicorn",
        choice3: "Sheep",
        choice4: "Salmon",
        answer: 2
    }, {
        question: "What is missing from Leonardo da Vinci’s Mona Lisa?",
        choice1: "Eyelashes & eyebrows",
        choice2: "An ear",
        choice3: "Pinky finger",
        choice4: "None of the above",
        answer: 1
    }, {
        question: "Pteronophobia is the fear of which of these below?",
        choice1: "Enclosed places",
        choice2: "Feathers",
        choice3: "Spiders",
        choice4: "Heights",
        answer: 2
    }, {
        question: "Can you name the first author to make the Forbes billionaires list?",
        choice1: "Stephen King",
        choice2: "J.K. Rowling",
        choice3: "Leon Uris",
        choice4: "John Grisham",
        answer: 2
    }, {
        question: "Which soda is the oldest?",
        choice1: "Dr. Pepper",
        choice2: "Pepsi",
        choice3: "Coca-Cola",
        choice4: "Diet Coke",
        answer: 1
    }, {
        question: "What is the capital of Afghanistan?",
        choice1: "Kandahar",
        choice2: "Herat",
        choice3: "Kabul",
        choice4: "Islamabad",
        answer: 3
    }, {
        question: "What sports car company has a car model named the Testarossa?",
        choice1: "Ferrari",
        choice2: "Lamborghini",
        choice3: "Jaguar",
        choice4: "Audi",
        answer: 1
    }, {
        question: "What year did World War I begin?",
        choice1: "1914",
        choice2: "1911",
        choice3: "1918",
        choice4: "1921",
        answer: 1
    }, {
        question: "What country would you find the Leaning Tower of Pisa?",
        choice1: "Spain",
        choice2: "Italy",
        choice3: "France",
        choice4: "England",
        answer: 2
    }, {
        question: "What major urban area has the largest population in the world?",
        choice1: "Delhi",
        choice2: "Mexico City",
        choice3: "Shanghai",
        choice4: "Tokyo",
        answer: 4
    }, {
        question: "When did the Cold War end?",
        choice1: "1789",
        choice2: "1958",
        choice3: "1989",
        choice4: "1598",
        answer: 3
    }, {
        question: "Who was the first American to go into space?",
        choice1: "Alan Shephard",
        choice2: "Neil Armstrong",
        choice3: "Chuck Yeager",
        choice4: "Buzz Aldrin",
        answer: 1
    }, {
        question: "What is the fastest flying bird in the world?",
        choice1: "Sparrow",
        choice2: "Hummingbird",
        choice3: "Eagle",
        choice4: "Peregrine Falcon",
        answer: 4
    }, {
        question: "Of these cities, which is the capital of Germany?",
        choice1: "Bonn",
        choice2: "Frankfurt",
        choice3: "Berlin",
        choice4: "Hamburg",
        answer: 3
    },
    {
        question: "Of these cities, which is the capital of Armenia?",
        choice1: "Gyumri",
        choice2: "Vanadzor",
        choice3: "Dilijan",
        choice4: "Yerevan",
        answer: 4
    },
]


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 15;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("/end.html");
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    Array.from(choices).forEach(choice => {

        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];

    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
Array.from(choices).forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers)
            return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];


        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            /*if (selectedChoice === 'incorrect') {
                return window.location.assign("/end.html");
            }*/
            getNewQuestion();
        }, 1000);

    });
});

startGame();
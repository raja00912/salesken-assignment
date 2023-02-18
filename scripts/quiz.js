
function getQestion() {
    console.log("yes");
    let page = JSON.parse(localStorage.getItem("currentPage")) || 1;
    console.log(page)
}

function getPage() {
    let page = JSON.parse(localStorage.getItem("currentPage")) || 1;
    page++;
    localStorage.setItem("currentPage", JSON.stringify(page))
    getQestion()
}

function checkans() {

}

window.onload = function () {
    getQestion();
}

var quizes = [
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What geometric shape is generally used for stop signs?",
        "correct_answer": "Octagon",
        "answers": [
            "Hexagon",
            "Octagon",
            "Circle",
            "Triangle"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?",
        "correct_answer": "Gorilla",
        "answers": [
            "Tiger",
            "Panda",
            "Crocodile",
            "Gorilla",
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is on display in the Madame Tussaud&#039;s museum in London?",
        "correct_answer": "Wax sculptures",
        "answers": [
            "Wax sculptures",
            "Designer clothing",
            "Unreleased film reels",
            "Vintage cars"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;",
        "correct_answer": "Truth",
        "answers": [
            "Truth",
            "Answer",
            "Cause",
            "Source"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is Tasmania?",
        "correct_answer": "An Australian State",
        "answers": [
            "A flavor of Ben and Jerry&#039;s ice-cream",
            "A Psychological Disorder",
            "An Australian State",
            "The Name of a Warner Brothers Cartoon Character"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What company developed the vocaloid Hatsune Miku?",
        "correct_answer": "Crypton Future Media",
        "answers": [
            "Sega",
            "Crypton Future Media",
            "Sony",
            "Yamaha Corporation"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "When someone is inexperienced they are said to be what color?",
        "correct_answer": "Green",
        "answers": [
            "Red",
            "Blue",
            "Yellow",
            "Green"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The Flag of the European Union has how many stars on it?",
        "correct_answer": "12",
        "answers": [
            "10",
            "14",
            "16",
            "12"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The Canadian $1 coin is colloquially known as a what?",
        "correct_answer": "Loonie",
        "answers": [
            "Loonie",
            "Boolie",
            "Foolie",
            "Moodie"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Waluigi&#039;s first appearance was in what game?",
        "correct_answer": "Mario Tennis 64 (N64)",
        "answers": [
            "Wario Land: Super Mario Land 3",
            "Mario Party (N64)",
            "Mario Tennis 64 (N64)",
            "Super Smash Bros. Ultimate"
        ]
    }
]
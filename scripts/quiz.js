
function getQestion() {
    console.log("yes");
    let page = JSON.parse(localStorage.getItem("currentPage")) || 0;
    if (page == 10) {
        location.href = "report.html"
    }
    else {
        document.getElementById("question").innerText = (page + 1) + ". " + quizes[page].question
        document.getElementById("firstOp").innerText = quizes[page].answers[0];
        document.getElementById("secondOp").innerText = quizes[page].answers[1];
        document.getElementById("thirdOp").innerText = quizes[page].answers[2];
        document.getElementById("fourthOp").innerText = quizes[page].answers[3];
        if (page == 9) {
            document.getElementById("submitbtn").innerText = "Submit"
            document.getElementById("skipbtn").innerText = "Skip & Submit"
        }
    }

}

function getPage() {
    let page = JSON.parse(localStorage.getItem("currentPage")) || 0;
    page++;
    localStorage.setItem("currentPage", JSON.stringify(page))
    let cureentId = localStorage.getItem("currentId")
    document.getElementById(cureentId).classList.remove("selectedAns")
    localStorage.removeItem("currentAns")
    getQestion()
}

function checkans() {
    let page = JSON.parse(localStorage.getItem("currentPage")) || 0;
    let ans = JSON.parse(localStorage.getItem("currentAns")) || alert("Select an option")
    if (ans) {
        let correctAns = JSON.parse(localStorage.getItem("correct_ans")) || 0;
        let cureentId = localStorage.getItem("currentId")
        if (quizes[page].correct_answer == ans) {
            correctAns++;
            console.log("true")
            localStorage.setItem("correct_ans", correctAns);
        }
        page++;
        localStorage.setItem("currentPage", JSON.stringify(page))
        localStorage.removeItem("currentAns")
        document.getElementById(cureentId).classList.remove("selectedAns")
        getQestion()
    }
}

function saveAns(value) {
    localStorage.setItem("currentAns", JSON.stringify(value.text));
    if (value.id == "firstOp") {
        document.getElementById("firstOp").classList.add("selectedAns")
        localStorage.setItem("currentId", value.id)
    }
    else {
        document.getElementById("firstOp").classList.remove("selectedAns")
    }
    if (value.id == "secondOp") {
        document.getElementById("secondOp").classList.add("selectedAns")
        localStorage.setItem("currentId", value.id)
    }
    else {
        document.getElementById("secondOp").classList.remove("selectedAns")
    }
    if (value.id == "thirdOp") {
        document.getElementById("thirdOp").classList.add("selectedAns")
        localStorage.setItem("currentId", value.id)
    }
    else {
        document.getElementById("thirdOp").classList.remove("selectedAns")
    }
    if (value.id == "fourthOp") {
        document.getElementById("fourthOp").classList.add("selectedAns")
        localStorage.setItem("currentId", value.id)
    }
    else {
        document.getElementById("fourthOp").classList.remove("selectedAns")
    }
}

window.onload = function () {
    localStorage.removeItem("currentAns")
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
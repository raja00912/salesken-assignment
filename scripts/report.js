const printResult = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentuser")) || false;
    let correct_ans = localStorage.getItem("correct_ans") || 0;
    if (currentUser) {
        document.getElementById("name").innerText = "Username - " + currentUser.username
        document.getElementById("email").innerText = "Email - " + currentUser.email
        document.getElementById("correctAns").innerText = "Correct Ans - " + correct_ans
        document.getElementById("incorrectAns").innerText = "Incorrect Ans - " + (10 - correct_ans)
    }
    else {
        location.href = "index.html"
    }
}

window.onload = function () {
    printResult();
}
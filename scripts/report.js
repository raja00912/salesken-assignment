const printResult = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentuser")) || false;
    let correct_ans = localStorage.getItem("correct_ans") || 0;
    if (currentUser) {
        document.getElementById("name").innerText = currentUser.username
        document.getElementById("email").innerText = currentUser.email
        document.getElementById("correctAns").innerText = correct_ans
        document.getElementById("incorrectAns").innerText = 10 - correct_ans
    }
}

window.onload = function () {
    printResult();
}
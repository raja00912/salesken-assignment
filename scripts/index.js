document.getElementById("loginBtn").addEventListener("click", () => {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("userdata")) || []
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let emailcheck = false;
    let passcheck = false;
    let username = "";

    users.forEach((elem) => {
        if (elem.email == email) {
            username = elem.name
            emailcheck = true;
        }
        if (elem.password == password) {
            passcheck = true;
        }
    })

    if (emailcheck) {
        if (passcheck) {
            localStorage.setItem("currentuser", username)
            localStorage.removeItem("currentAns")
            localStorage.removeItem("currentPage")
            localStorage.removeItem("correct_ans")
            location.href = "quiz.html"
        }
        else {
            alert("Incorrect password");
        }
    }
    else {
        alert("Incorrect email");
    }

})
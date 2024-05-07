if (localStorage.userName) {
    $("#userName").text("Welcome back, " + localStorage.userName + ".");
} else {
    localStorage.userName = prompt("What is your name?")
    $("#userName").text("Welcome back, " + localStorage.userName + ".");
}
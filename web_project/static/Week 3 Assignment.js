function statementExamples() {
    let name = prompt("Please input your first name:");
    let name_lower = name.toLowerCase(); //stores the user's name in lowercase for comparison purposes

    /* An IF statement
    Purpose: To tell the user how awesome they are based on their name.
    Output: If the user is a Dylan or an Auslander, the program sends an alert to inform the user that they are awesome with one of two possible messages.
    Otherwise, the program sends an alert to inform the user that they are not awesome.
    */
    if (name_lower == "dylan") {
        alert("you're awesome");
    }
    else if (name_lower == "auslander") {
        alert("that is a last name but you're awesome anyway");
    }
    else {
        alert("you're NOT awesome");
    }

    /* A FOR loop statement
    Purpose: To tell the user the spelling of their name (in order).
    Output: Sends out an alert containing each letter of the user's name (in order) with a new line separating each one.
    */
    let spelledOut = "";
    for (let i = 0; i < name.length; i++) {
        spelledOut += name[i] + "\n";
    }
    alert("Here is your name spelled out letter by letter:\n" + spelledOut);

    /* A SWITCH case statement
    Purpose: To give the user a reminder of whether or not they are awesome based on their name.
    Output: In the case that the user is a Dylan or an Auslander, the program sends out an alert that informs the user that they are awesome. 
    In any other case, the program sends out an alert to inform the user that they are awful.
    */
    switch (name_lower) {
        case "dylan":
        case "auslander":
            alert("Just reminding you that you're awesome.");
            break;
        default:
            alert("Just reminding you that you're awful.");
    }

    /* A PASS statement
    Purpose: To allow for work in progress code to exist without causing an error by leaving the inside of the braces blank.
    Output: N/A
    */
    for (var i = 0; i < 5; i++) {

    }

    /* A MATCH statement
    Purpose: To give the user a number guessing game to play.
    Output: Inputting 4 will send an alert that informs the user that they guessed wrong but are close to the right answer.
    Note: A similar message does not appear for 6 because it isn't within the given range.
    Inputting 5 will send an alert that informs the user that they guessed correctly.
    Any other case sends an alert that informs the user that they guessed completely wrong.
    */
    let gameNum = prompt("I am thinking of a number between 1 and 5. Guess what it is.");
    switch (gameNum) {
        case "4":
            alert("no, but you're awfully close!");
            break;
        case "5":
            alert("That's it! Good job :)");
            break;
        default:
            alert("NO I WOULD NEVER THINK OF THAT!");
    }

    alert("Please enter 2 numbers to be compared");
    let num1 = prompt("Please input the first number:");
    let num2 = prompt("Please input the second number:");
    alert(higherNum(parseInt(num1), parseInt(num2)) + " is the higher number.");
}

/* A custom function that compares two numbers and returns the higher one
Purpose: To compare 2 numbers (passed as parameters n1 and n2) to see which is greater.
Output: Returns the greater number.
*/
function higherNum(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    else {
        return n2;
    }
}

/* A function that, when a button is clicked, displays JavaScript Best Practices (from W3Schools) on the screen inside a div
Purpose: To display JavaScript Best Practices (from W3Schools) inside the bp_div.
Output: Makes bp_div include HTML for a hyperlink that leads to W3Schools' JavaScript Best Practices.
*/
function displayBestPractices() {
    document.getElementById("bp_div").innerHTML = "<a href='https://www.w3schools.com/js/js_best_practices.asp'>Load JS Best Practices</a>";
}
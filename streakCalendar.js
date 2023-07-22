var date = new Date();
let day = date.getDay().toString();

// Used local storage because there's no server/database to host our data
var streakLog = Array(7).fill(0);

letworkedOutToday = false;


function logged() {
    workedOutToday = true;
    console.log(streakLog);
    streakLog[day]=1;
    console.log(streakLog);

    localStorage.setItem("streakLog", JSON.stringify(streakLog));

    document.getElementById(day).src = "streakDone.png";
}

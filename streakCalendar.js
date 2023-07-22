var date = new Date();
let day = date.getDay().toString();

// Used local storage because there's no server/database to host our data
var streakLog = Array(7).fill(0);
localStorage.setItem("streakLog", JSON.stringify(streakLog));

let workedOutToday = false;

let sum = 0;
window.onload=load()


function logged() {
    localStorage.setItem("workedOutToday", "true");
    streakLog[day]=1;

    localStorage.setItem("streakLog", JSON.stringify(streakLog));

    sum = 0
    streakLog.forEach( num => {
        sum += num;
    })
    localStorage.setItem("sum", sum.toString())

    console.log(sum)

    localStorage.setItem("streaktotal", sum);
    document.getElementById("dayCounter").innerHTML = "You've worked out for " + sum + " of 7 days this week!";
    document.getElementById(day).src = "Images/streakDone.png";
}

function load(){
    if(localStorage.getItem("workedOutToday")=="true"){
        document.getElementById("dayCounter").innerHTML = "You've worked out for " + localStorage.getItem("sum") + " of 7 days this week!";
        document.getElementById(day).src = "Images/streakDone.png";

    }
    console.log("run")
}

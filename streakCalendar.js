var date = new Date();
let day = date.getDay().toString();

// Used local storage because there's no server/database to host our data
var streakLog = Array(7).fill(0);
localStorage.setItem("streakLog", JSON.stringify(streakLog));

letworkedOutToday = false;

let sum = 0;



function logged() {
    workedOutToday = true;
    streakLog[day]=1;

    localStorage.setItem("streakLog", JSON.stringify(streakLog));

    sum = 0
    streakLog.forEach( num => {
        sum += num;
    })

    console.log(sum)

    localStorage.setItem("streaktotal", sum);

    document.getElementById(day).src = "streakDone.png";
}

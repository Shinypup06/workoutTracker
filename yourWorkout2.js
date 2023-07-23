var workout1;
if (localStorage.getItem("workout1") == null) {
    console.log("workout1 not found in local storage, making new");
    workout1 = new Array(13);
} else {
    workout1 = JSON.parse(localStorage.getItem("workout1"));
}

function saveData(){
    var workout = workout1; // workout we are currently working on lol

    workout1[0] = document.getElementById("areaID").value;

    workout1[1] = document.getElementById("ex1").value;
    workout1[2] = document.getElementById("reps1").value;
    workout1[3] = document.getElementById("w1").value;
    workout1[4] = document.getElementById("set1").value;

    workout1[5] = document.getElementById("ex2").value;
    workout1[6] = document.getElementById("reps2").value;
    workout1[7] = document.getElementById("w2").value;
    workout1[8] = document.getElementById("set2").value;

    workout1[9] = document.getElementById("ex3").value;
    workout1[10] = document.getElementById("reps3").value;
    workout1[11] = document.getElementById("w3").value;
    workout1[12] = document.getElementById("set3").value;
    
    console.log(workout1);
    localStorage.setItem("workout1", JSON.stringify(workout1));
    getSlot();
}

function getSlot(){
    const w1 = JSON.parse(localStorage.getItem("workout1"));

    document.getElementById("wg1").innerHTML = "Focus: " + w1[0];
    document.getElementById("wg1e1").innerHTML = w1[1];
    document.getElementById("wg1r1").innerHTML = w1[2];
    document.getElementById("wg1w1").innerHTML = w1[3];
    document.getElementById("wg1s1").innerHTML = w1[4];
    document.getElementById("wg1e2").innerHTML = w1[5];
    document.getElementById("wg1r2").innerHTML = w1[6];
    document.getElementById("wg1w2").innerHTML = w1[7];
    document.getElementById("wg1s2").innerHTML = w1[8];
    document.getElementById("wg1e3").innerHTML = w1[9];
    document.getElementById("wg1r3").innerHTML = w1[10];
    document.getElementById("wg1w3").innerHTML = w1[11];
    document.getElementById("wg1s3").innerHTML = w1[12];
}
window.onload = function(){console.log(localStorage.getItem("workout"));}
window.onload = getSlot();
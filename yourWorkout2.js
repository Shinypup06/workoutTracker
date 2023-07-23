var totalWorkout = [];

function saveData(){
    totalWorkout.push(document.getElementById("areaID").value);

    totalWorkout.push(document.getElementById("ex1").value);
    totalWorkout.push(document.getElementById("reps1").value);
    totalWorkout.push(document.getElementById("w1").value);
    totalWorkout.push(document.getElementById("set1").value);

    totalWorkout.push(document.getElementById("ex2").value);
    totalWorkout.push(document.getElementById("reps2").value);
    totalWorkout.push(document.getElementById("w2").value);
    totalWorkout.push(document.getElementById("set2").value);

    totalWorkout.push(document.getElementById("ex3").value);
    totalWorkout.push(document.getElementById("reps3").value);
    totalWorkout.push(document.getElementById("w3").value);
    totalWorkout.push(document.getElementById("set3").value);
    
    console.log(totalWorkout);
    localStorage.setItem("workout1", JSON.stringify(totalWorkout));
}
function getSlot(){
    const storedData = JSON.parse(localStorage.getItem("workout1"));

    document.getElementById("wg1").innerHTML = "Focus: " + storedData[0];
    document.getElementById("wg1e1").innerHTML = storedData[1];
    document.getElementById("wg1r1").innerHTML = storedData[2];
    document.getElementById("wg1w1").innerHTML = storedData[3];
    document.getElementById("wg1s1").innerHTML = storedData[4];
    document.getElementById("wg1e2").innerHTML = storedData[5];
    document.getElementById("wg1r2").innerHTML = storedData[6];
    document.getElementById("wg1w2").innerHTML = storedData[7];
    document.getElementById("wg1s2").innerHTML = storedData[8];
    document.getElementById("wg1e3").innerHTML = storedData[9];
    document.getElementById("wg1r3").innerHTML = storedData[10];
    document.getElementById("wg1w3").innerHTML = storedData[11];
    document.getElementById("wg1s3").innerHTML = storedData[12];
}
window.onload = function(){console.log(localStorage.getItem("workout"));}
window.onload = getSlot();
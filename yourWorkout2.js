let totalWorkout = [];

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
    localStorage.setItem("workout", JSON.stringify(totalWorkout));
}
function getSlot(){
    const storedData = JSON.parse(localStorage.getItem("workout"));

    document.getElementById("slot0").innerHTML = "Focus: " + storedData[0];
    document.getElementById("slot1").innerHTML = storedData[1];
    document.getElementById("slot2").innerHTML = storedData[2];
    document.getElementById("slot3").innerHTML = storedData[3];
    document.getElementById("slot4").innerHTML = storedData[4];
}
window.onload = function(){console.log(localStorage.getItem("workout"));}
window.onload = getSlot();
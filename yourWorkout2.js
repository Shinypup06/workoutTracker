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
    localStorage.setItem("workout", totalWorkout);
}
function getSlot(){
document.getElementById("slot0").innerHTML = "Focus: " + localStorage.getItem("workout")[0];
}
window.onload = function(){console.log(localStorage.getItem("workout"));}
window.onload = getSlot();
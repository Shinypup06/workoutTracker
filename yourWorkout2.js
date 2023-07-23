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
    document.getElementById("slot5").innerHTML = storedData[5];
    document.getElementById("slot6").innerHTML = storedData[6];
    document.getElementById("slot7").innerHTML = storedData[7];
    document.getElementById("slot8").innerHTML = storedData[8];
    document.getElementById("slot9").innerHTML = storedData[9];
    document.getElementById("slot10").innerHTML = storedData[10];
    document.getElementById("slot11").innerHTML = storedData[11];
    document.getElementById("slot12").innerHTML = storedData[12];
}
window.onload = function(){console.log(localStorage.getItem("workout"));}
window.onload = getSlot();
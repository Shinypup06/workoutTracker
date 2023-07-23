var workout;

function addNewExercise() {
    var html = `
    <ul class="shoulderPress">
        <li><input type="text" class="names" id="name"></li>
        <li><input type="text" class="rep" id="reps"></li>
        <li><input type="text" class="lbs" id="weight"></li>
        <li><input type="text" class="set" id="sets"></li>
    </ul>
        <button type = button class = butt onClick = "saveData()">save</button>    
    `;
    document.getElementById("wk").innerHTML += html;
}
//<input type="button" class = "butt" onClick = "saveData()"> instead of button
function saveData() {
    var exercise = [];
    exercise.push(document.getElementById("name").value);
    exercise.push(document.getElementById("reps").value);
    exercise.push(document.getElementById("weight").value);
    exercise.push(document.getElementById("sets").value);

    workout.push(exercise);
    localStorage.setItem("workout1", JSON.stringify(workout));

    location.reload();
}

function generateExercises() {

    for(var i = 0; i < workout.length; i++) {
        var exercise = workout[i];
        console.log(JSON.stringify(exercise));
        var html = `
        <ul class="shoulderPress">
            <li class="exercise">${exercise[0]}</li>
            <li><class="entered">${exercise[1]}</li>
            <li><class="entered">${exercise[2]}</li>
            <li><class="emtered">${exercise[3]}</li>
        </ul>
        `;
        document.getElementById("wk").innerHTML += html;
    }
}

function starting() {
    if (localStorage.getItem("workout1") == null) {
        console.log("workout1 not found in local storage, making new");
        workout = [];
    } else {
        console.log("existing workout1 found, displaying data");
        workout = JSON.parse(localStorage.getItem("workout1"));
    }
}

window.onload = starting();
window.onload = generateExercises();
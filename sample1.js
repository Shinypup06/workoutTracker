var workout;

function addNewExercise() {
    var html = `
    <ul class="shoulderPress">
        <li><input type="text" id="name"></li>
        <li><input type="text" class="num" id="reps"></li>
        <li><input type="text" class="num" id="weight"></li>
        <li><input type="text" class="num" id="sets"></li>
        <li><input type="button" class = "num" onClick = "saveData()"></li>
    </ul>
    `;
    document.getElementById("wk").innerHTML += html;
}

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
            <li><class="num">${exercise[1]}</li>
            <li><class="num">${exercise[2]}</li>
            <li><class="num">${exercise[3]}</li>
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
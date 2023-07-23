// switches storage to jsons lol
// var workoutGroups = [
//     {
//         workoutGroupName: "Group 1",
//         workoutGroupType: "Legs",
//         exercises: [
//             {
//                 exerciseName: "Leg Press",
//                 exerciseGroup: "Legs",
//                 exerciseReps: 12,
//                 exerciseWeight: 120,
//                 exerciseSets: 5
//             },
//             {
//                 exerciseName: "Leg Curl",
//                 exerciseGroup: "Legs",
//                 exerciseReps: 12,
//                 exerciseWeight: 70,
//                 exerciseSets: 5
//             }
//         ]
//     }
// ]


var workoutGroups;

// if (localStorage.getItem("workoutGroups") == null) {
//     workoutGroups = [];
//     console.log("localStorage found no workoutGroups existing, created new");
// } else {
//     workoutGroups = localStorage.getItem("workoutGroups");
//     console.log("localStorage found existing workoutGroups");
//     console.log(JSON.stringify(workoutGroups));
// }

function saveData() {
    if (localStorage.getItem("workoutGroups") == null) {
        workoutGroups = [];
        console.log("localStorage found no workoutGroups existing, created new");
    } else {
        workoutGroups = JSON.parse(localStorage.getItem("workoutGroups"));
        console.log("localStorage found existing workoutGroups");
        console.log(JSON.stringify(workoutGroups));
    }

    workoutGroups.push(
        {
            workoutGroupType: document.getElementById("areaID").value,
            exercises: [
                {
                    exerciseName: document.getElementById("ex1").value,
                    exerciseReps: document.getElementById("reps1").value,
                    exerciseWeight: document.getElementById("w1").value,
                    exerciseSets: document.getElementById("set1").value
                },
                {
                    exerciseName: document.getElementById("ex2").value,
                    exerciseReps: document.getElementById("reps2").value,
                    exerciseWeight: document.getElementById("w2").value,
                    exerciseSets: document.getElementById("set2").value
                },
                {
                    exerciseName: document.getElementById("ex3").value,
                    exerciseReps: document.getElementById("reps3").value,
                    exerciseWeight: document.getElementById("w3").value,
                    exerciseSets: document.getElementById("set3").value
                }
            ]
        }
    )

    localStorage.setItem("workoutGroups", JSON.stringify(workoutGroups));
    console.log("Data saved.");
    console.log(JSON.stringify(workoutGroups));
}

function printWorkouts() {
    
}

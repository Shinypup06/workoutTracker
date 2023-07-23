        
        var totalWorkout = [];

        function saveData(){
        var savedWorkoutType = document.getElementById("dataID").value;
        localStorage.setItem("workout", savedWorkoutType);
        console.log(localStorage.getItem("workout"));
    }
        window.onload = function(){
            var savedData = localStorage.getItem("workout");
            if(savedData){
                document.getElementById("savedData").textContent = savedData;
                
            }
            totalWorkout.push(savedData);
            console.log(totalWorkout);
        };
        

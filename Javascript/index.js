// creating array with JSON
let array = `
[{
    "taskname": "Shopping",
    "image": "Pictures/shopping.jpg",
    "description": "Shop for weekly groceries at Billa and Hofer.",
    "deadline": "12.02.2023",
    "importance": "0"
}, {
    "taskname": "Vacuuming",
    "image": "Pictures/Vacuum-Cleaner.jpg",
    "description": "Vacuuming every floor in my apartment",
    "deadline": "12.02.2023",
    "importance": "0"
}, {
    "taskname": "Working out",
    "image": "Pictures/Workout.jpg",
    "description": "Going to the gym at least 2 times a week.",
    "deadline": "12.02.2023",
    "importance": "0"
}, {
    "taskname": "Cleaning the windows",
    "image": "Pictures/Window.jpg",
    "description": "Cleaning every window in my apartment.",
    "deadline": "12.02.2023",
    "importance": "0"
}, {
    "taskname": "Preparing my Meals",
    "image": "Pictures/Meal.jpg",
    "description": "Prepare a good meal 2x a day.",
    "deadline": "12.02.2023",
    "importance": "0"
}, {
    "taskname": "Making the laundry",
    "image": "Pictures/Laundry.jpg",
    "description": "Making the laundry 2x a week.",
    "deadline": "12.02.2023",
    "importance": "0"
}, {
    "taskname": "Taking out the trash",
    "image": "Pictures/Trash.jpg",
    "description": "Taking out the trash when its full.",
    "deadline": "12.02.2023",
    "importance": "0"
}, {
    "taskname": "Washing the dishes",
    "image": "Pictures/Dishes.jpg",
    "description": "Washing the dishes at least once per Day.",
    "deadline": "12.02.2023",
    "importance": "0"
}, {
    "taskname": "Watching a film",
    "image": "Pictures/Television.jpg",
    "description": "Watching a film at least once to have some fun.",
    "deadline": "12.02.2023",
    "importance": "0"
}]`

// Transforming JSON to array of Objekts
let final_array = JSON.parse(array);


// Printing the different Tasks in the HTML
for (let count of final_array) {
    document.getElementById("result").innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 cardcont" id="hello">
    <div class="card  mb-2" style="width: 24rem;" id=""card>
    <button type="button" class="btn btn-info btn-sm" style="width: 6vh; margin: 1vh; color: white;">Task</button>
    <img class="cardimage" src="${count.image}" class="card-img-top" alt="${count.taskname}">
    <div class="card-body">
     <h5 class="card-title text-center">${count.taskname}</h5>
     <p class="text-center">${count.description}</p>
     <hr>
     &#9888;Priority Level:
     <p class="btn btn-success increase">${count.importance}</p>
     <p> Deadline: ${ count.deadline}</p>
     <hr>
     <p class="btn btn-danger float-end ms-2 delete">Delete</p>
     <p class="btn btn-success float-end done">Done</p>
    </div>
    </div>
    </div>`;
}

// Creating the function to add importance and change the colors
let buttons = document.getElementsByClassName("increase");


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (final_array[i].importance != 5) {
            final_array[i].importance++;
        }
        document.getElementsByClassName("increase")[i].innerHTML = final_array[i].importance;
        // Styling the different Button Colors
        if (final_array[i].importance <= 1) {
            document.getElementsByClassName("increase")[i].classList.remove("btn-warning");
            document.getElementsByClassName("increase")[i].classList.remove("btn-danger");
            document.getElementsByClassName("increase")[i].classList.add("btn-success");
        } else if (final_array[i].importance <= 3) {
            document.getElementsByClassName("increase")[i].classList.remove("btn-success");
            document.getElementsByClassName("increase")[i].classList.remove("btn-danger");
            document.getElementsByClassName("increase")[i].classList.add("btn-warning");
        } else if (final_array[i].importance <= 5) {
            document.getElementsByClassName("increase")[i].classList.remove("btn-success");
            document.getElementsByClassName("increase")[i].classList.remove("btn-warning");
            document.getElementsByClassName("increase")[i].classList.add("btn-danger");
        }
    })
}

// Creating a function to delete elements
let remove = document.getElementsByClassName("delete");

for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", function() {
        document.getElementsByClassName("cardcont")[i].style.display = "none";
    })
}

// Creating a function to style Elements which are done
let finish = document.getElementsByClassName("done");

for (let i = 0; i < finish.length; i++) {
    finish[i].addEventListener("click", function() {
        document.getElementsByClassName("card")[i].style.backgroundColor = "lightgreen";
    })
}

// Adding the onclick sorter to Sort Items
let sorter = document.getElementById("sort")

sorter.addEventListener("click", sorter2)

// Defining the function to sort the items
function sorter2() {
    final_array.sort((a, b) => b.importance - a.importance);
    console.log(final_array)
        // Deleting the old content
    document.getElementById("result").innerHTML = "";
    // Printing the new sorted Array again
    for (let count of final_array) {
        document.getElementById("result").innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 cardcont" id="hello">
        <div class="card  mb-2" style="width: 24rem;" id=""card>
        <button type="button" class="btn btn-info btn-sm" style="width: 6vh; margin: 1vh; color: white;">Task</button>
        <img class="cardimage" src="${count.image}" class="card-img-top" alt="${count.taskname}">
        <div class="card-body">
         <h5 class="card-title text-center">${count.taskname}</h5>
         <p class="text-center">${count.description}</p>
         <hr>
         &#9888;Priority Level:
         <p class="btn btn-success increase">${count.importance}</p>
         <p> Deadline: ${ count.deadline}</p>
         <hr>
         <p class="btn btn-danger float-end ms-2 delete">Delete</p>
         <p class="btn btn-success float-end done">Done</p>
        </div>
        </div>
        </div>`;
    }

    // Reasigning the function for the increase of the importance
    let buttons = document.getElementsByClassName("increase");

    for (let i = 0; i < buttons.length; i++) {
        if (final_array[i].importance <= 1) {
            document.getElementsByClassName("increase")[i].classList.remove("btn-warning");
            document.getElementsByClassName("increase")[i].classList.remove("btn-danger");
            document.getElementsByClassName("increase")[i].classList.add("btn-success");
        } else if (final_array[i].importance <= 3) {
            document.getElementsByClassName("increase")[i].classList.remove("btn-success");
            document.getElementsByClassName("increase")[i].classList.remove("btn-danger");
            document.getElementsByClassName("increase")[i].classList.add("btn-warning");
        } else if (final_array[i].importance <= 5) {
            document.getElementsByClassName("increase")[i].classList.remove("btn-success");
            document.getElementsByClassName("increase")[i].classList.remove("btn-warning");
            document.getElementsByClassName("increase")[i].classList.add("btn-danger");
        }
        buttons[i].addEventListener("click", function() {
            if (final_array[i].importance != 5) {
                final_array[i].importance++;
            }
            document.getElementsByClassName("increase")[i].innerHTML = final_array[i].importance;
            // Styling the different Button Colors
            if (final_array[i].importance <= 1) {
                document.getElementsByClassName("increase")[i].classList.remove("btn-warning");
                document.getElementsByClassName("increase")[i].classList.remove("btn-danger");
                document.getElementsByClassName("increase")[i].classList.add("btn-success");
            } else if (final_array[i].importance <= 3) {
                document.getElementsByClassName("increase")[i].classList.remove("btn-success");
                document.getElementsByClassName("increase")[i].classList.remove("btn-danger");
                document.getElementsByClassName("increase")[i].classList.add("btn-warning");
            } else if (final_array[i].importance <= 5) {
                document.getElementsByClassName("increase")[i].classList.remove("btn-success");
                document.getElementsByClassName("increase")[i].classList.remove("btn-warning");
                document.getElementsByClassName("increase")[i].classList.add("btn-danger");
            } else if (final_array[i].importance > 5) {
                document.getElementsByClassName("increase")[i].disabled = true;
            }
        })
    }

    // Reasigning the function for the Removal of an exercise
    let remove = document.getElementsByClassName("delete");

    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", function() {
            document.getElementsByClassName("cardcont")[i].style.display = "none";
        })
    }

    // Reasigning the function for the finishing of an exercise
    let finish = document.getElementsByClassName("done");

    for (let i = 0; i < finish.length; i++) {
        finish[i].addEventListener("click", function() {
            document.getElementsByClassName("card")[i].style.backgroundColor = "lightgreen";
        })
    }
}
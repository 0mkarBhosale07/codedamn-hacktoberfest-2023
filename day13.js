function addTask() {
	let taskText = document.getElementById("taskInput").value;
	if (taskText === "") return;

	let li = document.createElement("li");
	li.textContent = taskText;
	li.addEventListener("click", markCompleted);

	document.getElementById("taskList").appendChild(li);
	document.getElementById("taskInput").value = "";
}

function markCompleted(event) {
	event.target.classList.toggle("completed");
}

function filterTasks(filter) {
	let tasks = document.getElementById("taskList").children;
	for (let i = 0; i < tasks.length; i++) {
		switch (filter) {
			case "all":
				tasks[i].style.display = ""; // Show all tasks
				break;
			case "completed":
				if (tasks[i].classList.contains("completed")) {
					tasks[i].style.display = ""; // Show completed tasks
				} else {
					tasks[i].style.display = "none"; // Hide incomplete tasks
				}
				break;
			case "incomplete":
				if (!tasks[i].classList.contains("completed")) {
					tasks[i].style.display = ""; // Show incomplete tasks
				} else {
					tasks[i].style.display = "none"; // Hide completed tasks
				}
				break;
		}
	}
}


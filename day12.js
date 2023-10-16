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
	event.target.classList.toggle("completed"); //Changed Here
}

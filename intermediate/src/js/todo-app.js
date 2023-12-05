import { refs } from "./refs";
import { addExistingTasks } from "./helpers";

let taskCount = JSON.parse(localStorage.getItem("taskCount"))
	? JSON.parse(localStorage.getItem("taskCount"))
	: 0;

let storedTaskes = JSON.parse(localStorage.getItem("tasks"));
console.log(storedTaskes);
if (storedTaskes === null) {
	storedTaskes = {
		new: [],
		inProgress: [],
		completed: [],
	};
}
addExistingTasks(refs.newTasksLsit, storedTaskes.new);
addExistingTasks(refs.tasksInProgress, storedTaskes.inProgress);
addExistingTasks(refs.completedTasks, storedTaskes.completed);

refs.form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
	e.preventDefault();
	const name = e.target.elements.name;
	const descr = e.target.elements.descr;
	let date = new Date().toString().slice(0, 24);
	let taskId = Math.floor(Math.random() * 100000);
	const markup = `<li class="task-list-item">
    <span class="task-count">Task ${(taskCount += 1)}</span>
    <p class="task-list-item-title">${name.value}</p>
    <p class="task-description">
        ${descr.value}
    </p>
    <div class="task-info">
        <span class="date">${date}</span>
        <span class="task-id">New</span>
    </div>
</li>`;

	refs.newTasksLsit.insertAdjacentHTML("beforeend", markup);
	storedTaskes.new.push({
		name: name.value,
		taskCount: taskCount,
		descr: descr.value,
		date: date,
		id: taskId,
		default: "New",
	});

	localStorage.setItem("tasks", JSON.stringify(storedTaskes));
	localStorage.setItem("taskCount", JSON.stringify(taskCount));

	refs.modal.classList.add("is-hidden");
	refs.form.reset();
}

refs.textarea.addEventListener(
	"keyup",
	(e) => (refs.currnet.innerHTML = e.target.value.length)
);

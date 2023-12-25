import { refs } from "./refs"; //page elements
import { createCardMarkUp } from "./markups";
import { renderCardListItems } from "./helpers";

let tasks = JSON.parse(localStorage.getItem("tasks"));
if (!tasks) {
	tasks = { new: [], inprogress: [], completed: [] };
}

renderCardListItems(refs.newCardsList, tasks.new);

let taskCount = JSON.parse(localStorage.getItem("taskCount"));
if (!taskCount) {
	localStorage.setItem("taskCount", 0);
}
refs.addTaskForm.addEventListener("submit", submitFormHandler);
refs.textarea.addEventListener("input", textareaChangeHandler);

function submitFormHandler(e) {
	let taskDescr = e.target.elements.descr.value;
	let cardDate = new Date().toString().slice(0, 21);
	let cardId = Math.floor(Math.random() * 100000);
	taskCount += 1;
	const markup = createCardMarkUp(taskCount, taskDescr, cardDate, cardId);
	let newTask = {
		taskCount: taskCount,
		taskDescr: taskDescr,
		date: cardDate,
		id: cardId,
		subtitle: "New",
	};
	tasks.new.push(newTask);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	localStorage.setItem("taskCount", taskCount);
	refs.addTaskForm.reset();
	refs.current.innerHTML = 0;
	refs.modal.classList.add("is-hidden");
	document.querySelector(".no-task-message")
		? (refs.newCardsList.innerHTML = markup)
		: refs.newCardsList.insertAdjacentHTML("beforeend", markup);
}

function textareaChangeHandler(e) {
	refs.current.innerHTML = e.target.value.length;
}

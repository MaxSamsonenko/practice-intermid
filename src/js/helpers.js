import { createCardMarkUp } from "./markups";

export function renderCardListItems(targetList, itemsList) {
	if (itemsList === null || itemsList.length === 0) {
		return (targetList.innerHTML = `<p class="no-task-message">There are no tasks yet</p>`);
	}
	return document.querySelector(".no-task-message")
		? (targetList.innerHTML = createListMarkup(itemsList))
		: targetList.insertAdjacentHTML("beforeend", createListMarkup(itemsList));
}

function createListMarkup(itemsList) {
	let markup = itemsList
		.map(({ taskCount, taskDescr, date, id, subtitle = "New" }) => {
			return createCardMarkUp(
				taskCount,
				taskDescr,
				date,
				id,
				(subtitle = "New")
			);
		})
		.join("");
	return markup;
}

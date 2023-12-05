export function addExistingTasks(column, tasks) {
	const markup =
		tasks.length === 0
			? `<p class='no-tasks'>There are no tasks yet</p>`
			: tasks
					.map(
						(task) => `<li class="task-list-item" id="${task.id}">
                            <p class="task-list-item-title">${task.name}</p>
                            <p class="task-description">
                                ${task.descr}
                            </p>
                            <div class="task-info">
                                <span class="date">${task.date}</span>
                                <span class="task-id">${task.default}</span>
                            </div>
                        </li>`
					)
					.join("");
	column.innerHTML = markup;
}

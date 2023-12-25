export function createCardMarkUp(
	taskCount,
	taskDescr,
	date,
	id,
	subtitle = "New"
) {
	return `<li class="task-card" id="${id}">
                <div class="task-card-btns-container">
                    <p class="task-card-count">Task ${taskCount}</p>
                    ${renderCardButtons(subtitle)}
                </div>
                <p class="task-card-descr">${taskDescr}</p>
                <div class="task-card-date-container">
                    <span class="task-card-date">${date}</span>
                    <span class="task-card-subtitle">${subtitle}</span>
                </div>
            </li>`;
}

const path = "../icons/symbol-defs.svg";

function renderCardButtons(subtitle) {
	let icon = "icon-circle-right";
	if (subtitle === "In Progress") {
		icon = "icon-undo2";
	}
	return `<ul class="card-btns">
                <li class="card-btns-item">
                    <button type="button" id="btn-delete" class="card-btn">
                        <svg width="15" height="15" class="card-btn-icon">
                            <use href="${path}#icon-cancel-circle"></use>
                        </svg>
                    </button>
                </li>
                <li class="card-btns-item">
                    <button type="button" id="btn-edit" class="card-btn">
                        <svg width="15" height="15" class="card-btn-icon">
                            <use href="${path}#icon-pencil"></use>
                        </svg>
                    </button>
                </li>
                <li class="card-btns-item">
                    <button type="button" id="btn-start" class="card-btn">
                        <svg width="15" height="15" class="card-btn-icon">
                            <use href="${path}#${icon}"></use>
                        </svg>
                    </button>
                </li>
            </ul>`;
}

function buildToDo(task) {
  const li = document.createElement("li");
  const taskText = typeof task === "object" && task !== null
    ? (task.description || task["new-task-description"] || task.text || task.value)
    : task;
  li.textContent = taskText;

  const taskList = document.querySelector("#tasks") || document.querySelector("#task");
  if (taskList) {
    taskList.appendChild(li);
  }
  return li;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const taskInput = event.target["new-task-description"] || document.querySelector("#new-task-description");
      const task = taskInput ? taskInput.value : "";
      buildToDo(task);
      form.reset();
    });
  }
});

function addTask() {
  // 1. Отримати значення з поля вводу
  const taskInput = document.getElementById("taskInput");
  const originalTaskText = taskInput.value.trim();
  const lowerCaseTaskText = originalTaskText.toLowerCase();

  // 2. Перевірити, чи поле не порожнє
  if (originalTaskText === "") {
    alert("Please enter a task!");
    return;
  }
  const taskList = document.getElementById("taskList");

  // 3. ПЕРЕВІРКА НА ДУБЛІКАТИ
  const existingTaskSpans = taskList.querySelectorAll(".task-text");
  const isDuplicate = Array.from(existingTaskSpans).some(
    (span) => span.textContent.trim().toLowerCase() === lowerCaseTaskText
  );

  if (isDuplicate) {
    alert("This task is already in the list!");
    return;
  }

  // 4. Створити новий елемент списку (li)
  const listItem = document.createElement("li");

  // 5. Створити кнопки і текст

  // Кнопка "Завершити" (Галочка)
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");

  // Спан (контейнер) для тексту
  const textSpan = document.createElement("span");
  textSpan.classList.add("task-text");
  textSpan.textContent = originalTaskText; // Використовуємо оригінальний текст

  // Функція для кнопки "Завершити"
  completeBtn.onclick = function () {
    textSpan.classList.toggle("completed");
  };

  // Кнопка "Видалити"
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.onclick = function () {
    taskList.removeChild(listItem);
  };

  // 6. Зібрати li: додати кнопки і текст в елемент <li>
  listItem.appendChild(completeBtn);
  listItem.appendChild(textSpan);
  listItem.appendChild(removeBtn);

  // 7. Додати новий елемент <li> до списку <ul>
  taskList.appendChild(listItem);

  // 8. Очистити поле вводу
  taskInput.value = "";
}

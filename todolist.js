// variabel untuk menampung task
let task = [];

// menyeleksi elemen html
const btn = document.querySelector(".add");
const input = document.querySelector(".input");
const tasks = document.querySelector(".tasks");

btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please fill the coloumn");
  } else {
    task.push(input.value);
    input.value = "";
    showTasks();
  }
});

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    if (input.value == "") {
      alert("Please fill the coloumn");
    } else {
      task.push(input.value);
      input.value = "";
      showTasks();
    }
  }
});

function showTasks() {
  tasks.innerHTML = `<h3>Your tasks : ${task.length}</h3>`;
  task.forEach((t, i) => {
    tasks.innerHTML += `
    <li class="task">
        <p>${t}</p>
        <div class="icon">
          <i class="fa-solid fa-trash" onclick='deleteTask(${i})'></i>
          <i class="fa-solid fa-pen-to-square" onclick="editItem(${i})"></i>
        </div>
      </li>
    `;
  });
}

function deleteTask(i) {
  task.splice(i, 1);
  showTasks();
}

function editItem(e) {
  let newItem = prompt("Edit task", task[e]);
  task[e] = newItem;
  showTasks();
}

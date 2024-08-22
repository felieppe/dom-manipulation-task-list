let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  const taskElement = document.createElement('li')
  taskElement.id = task.id; 
  taskElement.className = "task";
  taskElement.setAttribute("onclick", "deleteTaskHandler(event);")

  taskElement.innerHTML = `
    <img src="${task.imgUrl}" />
    <div class="task-information">
      <h3>Task Owner</h3>
      <p>${task.owner}</p>

      <h3>Task Name</h3>
      <p>${task.name}</p>

      <h3>Task Description</h3>
      <p>${task.description}</p>
    </div>
  `
  return taskElement;
}

function loadTasks() {
  tasks.forEach((task) => {
    document.querySelector(".main-section__taskboard").appendChild(createTaskComponent(task))
  })
}

function clearFormInputs(event) {
  for (let x = 0; x < event.target.length; x++) {
    if (event.target[x].tagName.toLowerCase() === "input") {
      event.target[x].value = ""
    }
  }
}

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addTaskAlert(newTask) {
  return alert(`Task Name: ${newTask.name}\nTask Owner: ${newTask.owner}\nTask Description: ${newTask.description}\nTask Image URL: ${newTask.imgUrl}`)
}

// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario

function addTaskHandler(event) {
  event.preventDefault();
  
  const newTask = {
    id: tasks.length,
    owner: event.target[0].value,
    name: event.target[1].value,
    description: event.target[2].value,
    imgUrl: event.target[3].value
  }

  document.querySelector(".main-section__taskboard").appendChild(createTaskComponent(newTask))

  clearFormInputs(event)
  tasks.push(newTask)
}

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function deleteTaskHandler(taskElement) {
  let task = taskElement.target

  console.log("Removing task ID: " + task.id)

  tasks = tasks.filter(t => t.id !== parseInt(task.id))
  document.querySelector(".main-section__taskboard").removeChild(task)

  redirectWhenNoTask()
}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {
  let taskboard = document.querySelector(".main-section__taskboard")

  if (!taskboard.innerHTML === "") {
    taskboard.innerHTML = ''
    alert("¡Se han eliminado todas las tareas!")
  } else { alert("No hay tareas para eliminar")}

  redirectWhenNoTask()
}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {
  console.log("RedirectWhenNoTask: " + tasks.length, tasks)
  if (tasks.length === 0) { 
    alert("No quedan tareas, redirigiendo a Youtube...");
    window.location.href = "https://www.youtube.com/";
  }
}

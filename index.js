function createToDoListApp() {
    const tasks = [];
    const categories = [];
  
    function Task(id, title, category, completed = false) {
      return {
        id,
        title,
        category,
        completed
      };
    }
  
    function Category(id, name) {
      return {
        id,
        name
      };
    }
  
    function addTask(title, categoryId) {
      const category = findCategoryById(categoryId);
      if (!category) {
        console.error(`Category with ID ${categoryId} not found.`);
        return;
      }
      const taskId = tasks.length;
      const task = Task(taskId, title, category);
      tasks.push(task);
    }
  
    function addCategory(name) {
      const categoryId = categories.length;
      const category = Category(categoryId, name);
      categories.push(category);
    }
  
    function findTaskById(taskId) {
      return tasks.find(task => task.id === taskId);
    }
  
    function findCategoryById(categoryId) {
      return categories.find(category => category.id === categoryId);
    }
  
    function completeTask(taskId) {
      const task = findTaskById(taskId);
      if (task) {
        task.completed = true;
      } else {
        console.error(`Task with ID ${taskId} not found.`);
      }
    }
  
    function getTasks() {
      return tasks;
    }
  
    function getCategories() {
      return categories;
    }
  
    return {
      addTask,
      addCategory,
      completeTask,
      getTasks,
      getCategories
    };
  }
  
  
  const toDoListApp = createToDoListApp();
  
  
  toDoListApp.addCategory('Work');
  toDoListApp.addCategory('Home');
  
  
  toDoListApp.addTask('Complete project', 1);
  toDoListApp.addTask('Buy groceries', 2); 
  
  console.log(toDoListApp.getTasks());

  //a function to display tasks grouped by their categories
  
  function displayTasksByCategory(tasks) {
    const tasksByCategory = {};
    tasks.forEach(task => {
        const category = task.category;
        if (category in tasksByCategory) {
            tasksByCategory[category].push(task);
        } else {
            tasksByCategory[category] = [task];
        }
    });

    for (const category in tasksByCategory) {
        console.log(`${category}:`);
        tasksByCategory[category].forEach(task => {
            console.log(`\t- ${task.name}`);
        });
    }
}


const tasks = [
    { name: "Task 1", category: "Work" },
    { name: "Task 2", category: "Personal" },
    { name: "Task 3", category: "Work" },
    { name: "Task 4", category: "Study" },
    { name: "Task 5", category: "Personal" },
    { name: "Task 6", category: "Work" }
];


//function to mark as compmlete.

function markTaskAsCompleted(tasks, taskName) {
    const task = tasks.find(task => task.name === taskName);

    if (task) {
        task.completed = true;
        console.log(`Task "${taskName}" marked as completed.`);
    } else {
        console.log(`Task "${taskName}" not found.`);
    }
}


const tasks = [
    { name: "Task 1", category: "Work", completed: false },
    { name: "Task 2", category: "Personal", completed: false },
    { name: "Task 3", category: "Work", completed: false }
];

console.log("Before marking as completed:");
console.log(tasks);

markTaskAsCompleted(tasks, "Task 2");

console.log("After marking as completed:");
console.log(tasks);

// Tasks can be removed from the list

function markTaskAsCompleted(tasks, taskName) {
    const taskIndex = tasks.findIndex(task => task.name === taskName);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        console.log(`Task "${taskName}" marked as completed.`);
    } else {
        console.log(`Task "${taskName}" not found.`);
    }
}

function removeTask(tasks, taskName) {
    const taskIndex = tasks.findIndex(task => task.name === taskName);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        console.log(`Task "${taskName}" removed.`);
    } else {
        console.log(`Task "${taskName}" not found.`);
    }
}

const tasks = [
    { name: "Task 1", category: "Work", completed: false },
    { name: "Task 2", category: "Personal", completed: false },
    { name: "Task 3", category: "Work", completed: false }
];

console.log("Before marking as completed:");
console.log(tasks);

markTaskAsCompleted(tasks, "Task 2");

console.log("After marking as completed:");
console.log(tasks);

removeTask(tasks, "Task 1");

console.log("After removing task:");
console.log(tasks);




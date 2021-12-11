// Task List https://launchschool.com/exercises/ad7d2874

let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksCompleted = 0;

  while (todos.length > 0 && tasksCompleted < n) {
    let task = todos.shift();
    console.log(`\n${task} completed!`);
    tasksCompleted++;
  }

  if (todos.length === 0) {
    console.log('\nAll tasks complete!');
  } else {
    console.log(`\n${tasksCompleted} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`\nToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();
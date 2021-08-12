import { getId, formToObject } from './util';
import { getProject, addTask, removeTask } from './storage';

// Make functions with ability to create and delete todos in a projects

class Task {
  constructor(
    id,
    title = 'New Task',
    description = 'This is a new task',
    dueDate = 2,
    priority = 1,
    complete = false,
    notes = ''
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
    this.notes = notes;
  }
}

// const createTask = (form, myProjects) => {
//   // do stuff here
//   const id = getId(myProjects);
//   const formObject = formToObject(form);
//   const taskObject = new Task(
//     id,
//     formObject.title,
//     formObject.description,
//     formObject.dueDate
//   );
//   console.log(taskObject);
//   myProjects.push(taskObject);
//   //   updateLibrary(bookObject);
// };

const createTask = (projectId, task) => {
  // Create a project here, add to storage
  const project = getProject(projectId);
  console.log('PROJECT FOR THIS TASK', project);
  const id = getId(project.tasks);
  const taskObject = new Task(id, task.title, task.description, task.dueDate);
  console.log('Sending task to storage', taskObject);
  const newTaskList = addTask(projectId, taskObject);
  return newTaskList;
};

const deleteTask = (event) => {
  const { id: taskId } = event.target.parentElement;
  const { id: projectId } =
    event.target.parentElement.parentElement.parentElement;
  // const shouldDelete = window.confirm(
  //   'Are you sure you want to delete this project?'
  // );

  console.log('Delete task', taskId, 'from project:', projectId);

  const shouldDeleteTask = true;

  if (shouldDeleteTask) {
    // Go ahead and delete it
    const newTaskList = removeTask(projectId, taskId);
    return newTaskList;
  }
};

export { Task, createTask, deleteTask };

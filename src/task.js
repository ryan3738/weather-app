import { getId } from './util';
import {
  getProject,
  addTask,
  removeTask,
  getTasks,
  getTask,
  updateTask,
} from './storage';
// Make functions with ability to create and delete todos in a project

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
  const shouldDelete = window.confirm(
    'Are you sure you want to delete this project?'
  );
  let newTaskList = getTasks(projectId);

  if (shouldDelete) {
    // Go ahead and delete it
    newTaskList = removeTask(projectId, taskId);
    return newTaskList;
  }
  return newTaskList;
};

const toggleTaskComplete = (event) => {
  // Toggle task complete status
  const { id: taskId } = event.target.parentElement;
  const { id: projectId } =
    event.target.parentElement.parentElement.parentElement;
  const task = getTask(projectId, taskId);
  task.complete = !task.complete;
  const newTaskList = updateTask(projectId, task);

  return newTaskList;
};

export { Task, createTask, deleteTask, toggleTaskComplete };

import { Task } from './task';
import { getId, formToObject } from './util';

// Make functions with ability to create and delete project
const defaultProjects = [
  { id: 1, title: 'Default Project', tasks: [] },
  { id: 2, title: 'Default Project 3', tasks: [] },
];
const myProjects = defaultProjects;

// const newTask = new Task();
// console.log(newTask);

class Project {
  constructor(id, title = 'New Project', tasks = []) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
  }
}

function createProject(form) {
  // do stuff here
  const id = getId(myProjects);
  const formObject = formToObject(form);
  const projectObject = new Project(id, formObject.title);
  console.log(projectObject);
  myProjects.push(projectObject);
  //   updateLibrary(bookObject);
}

export { myProjects, createProject };

// Look for projects in local storage
// Create default project if none exist in local storage

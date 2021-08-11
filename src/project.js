import { Task } from './task';
import { getId, formToObject } from './util';
import * as storage from './storage';
import { render } from './renderPage';

// Make functions with ability to create and delete project
// const defaultProjects = [
//   { id: 1, title: 'Default Project', tasks: [] },
//   { id: 2, title: 'Default Project 3', tasks: [] },
// ];
// const myProjects = defaultProjects;

// const newTask = new Task();
// console.log(newTask);
class Project {
  constructor(id, title = 'New Project', tasks = []) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
  }
}

const getDefaultProject = () => {
  // Load default project for testing and new users
  console.log('Loading default project');
  const defaultProjectsList = [
    { id: 1, title: 'Default Project', tasks: [] },
    { id: 2, title: 'Default Project 3', tasks: [] },
  ];

  const defaultProjects = [];

  // Create function to populate default projects for testing & new users
  for (const project of defaultProjectsList) {
    const defaultProject = new Project(project.id, project.title);
    defaultProjects.push(defaultProject);
  }
  return defaultProjects;
};

const createProject = (form) => {
  // Create a project here, add to storage
  const newProjectsArray = storage.getProjects();
  // console.log('newProjectsArray', newProjectsArray);
  const id = getId(newProjectsArray);
  const formObject = formToObject(form);
  const projectObject = new Project(id, formObject.title);
  // console.log('projectObject', projectObject);
  storage.addProject(projectObject);
  // myProjects.push(projectObject);
  // console.log(myProjects);
  // render.updateProjectsList(storage.getProjects());
};

const deleteProject = (event) => {
  const { id } = event.target.parentElement;
  const shouldDelete = window.confirm(
    'Are you sure you want to delete this project?'
  );

  if (shouldDelete) {
    // Go ahead and delete it
    storage.deleteProject(id);
    render.updateProjectsList(storage.getProjects());
  }
};

export { createProject, deleteProject, Project, getDefaultProject };

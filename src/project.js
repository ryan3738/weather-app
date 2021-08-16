import { Task } from './task';
import { getId, formToObject } from './util';
import { addProject, getProjects, removeProject } from './storage';
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
    {
      id: 0,
      title: 'Default Project',
      tasks: [
        {
          id: 0,
          title: 'Task 1',
          description: 'This is the first task',
          dueDate: '2021-08-17',
          priority: 1,
          complete: false,
          notes: 'This is a note',
        },
        {
          id: 1,
          title: 'Task 2',
          description: 'This is the second task',
          dueDate: '2021-08-21',
          priority: 1,
          complete: false,
          notes: 'This is a note for task 2',
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'This is the third task',
          dueDate: '2021-08-26',
          priority: 1,
          complete: false,
          notes: 'This is a note for task 3',
        },
      ],
    },
    { id: 2, title: 'Default Project 3', tasks: [] },
  ];

  const defaultProjects = [];

  // Create function to populate default projects for testing & new users
  for (const project of defaultProjectsList) {
    const defaultProject = new Project(
      project.id,
      project.title,
      project.tasks
    );
    defaultProjects.push(defaultProject);
  }
  return defaultProjects;
};

const createProject = (project) => {
  // Create a project here, add to storage
  const newProjectsList = getProjects();
  const id = getId(newProjectsList);
  const projectObject = new Project(id, project.title);
  addProject(projectObject);
  return newProjectsList;
};

const deleteProject = (event) => {
  const { id } = event.target.parentElement;
  const shouldDelete = window.confirm(
    'Are you sure you want to delete this project?'
  );
  let newProjectsList = getProjects();

  if (shouldDelete) {
    // Go ahead and delete it
    newProjectsList = removeProject(id);
    return newProjectsList;
  }
  return newProjectsList;
};

export { createProject, deleteProject, Project, getDefaultProject };

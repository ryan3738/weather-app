import printMe from './print';
import './style.css';

function component() {
  const main = document.createElement('div');

  const btn = document.createElement('button');
  const projectsContainer = document.createElement('div');
  const project = document.createElement('div');
  const projectTitle = document.createElement('h3');

  const currentProject = document.createElement('div');
  const title = document.createElement('h1');
  const projectsTitle = document.createElement('h2');
  const task = document.createElement('div');
  const taskTitle = document.createElement('h2');

  // UI for users projects
  btn.innerHTML = 'Add Project +';
  btn.onclick = printMe;
  btn.classList.add('btn');

  projectsTitle.innerHTML = 'Projects';

  projectTitle.innerHTML = 'Default Project';
  project.appendChild(projectTitle);
  project.classList.add = 'project';

  projectsContainer.appendChild(projectsTitle);
  projectsContainer.appendChild(project);
  projectsContainer.appendChild(btn);
  projectsContainer.classList.add('projectsContainer');

  // UI for currently selected project with lists of todos
  title.innerHTML = 'Current Project';
  title.classList.add = 'title';
  currentProject.classList.add('currentProject');
  currentProject.appendChild(title);

  taskTitle.innerHTML = 'New Task';
  taskTitle.classList.add('taskTitle');
  task.appendChild(taskTitle);
  task.classList.add('task');
  currentProject.appendChild(task);

  // Main container elements
  main.classList.add('main');
  main.appendChild(projectsContainer);
  main.appendChild(currentProject);

  return main;
}

document.body.appendChild(component());

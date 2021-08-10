import { myProjects, createProject } from './project';
import createForms from './forms';
import printMe from './util';

//  Create button function with option for large and small buttons
// Create different ui function components

function createButton(text, size, type, onClick, id) {
  const btn = document.createElement('button');
  const buttonText = text || '';
  btn.innerHTML = buttonText;
  btn.onclick = onClick || printMe;
  btn.classList.add('btn');
  btn.setAttribute('title', buttonText);
  if (id) {
    btn.id = id;
  }
  if (type === 'submit') {
    btn.setAttribute('type', 'submit');
  }
  if (!type || type === 'button') {
    btn.setAttribute('type', 'button');
  }
  if (size === 'sm') {
    btn.classList.add('btn-sm');
  }
  return btn;
}

// submitNewBookButton.onclick = function (event) {
//   event.preventDefault();
//   const { form } = event.target;
//   addBookToLibrary(form);
//   randomizeForm();
// };

function toggleHidden(ids) {
  // if (ids.length < 1) {
  //   return;
  // }
  console.log('toggleHidden ids', ids);
  for (const id of ids) {
    console.log('id', id);
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  }
}

// * Render the projects and task components
const render = (() => {
  const projectsListContainer = document.createElement('div');
  const projectContainer = (project) => {
    const container = document.createElement('div');
    console.log(project);
    // const projectTitle = document.createElement('h3');
    container.classList.add('project');
    // projectTitle.innerHTML = title || 'New Project';
    // projectContainer.appendChild(projectTitle);
    container.id = project.id;
    container.appendChild(createButton(project.title));
    container.appendChild(createButton('X'));
    return container;
  };
  const projectsLayout = (parent) => {
    // Do some stuff
    const projectsContainer = document.createElement('div');
    const projectsTitle = document.createElement('h2');
    projectsContainer.classList.add('projectsContainer');
    projectsContainer.id = 'projectsContainer';
    projectsTitle.innerHTML = 'Projects';
    projectsContainer.appendChild(projectsTitle);
    projectsContainer.appendChild(projectsListContainer);

    // TODO Put in projects form
    projectsContainer.appendChild(
      createButton(
        'Add Project +',
        'lg',
        'button',
        () => {
          toggleHidden(['newProjectForm', 'addProjectButton']);
        },
        'addProjectButton'
      )
    );

    projectsContainer.appendChild(createForms().newProject());
    parent.appendChild(projectsContainer);
  };
  const projectsList = (projects) => {
    projects.forEach((project) => {
      console.log('project', project);
      projectsListContainer.appendChild(projectContainer(project));
    });
  };
  const taskContainer = (title) => {
    const task = document.createElement('div');
    const taskTitle = document.createElement('h2');

    taskTitle.innerHTML = title || 'New Task';
    taskTitle.classList.add('taskTitle');
    task.appendChild(taskTitle);
    task.classList.add('task');
    return task;
  };
  const tasksLayout = (parent) => {
    // Do some stuff
    const title = document.createElement('h1');
    const currentProject = document.createElement('div');
    title.innerHTML = 'Current Project';
    title.classList.add = 'title';
    currentProject.classList.add('currentProject');
    currentProject.appendChild(title);
    currentProject.appendChild(taskContainer('Task 2'));
    currentProject.appendChild(taskContainer('Task 3'));
    currentProject.appendChild(taskContainer());
    // currentProject.appendChild(
    //   createButton(
    //     'Add Task +',
    //     'lg',
    //     'button',
    //     () => {
    //       toggleHidden(['newTaskForm', 'addTaskButton']);
    //     },
    //     'addTaskButton'
    //   )
    // );

    // TODO Put in tasks form
    currentProject.appendChild(createForms().newTask());
    parent.appendChild(currentProject);
  };
  return { projectsLayout, tasksLayout, projectsList };
})();

// * Render the main page component
function renderPage() {
  const main = document.createElement('div');

  // Main container elements
  main.classList.add('main');
  render.projectsLayout(main);
  render.tasksLayout(main);
  render.projectsList(myProjects);

  return main;
}

export default renderPage;

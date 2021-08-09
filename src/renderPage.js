import printMe from './print';
import { myProjects, createProject } from './project';

// console.log(myProjects);

const displayProjects = (projects, container) => {
  console.log('DISPLAY PROJECTS', projects);
  for (const project of projects) {
    container.appendChild(renderProject(project));
  }
};

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

function createProjectFields() {
  const formFields = [];
  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('name', 'Title');
  title.setAttribute('placeholder', 'Project Name');
  title.setAttribute('required', true);
  formFields.push(title);

  return formFields;
}

function createTaskFields() {
  const fields = [];

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('title', 'Task Name');
  title.setAttribute('name', 'Title');
  title.setAttribute('placeholder', 'Task Name');
  title.setAttribute('required', true);
  fields.push(title);

  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.setAttribute('title', 'Task Description');
  description.setAttribute('name', 'Description');
  description.setAttribute('placeholder', 'Description');
  description.setAttribute('required', false);
  fields.push(description);

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.setAttribute('title', 'Due Date');
  dueDate.setAttribute('name', 'dueDate');
  // dueDate.setAttribute('placeholder', 'dueDate');
  dueDate.setAttribute('required', false);
  fields.push(dueDate);

  return fields;
}

function createFormContainer(fields, id, cancel, submit) {
  const formContainer = document.createElement('form');
  formContainer.classList.add('form');
  // formContainer.classList.add('hidden');

  if (id) {
    formContainer.id = id;
  }

  const buttonContainer = document.createElement('div');

  for (const field of fields) {
    formContainer.appendChild(field);
  }
  buttonContainer.appendChild(createButton('submit', 'sm', 'submit', submit));
  buttonContainer.appendChild(createButton('cancel', 'sm', 'button', cancel));

  formContainer.appendChild(buttonContainer);

  // console.log('this is this', this);
  return formContainer;
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
  console.log('ids', ids);
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

const renderProject = (project) => {
  const projectContainer = document.createElement('div');
  console.log(project);
  // const projectTitle = document.createElement('h3');
  projectContainer.classList.add('project');
  // projectTitle.innerHTML = title || 'New Project';
  // projectContainer.appendChild(projectTitle);
  projectContainer.id = project.id;
  projectContainer.appendChild(createButton(project.title));
  projectContainer.appendChild(createButton('X'));
  return projectContainer;
};

const renderProjectList = (projects) => {
  // const projectsContainer = document.querySelector('#projectsContainer');
  const projectsContainer = document.getElementById('projectsContainer');
  console.log('ProjectsContainer', projectsContainer);
  projects.forEach((project) => {
    console.log('project', project);
    // projectsContainer.appendChild(renderProject(project));
  });
};

function renderTask(title) {
  const task = document.createElement('div');
  const taskTitle = document.createElement('h2');

  taskTitle.innerHTML = title || 'New Task';
  taskTitle.classList.add('taskTitle');
  task.appendChild(taskTitle);
  task.classList.add('task');
  return task;
}

const renderProjectsLayout = () => {

  
};

function renderPage() {
  const main = document.createElement('div');
  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projectsContainer');
  projectsContainer.id = 'projectsContainer';
  const projectsTitle = document.createElement('h2');

  // UI for users projects

  projectsTitle.innerHTML = 'Projects';
  projectsContainer.appendChild(projectsTitle);
  // Placeholders
  displayProjects(myProjects, projectsContainer);

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
  projectsContainer.appendChild(
    createFormContainer(createProjectFields(), 'newProjectForm', () => {
      toggleHidden(['newProjectForm', 'addProjectButton']);
    })
  );

  // UI for currently selected project with lists of todos
  const title = document.createElement('h1');
  const currentProject = document.createElement('div');
  title.innerHTML = 'Current Project';
  title.classList.add = 'title';
  currentProject.classList.add('currentProject');
  currentProject.appendChild(title);

  currentProject.appendChild(renderTask('Task 2'));
  currentProject.appendChild(renderTask('Task 3'));
  currentProject.appendChild(renderTask());
  currentProject.appendChild(
    createButton(
      'Add Task +',
      'lg',
      'button',
      () => {
        toggleHidden(['newTaskForm', 'addTaskButton']);
      },
      'addTaskButton'
    )
  );
  // currentProject.appendChild(
  //   createFormContainer(
  //     createTaskFields(),
  //     'newTaskForm',
  //     'addTaskButton',
  //     () => {
  //       toggleHidden(['newTaskForm', 'addTaskButton']);
  //     }
  //   )
  // );

  currentProject.appendChild(
    createFormContainer(
      createTaskFields(),
      'newTaskForm',
      'addTaskButton',
      () => {
        toggleHidden(['newTaskForm', 'addTaskButton']);
      }
    )
  );

  // Main container elements
  main.classList.add('main');
  main.appendChild(projectsContainer);
  main.appendChild(currentProject);

  renderProjectList(myProjects);

  return main;
}

export default renderPage;

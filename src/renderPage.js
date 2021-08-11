import { getProjects } from './storage';
import createForms from './forms';
import { createButton } from './util';
import { deleteProject } from './project';

//  Create button function with option for large and small buttons
// Create different ui function components

// * Render the projects and task components
const render = (() => {
  const projectsListContainer = document.createElement('div');
  const tasksListContainer = document.createElement('div');
  const projectContainer = (project) => {
    const container = document.createElement('div');
    // const projectTitle = document.createElement('h3');
    container.classList.add('project');
    // projectTitle.innerHTML = title || 'New Project';
    // projectContainer.appendChild(projectTitle);
    container.id = project.id;
    const deleteButton = createButton('X', 'sm', 'button');
    deleteButton.onclick = (event) => {
      deleteProject(event);
    };

    container.appendChild(createButton(project.title));
    container.appendChild(deleteButton);
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
    // projectsContainer.appendChild(
    //   createButton(
    //     'Add Project +',
    //     'lg',
    //     'button',
    //     () => {
    //       toggleHidden(['newProjectForm', 'addProjectButton']);
    //     },
    //     'addProjectButton'
    //   )
    // );

    projectsContainer.appendChild(createForms.newProject());
    parent.appendChild(projectsContainer);
  };
  const projectsList = (projects) => {
    projects?.forEach((project) => {
      console.log('project', project);
      projectsListContainer.appendChild(projectContainer(project));
    });
  };
  const deleteProjectsList = () => {
    //  Delete projects list from dom
    console.log('Cleaning up old projects...');
    const oldList = projectsListContainer.querySelectorAll('div');
    oldList.forEach((project) => {
      project.remove();
    });
    console.log('Bye bye old projects...');
  };
  const updateProjectsList = (array) => {
    // Update the projects list by deleting and then repopulating
    deleteProjectsList();
    projectsList(array);
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
    currentProject.appendChild(createForms.newTask());
    parent.appendChild(currentProject);
  };
  const tasksList = (tasks) => {
    tasks?.forEach((task) => {
      tasksListContainer.appendChild(taskContainer(task));
    });
  };
  const deleteTasksList = () => {
    //  Delete tasks list from dom
    console.log('Cleaning up old tasks...');
    const oldList = tasksListContainer.querySelectorAll('div');
    oldList.forEach((task) => {
      task.remove();
    });
    console.log('Bye bye old tasks...');
  };
  const updateTasksList = (array) => {
    // Update the tasks list by deleting and then repopulating
    deleteTasksList();
    tasksList(array);
  };

  return {
    projectsLayout,
    tasksLayout,
    projectsList,
    updateProjectsList,
    updateTasksList,
  };
})();

// * Render the main page component
function renderPage() {
  const main = document.createElement('div');

  // Main container elements
  main.classList.add('main');
  render.projectsLayout(main);
  render.tasksLayout(main);
  render.updateProjectsList(getProjects());

  return main;
}

export default renderPage;

export { render };

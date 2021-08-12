import { de } from 'date-fns/locale';
import { getProjects, getProject } from './storage';
import createForms from './forms';
import { createButton } from './util';
import { deleteProject } from './project';
import { deleteTask } from './task';

//  Create button function with option for large and small buttons
// Create different ui function components

// * Render the projects and task components
const render = (() => {
  // const projectsListContainer = document.createElement('div');
  // const tasksListContainer = document.createElement('div');
  // const currentProjectTitle = document.createElement('h1');
  const projectContainer = (project) => {
    // Create individual project container
    const container = document.createElement('div');
    container.classList.add('project');
    container.id = project.id;
    const deleteButton = createButton('X', 'sm', 'button');
    deleteButton.title = 'Delete project';
    deleteButton.onclick = (event) => {
      const newProjectList = deleteProject(event);
      render.updateProjectsList(newProjectList);
    };
    const projectButton = createButton(project.title);
    projectButton.onclick = (event) => {
      const { id } = event.target.parentElement;
      changeCurrentProject(id);
    };

    container.appendChild(projectButton);
    container.appendChild(deleteButton);
    return container;
  };
  const projectsLayout = (parent) => {
    // Create the projects list container layout
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');
    projectsContainer.id = 'projectsContainer';

    const projectsTitle = document.createElement('h2');
    projectsTitle.innerHTML = 'Projects';
    projectsContainer.appendChild(projectsTitle);

    const projectsListContainer = document.createElement('div');
    projectsListContainer.id = 'projectsListContainer';
    projectsContainer.appendChild(projectsListContainer);

    // TODO Put in projects form
    projectsContainer.appendChild(
      createButton(
        'Add Project +',
        'lg',
        'button',
        createForms.toggleProjectForm,
        'addProjectButton'
      )
    );

    projectsContainer.appendChild(createForms.newProject());
    parent.appendChild(projectsContainer);
  };
  const projectsList = (projects) => {
    // Populate the projects list
    const projectsListContainer = document.getElementById(
      'projectsListContainer'
    );
    projects?.forEach((project) => {
      console.log('project', project);
      projectsListContainer.appendChild(projectContainer(project));
    });
  };
  const deleteProjectsList = () => {
    //  Delete projects list from dom
    const projectsListContainer = document.getElementById(
      'projectsListContainer'
    );
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
  const taskContainer = (task) => {
    const container = document.createElement('div');
    container.classList.add('task');
    container.id = task.id;

    const completeButton = createButton('', 'sm', 'button');
    completeButton.title = 'Mark Task Complete';
    completeButton.classList.add('taskComplete');
    completeButton.onclick = (event) => {
      const newTaskList = toggleTaskComplete(event);
      render.updateTasksList(newTaskList);
    };
    container.appendChild(completeButton);

    const title = document.createElement('div');
    title.title = 'Task Title';
    title.innerText = task.title;
    title.classList.add('taskTitle');
    container.appendChild(title);

    const description = document.createElement('div');
    description.title = 'Task Description';
    description.innerText = task.description;
    description.classList.add('taskDescription');
    container.appendChild(description);

    const dueDate = document.createElement('div');
    dueDate.title = 'Task Due Date';
    dueDate.innerText = task.dueDate;
    dueDate.classList.add('taskDueDate');
    container.appendChild(dueDate);

    const deleteButton = createButton('X', 'sm', 'button');
    deleteButton.title = 'Delete Task';
    deleteButton.onclick = (event) => {
      const newTaskList = deleteTask(event);
      render.updateTasksList(newTaskList);
    };
    container.appendChild(deleteButton);
    return container;
  };
  const tasksLayout = (parent) => {
    // Do some stuff
    const currentProject = document.createElement('div');
    currentProject.classList.add('currentProject');
    currentProject.title = 'Current Project';

    const currentProjectTitle = document.createElement('h1');
    currentProjectTitle.innerHTML = 'Current Project';
    currentProjectTitle.classList.add = 'title';
    currentProjectTitle.id = 'currentProjectTitle';
    currentProject.appendChild(currentProjectTitle);

    const tasksListContainer = document.createElement('div');
    tasksListContainer.id = 'tasksListContainer';
    currentProject.appendChild(tasksListContainer);

    // TODO put in add project button
    currentProject.appendChild(
      createButton(
        'Add Task +',
        'lg',
        'button',
        createForms.toggleTaskForm,
        'addTaskButton'
      )
    );

    // TODO Put in tasks form
    currentProject.appendChild(createForms.newTask());
    parent.appendChild(currentProject);
  };
  const tasksList = (tasks) => {
    const tasksListContainer = document.getElementById('tasksListContainer');
    tasks?.forEach((task) => {
      tasksListContainer.appendChild(taskContainer(task));
    });
  };
  const deleteTasksList = () => {
    //  Delete tasks list from dom
    const tasksListContainer = document.getElementById('tasksListContainer');
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

  const changeCurrentProject = (id) => {
    console.log('Changing current project to id:', id);
    const currentProject = getProject(id);
    console.log('CURRENT PROJECT', currentProject);

    const currentProjectContainer =
      document.querySelectorAll('.currentProject');
    console.log('currentProjectContainer', currentProjectContainer);
    currentProjectContainer.forEach((element) => {
      element.id = id;
    });

    const currentProjectTitle = document.getElementById('currentProjectTitle');
    currentProjectTitle.innerHTML = currentProject.title;
    updateTasksList(currentProject.tasks);
  };

  return {
    projectsLayout,
    tasksLayout,
    projectsList,
    updateProjectsList,
    updateTasksList,
    changeCurrentProject,
  };
})();

// * Render the main page component
function renderPage() {
  // Main container elements
  const main = document.createElement('div');
  main.classList.add('main');
  render.projectsLayout(main);
  render.tasksLayout(main);
  document.body.appendChild(main);

  // Populate main container elements
  render.updateProjectsList(getProjects());
  render.changeCurrentProject(getProjects()[0].id);
  return main;
}

export default renderPage;

export { render };

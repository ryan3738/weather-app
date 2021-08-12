import { createButton, formToObject, toggleHidden } from './util';
import { createProject } from './project';
import { createTask } from './task';
import { render } from './renderPage';
import { getProject, getProjects } from './storage';

const createForms = (() => {
  const formContainer = (fields, id, cancel, submit) => {
    const form = document.createElement('form');
    form.classList.add('form');
    // TODO remove after done testing
    form.classList.add('hidden');

    if (id) {
      form.id = id;
    }
    for (const field of fields) {
      form.appendChild(field);
    }

    const buttonContainer = document.createElement('div');
    const submitButton = createButton('submit', 'sm', 'submit', submit);
    const cancelButton = createButton('cancel', 'sm', 'button', cancel);
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);
    form.appendChild(buttonContainer);

    return form;
  };

  const projectFields = () => {
    const formFields = [];
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Project Name');
    title.setAttribute('required', true);
    formFields.push(title);

    return formFields;
  };

  const taskFields = () => {
    const fields = [];

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('title', 'Task Name');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Task Name');
    title.setAttribute('required', true);
    fields.push(title);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('title', 'Task Description');
    description.setAttribute('name', 'description');
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
  };

  const toggleProjectForm = () => {
    toggleHidden(['newProjectForm', 'addProjectButton']);
  };

  const newProject = () => {
    const submitNewProject = (event) => {
      event.preventDefault();
      const { form } = event.target;
      createProject(formToObject(form));
      render.updateProjectsList(getProjects());
    };
    const newProjectForm = formContainer(
      projectFields(),
      'newProjectForm',
      toggleProjectForm,
      submitNewProject
    );
    return newProjectForm;
  };

  const toggleTaskForm = () => {
    toggleHidden(['newTaskForm', 'addTaskButton']);
  };

  const newTask = () => {
    const submitNewTask = (event) => {
      event.preventDefault();
      const { form } = event.target;
      const formObject = formToObject(form);
      const { id } = event.target.parentElement.parentElement.parentElement;
      console.log('THIS IS THE PROJECT ID & TASK FORM', id, form);
      createTask(id, formObject);
      render.updateTasksList(getProject(id).tasks);
    };
    const newTaskForm = formContainer(
      taskFields(),
      'newTaskForm',
      toggleTaskForm,
      submitNewTask
    );
    return newTaskForm;
  };

  return {
    newProject,
    newTask,
    toggleProjectForm,
    toggleTaskForm,
  };
})();

export default createForms;

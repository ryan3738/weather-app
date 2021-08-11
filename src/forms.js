import { createButton, toggleHidden } from './util';
import { createProject } from './project';
import { render } from './renderPage';
import { getProjects } from './storage';

const createForms = (() => {
  // const projectsListContainer = document.createElement('div');

  // submitNewBookButton.onclick = function (event) {
  //   event.preventDefault();
  //   const { form } = event.target;
  //   addBookToLibrary(form);
  //   randomizeForm();
  // };

  const formContainer = (fields, id, cancel, submit) => {
    const container = document.createElement('div');
    const form = document.createElement('form');
    form.classList.add('form');
    // formContainer.classList.add('hidden');

    if (id) {
      container.id = id;
    }

    for (const field of fields) {
      form.appendChild(field);
    }

    const buttonContainer = document.createElement('div');

    const submitButton = createButton('submit', 'sm', 'submit');
    submitButton.onclick = function (event) {
      event.preventDefault();
      const { form } = event.target;
      createProject(form);
      render.updateProjectsList(getProjects());
    };
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(createButton('cancel', 'sm', 'button', cancel));

    form.appendChild(buttonContainer);

    // console.log('this is this', this);
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

  const newProject = () => {
    const newProjectForm = formContainer(
      projectFields(),
      'newProjectForm',
      () => {
        toggleHidden(['newProjectForm', 'addProjectButton']);
      }
    );

    return newProjectForm;
  };

  const newTask = () => {
    const newProjectForm = formContainer(
      taskFields(),
      'newTaskForm',
      'addTaskButton',
      () => {
        toggleHidden(['newTaskForm', 'addTaskButton']);
      }
    );

    return newProjectForm;
  };

  return { formContainer, projectFields, taskFields, newProject, newTask };
})();

export default createForms;

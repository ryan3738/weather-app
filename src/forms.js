import { createButton, toggleHidden } from './util';

const createForms = () => {
  // const projectsListContainer = document.createElement('div');

  // submitNewBookButton.onclick = function (event) {
  //   event.preventDefault();
  //   const { form } = event.target;
  //   addBookToLibrary(form);
  //   randomizeForm();
  // };

  const formContainer = (fields, id, cancel, submit) => {
    const container = document.createElement('form');
    container.classList.add('form');
    // formContainer.classList.add('hidden');

    if (id) {
      container.id = id;
    }

    const buttonContainer = document.createElement('div');

    for (const field of fields) {
      container.appendChild(field);
    }
    buttonContainer.appendChild(createButton('submit', 'sm', 'submit', submit));
    buttonContainer.appendChild(createButton('cancel', 'sm', 'button', cancel));

    container.appendChild(buttonContainer);

    // console.log('this is this', this);
    return container;
  };

  const projectFields = () => {
    const formFields = [];
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'Title');
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
};

export default createForms;

import { getId, formToObject } from './util';

// Make functions with ability to create and delete todos in a projects

class Task {
  constructor(
    id,
    title = 'New Task',
    description = 'This is a new task',
    dueDate = 2,
    priority = 1,
    complete = false,
    notes = ''
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
    this.notes = notes;
  }
}

const createTask = (form, myProjects) => {
  // do stuff here
  const id = getId(myProjects);
  const formObject = formToObject(form);
  const taskObject = new Task(
    id,
    formObject.title,
    formObject.description,
    formObject.dueDate
  );
  console.log(taskObject);
  myProjects.push(taskObject);
  //   updateLibrary(bookObject);
};

export { Task, createTask };

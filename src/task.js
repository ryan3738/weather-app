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

export { Task };

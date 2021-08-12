import { getDefaultProject } from './project';

//  TODO Create function that decides whether to save to local storage

// TODO Create function that saves project info and returns new myProjects array

// Look for projects in local storage
// Create default project if none exist in local storage
//  * Function that updates myProjects array
const updateMyProjects = (object) => {
  console.log('Storage upated...');
  localStorage.setItem('myProjects', JSON.stringify(object));
};

const getIndexFromId = (id, array) => {
  // TODO Create function that finds index from id
  const index = array.findIndex((item) => item.id === parseInt(id));
  return index;
};

// * Project CRUD functions
const getProjects = () => {
  const projects = [];
  const localStoredProjects = localStorage.getItem('myProjects');
  // TODO Remove once finished testing

  // check local storage for projects
  // If no projects exist use default project
  if (!localStoredProjects) {
    projects.push(...getDefaultProject());
    updateMyProjects(projects);
    console.log('No projects in local storage, using default project');
  }
  // If myProjects exists, if they do return myProjects projects exists
  if (localStoredProjects) {
    const storedProjects = JSON.parse(localStoredProjects);
    projects.push(...storedProjects);
  }
  console.log('PROJECTS', projects);
  return projects;
};

const getProject = (id) =>
  getProjects().find((project) => project.id === parseInt(id));

const addProject = (object) => {
  //   Add projects to storage
  const projects = getProjects();
  projects.push(object);
  console.log('Storage upated...');
  updateMyProjects(projects);
  return getProjects();
};

// Delete a project from projects array
const removeProject = (id) => {
  const projects = getProjects();
  const index = getIndexFromId(id, projects);
  console.log('Delete project in index:', index);
  projects.splice(index, 1);
  updateMyProjects(projects);
  return getProjects();
};

// * Task CRUD functions

const getTasks = (projectId) => getProject(projectId).tasks;

const getTask = (projectId, taskId) =>
  getTasks(projectId).find(
    (ProjectTask) => ProjectTask.id === parseInt(taskId)
  );

const addTask = (projectId, object) => {
  //   Add tasks to storage
  const projects = getProjects();
  const projectIndex = projects.findIndex(
    (project) => project.id === parseInt(projectId)
  );
  projects[projectIndex].tasks.push(object);
  console.log('Updated Projects', projects);
  updateMyProjects(projects);
  console.log('Storage upated...');
  return getTasks(projectId);
};

const removeTask = (projectId, taskId) => {
  // delete task from project
  // const project = getProject(projectId);
  const projects = getProjects();
  const projectIndex = getIndexFromId(projectId, projects);
  const project = projects[projectIndex];
  const { tasks } = project;
  const taskIndex = getIndexFromId(taskId, tasks);
  tasks.splice(taskIndex, 1);
  projects.splice(projectIndex, 1, project);
  updateMyProjects(projects);
  console.log('Projects!!!!', getProjects());
  return getTasks(projectId);
};

export {
  getProjects,
  getProject,
  addProject,
  removeProject,
  getTasks,
  getTask,
  addTask,
  removeTask,
};

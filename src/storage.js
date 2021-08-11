import { getDefaultProject } from './project';

//  TODO Create function that decides whether to save to local storage

// TODO Create function that saves project info and returns new myProjects array

// Look for projects in local storage
// Create default project if none exist in local storage

const getProjects = () => {
  const projects = [];
  const localStoredProjects = localStorage.getItem('myProjects');
  console.log('STOREDPROJECTS', localStoredProjects);
  // TODO Remove once finished testing
  //   projects.push(...getDefaultProject());

  // check local storage for projects
  // If no projects exist use default project
  if (!localStoredProjects) {
    projects.push(...getDefaultProject());
  }
  // If myProjects exists, if they do return myProjects projects exists
  if (localStoredProjects) {
    const storedProjects = JSON.parse(localStoredProjects);
    projects.push(...storedProjects);
  }
  console.log('PROJECTS', projects);
  return projects;
};

//  TODO Create function that performs CRUD operations with new items
const updateStorage = (object) => {
  const projects = getProjects();
  projects.push(object);
  console.log('Storage upated...');
  localStorage.setItem('myProjects', JSON.stringify(projects));
  return getProjects();
};

// const myProjects = getProjects();

const addProject = (object) => {
  //   Add projects to storage
  const projects = getProjects();
  projects.push(object);
  console.log('Storage upated...');
  localStorage.setItem('myProjects', JSON.stringify(projects));
  return getProjects();
};

// Delete a project from projects array
const deleteProject = (id) => {
  const projects = getProjects();
  const index = projects.findIndex((project) => project.id === parseInt(id));
  console.log('Delete book in index:', index);
  projects.splice(index, 1);
  localStorage.setItem('myProjects', JSON.stringify(projects));
  console.log('This project should be deleted', id);
  //   console.log(myProjects);
};

export { getProjects, addProject, deleteProject, updateStorage };

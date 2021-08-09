function getId(array) {
  // Create function that checks if id exists and assigns next availabe value
  const arr = array;
  let id = 0;
  while (arr.some((e) => e.id === id)) {
    id += 1;
  }
  return id;
}

function formToObject(form) {
  const newObject = {};
  console.log(newObject);
  for (const eachInput of form) {
    let { name, value, type } = eachInput;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'checkbox') {
      value = eachInput.checked;
    }
    if (value !== undefined && type !== 'submit' && type !== 'fieldset') {
      newObject[name] = value;
    }
  }
  return newObject;
}

export { getId, formToObject };

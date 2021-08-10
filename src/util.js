// * Silly function that can be removed
const printMe = () => {
  console.log('I get called from print.js!', this);
};

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

function toggleHidden(ids) {
  // if (ids.length < 1) {
  //   return;
  // }
  console.log('toggleHidden ids', ids);
  for (const id of ids) {
    console.log('id', id);
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  }
}

function createButton(text, size, type, onClick, id) {
  const btn = document.createElement('button');
  const buttonText = text || '';
  btn.innerHTML = buttonText;
  btn.onclick = onClick || printMe;
  btn.classList.add('btn');
  btn.setAttribute('title', buttonText);
  if (id) {
    btn.id = id;
  }
  if (type === 'submit') {
    btn.setAttribute('type', 'submit');
  }
  if (!type || type === 'button') {
    btn.setAttribute('type', 'button');
  }
  if (size === 'sm') {
    btn.classList.add('btn-sm');
  }
  return btn;
}

export { getId, formToObject, toggleHidden, createButton };

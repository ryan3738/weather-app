// * Render the control and display elements
// const render = (() => {
//   const someFunction = () => {};

//   return {
//     someFunction,
//   };
// })();

// * Render the main page component
function renderPage() {
  // Main container elements
  const body = document.querySelector('body');
  const main = document.createElement('div');
  main.classList.add('main');
  main.innerHTML = 'HELLO';
  body.appendChild(main);
  // Populate main container elements
}

export default renderPage;

// export { render };

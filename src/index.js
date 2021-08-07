import printMe from './print';
import './style.css';
import ui from './ui';

function component() {
  return ui();
}

document.body.appendChild(component());

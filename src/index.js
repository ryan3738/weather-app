import './style.css';
import renderPage from './renderPage';

function appPage() {
  return renderPage();
}

document.body.appendChild(appPage());

import './styles.css';
import { home } from './home';
import { about } from './about';
import { menuBackground } from './menu';

const content = document.getElementById('content');
const homeButton = document.getElementById('buttonHome');
const menuButton = document.getElementById('buttonMenu');
const aboutButton = document.getElementById('buttonAbout');

function contentRemover(myNode) {
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

content.appendChild(home);

homeButton.addEventListener('click',()=> {
    contentRemover(content);
    content.appendChild(home);
});

menuButton.addEventListener('click',()=> {
    contentRemover(content);
    content.appendChild(menuBackground);
});

aboutButton.addEventListener('click',()=> {
    contentRemover(content);
    content.appendChild(about);
});
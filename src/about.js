const about = document.createElement('div');
about.id = "about";

const aboutContainer = document.createElement('div');
aboutContainer.id = 'about-container';

const aboutHeadline = document.createElement('div');
aboutHeadline.id = 'about-headline';
aboutHeadline.innerHTML = 'About Us';

const thecook = document.createElement('div');
thecook.id = 'thecook';

const thecookImage = document.createElement('div');
thecookImage.id = 'thecook-image';

const thecookText = document.createElement('div');
thecookText.id = 'thecook-text';
thecookText.innerHTML = '<br>Our Chef<br>Cookie The Ogre';

thecook.appendChild(thecookImage);
thecook.appendChild(thecookText);

const aboutText = document.createElement('div');
aboutText.id = 'about-text';
aboutText.innerHTML = 
`We are a humble restaurant operating in the country of DULAC. 
We were mainly founded to feed ogres during the war but nowadays 
we welcome anyone who wants some taste of the OGRE Cuisine.`;

aboutContainer.appendChild(aboutHeadline);
aboutContainer.appendChild(thecook);
aboutContainer.appendChild(aboutText);

about.appendChild(aboutContainer);

export {about};
const home = document.createElement('div');
home.id = 'home';

const homeWelcome = document.createElement('div');
homeWelcome.id = 'home-welcome';
homeWelcome.innerHTML = "Welcome to Shrek's Diner";

const homeWelcomeTwo = document.createElement('div');
homeWelcomeTwo.id = 'home-welcome-2';
homeWelcomeTwo.innerHTML = "Finest Meals From the SWAMP";

home.appendChild(homeWelcome);
home.appendChild(homeWelcomeTwo);

export {home};

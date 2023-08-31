let themeButton = document.getElementById("theme-button");
let headerContainer = document.querySelector(".header-container");
let newsContainer = document.querySelector(".news-container");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");
    document.querySelector(".header-container").classList.toggle("dark-mode");
    document.querySelector(".news-container").classList.toggle("dark-mode");
}
//Event listener. Executes toggleDarkMode when themButton is clicked
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
const signNowButton = document.querySelector("#sign-now-button");
const addSignature = (person) => {
  // Write your code to manipulate the DOM here
  const newSign = '🖊️ ' + person.name + ' from ' + person.hometown + ' supports this.';
  const p = document.createElement('p');
  p.innerText = newSign;
  const signDiv = document.getElementById("signatures");
  signDiv.appendChild(p);
  toggleModal(person);
}

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  };
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    // TODO: Validate the value of each input
    if (person.hometown.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // TODO: Call addSignature() and clear fields if no errors
  if (containsErrors == false) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}
signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

const revealableContainers = document.querySelectorAll(".revealable");
const reveal = () => {
  const windowHeight = window.innerHeight;
  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active');
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
const toggleModal = (person) => {
  const modal = document.querySelector('#thanks-modal');
  const modalContent = document.querySelector('#thanks-modal-content');
  modal.style.display = 'flex';
  modalContent.textContent = `Thank you so much ${person.name}! ${person.hometown} represent!`;
  let intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)
}

let scaleFactor = 1;
let modalImage = document.querySelector('#modal-image');
const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}
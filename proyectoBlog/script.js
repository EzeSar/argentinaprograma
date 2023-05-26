// Get the elements from the DOM
const welcomeHeader = document.getElementById('welcomeHeader');
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');

// Add a submit event listener to the form
nameForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  const userName = nameInput.value; // Get the user's input from the name input field

  // Update the header text with the user's name
  welcomeHeader.textContent = `Bienvenido/a ${userName}, a mi Blog de ArgentinaPrograma!`;

  // Clear the input field
  nameInput.value = '';
});

// Get all the video links
const videoLinks = document.querySelectorAll('a[href^="https://www.youtube.com/watch?v="]');

// Add a click event listener to each video link
videoLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of opening the link
    const videoUrl = link.getAttribute('href');
    window.open(videoUrl, '_blank'); // Open the video link in a new tab
  });
});

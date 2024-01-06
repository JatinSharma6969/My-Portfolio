var aboutLink = document.getElementById('about');
var projectsLink = document.getElementById('projects-link');
var contactLink = document.getElementById('contacts');
var learnMoreButton = document.getElementById('button');

// Add a click event listener to the "About" link
aboutLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  var aboutMeSection = document.getElementById('about-me');
  aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});

// Add a click event listener to the "Projects" link
projectsLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  var projectsSection = document.getElementById('projects');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

// Add a click event listener to the "Contact" link
contactLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  var contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

// Add a click event listener to the "Learn More" button in the hero section
learnMoreButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the button
  var aboutMeSection = document.getElementById('about-me');
  aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});
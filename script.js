// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Form validation and response
  function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('form-response');
  
    if (name && email && message) {
      response.textContent = `Thank you, ${name}. We will respond soon!`;
      response.style.color = 'green';
      document.getElementById('contact-form').reset();
    } else {
      response.textContent = 'Please fill out all fields.';
      response.style.color = 'red';
    }
  }
  
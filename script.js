document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const comments = document.getElementById('comments').value.trim();

  if (!name || !email || !comments) {
    document.getElementById('responseMsg').textContent = 'Please fill all fields.';
    return;
  }

  document.getElementById('responseMsg').textContent = 'Thank you for your feedback, ' + name + '!';
  this.reset();
});

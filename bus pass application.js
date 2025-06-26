document.getElementById('passForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());

  try {
    const response = await fetch('http://localhost:5000/api/pass/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('passForm').reset();
    } else {
      alert('Submission failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Server error. Please check connection.');
  }
});

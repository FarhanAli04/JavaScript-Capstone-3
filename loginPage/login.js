document.getElementById('loginForm')
.addEventListener('submit', async function (e)  {
  e.preventDefault();
  const useremail = document.getElementById('userEmail').value;
  const userpassword = document.getElementById('userPassword').value;

  try {
      // Fetching all users from the API
      const response = await fetch('https://fakestoreapi.com/users');
      const users = await response.json();

      // Check if the user exists and password matches
      const user = users.find(user => user.email === useremail && user.password === userpassword);

      if (user) {
          alert('Login successful!');
          window.location.href = "../index.html"
          // Redirect or do something after successful login
      } else {
          alert('Invalid username or password.');
      }
  } catch (error) {
      alert('Error logging in.');
      console.error(error);
  }
});
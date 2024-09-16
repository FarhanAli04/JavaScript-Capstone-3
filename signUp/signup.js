document.getElementById('userSignUp')
.addEventListener('submit', async function (e) {
    e.preventDefault();  // Prevent the default form submission

    // Get user input values
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;

    try {
        // Fetch the list of all users from the API
        const usersResponse = await fetch('https://fakestoreapi.com/users');
        const users = await usersResponse.json();
       
        // Check if the user with the provided email already exists
        const existingUser = users.find(user => user.email === userEmail);

        // If the user does not exist, show an alert
        if (!existingUser) {
            alert('User does not exist with this email. Signup not allowed.');
            return;
        }

        // Add your user login process here
        alert('User successfully logged in');
        window.location.href = "../loginPage/login.html";  // Redirect to the login page
    } catch (error) {
        // Handle any errors that occur during the process
        alert('Error during login');
        console.error(error);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch the user data from the API
            const response = await fetch(apiUrl);

            // Convert the response to JSON format
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list to display user names
            const userList = document.createElement('ul');

            // Loop through the users and create list items for each name
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;  // Set the name of the user
                userList.appendChild(listItem);    // Append the <li> to the <ul>
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors and show a failure message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Fetch user data once the DOM is fully loaded
    fetchUserData();
});

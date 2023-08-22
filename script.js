function redirectToNewFile() {
    // Replace 'new-file.html' with the path to the file you want to navigate to
    window.location.href = 'menu.html';
}

// Attach the function to the button click event
document.getElementById('redirectButton').addEventListener('click', redirectToNewFile);
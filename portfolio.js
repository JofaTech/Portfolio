function fetchGitHubProfile(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("github-avatar").src = data.avatar_url;
            document.getElementById("github-avatar").alt = `${data.login} avatar`;
            document.getElementById("github-bio").textContent = data.bio || "No bio available.";
        })
        .catch(error => {
            console.error("Failed to fetch GitHub data:", error);
            document.getElementById("github-bio").textContent = "Error loading bio.";
        });
}

// Fetches the GitHub API profile information using personal username
fetchGitHubProfile("JofaTech");

// Darkens navigation bar when scrolling for better visibility
const header = document.querySelector('.navbar')

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
}

// Contact Form Functionality (let's user input their information and send contact request to my email)
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = encodeURIComponent(document.getElementById("name").value);
    const email = encodeURIComponent(document.getElementById("email").value);
    const message = encodeURIComponent(document.getElementById("message").value);

    const mailtoLink = `mailto:blukevich82@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = mailtoLink;
});


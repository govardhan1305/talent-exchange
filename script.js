function getStarted() {
    alert("Welcome to Talent Exchange! 🚀");
}

function goToLogin() {
    alert("Login page coming next! 🔐");
}

function scrollToHow() {
    document.getElementById("how").scrollIntoView({
        behavior: "smooth"
    });
}

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");
}

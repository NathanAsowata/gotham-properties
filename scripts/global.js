
// Responsive menu is closed by default
let isOpen = false

// Get the menu
const menu = document.getElementById("menu")

// This function toggles the responsive menu
function handleResponsiveMenu () {
    if (isOpen) {
        menu.style.display = "none"
        isOpen = false
    }
    else {
        menu.style.display = "flex"
        isOpen = true
    }
}

// Footer copyright year
let date = new Date()
let year = date.getFullYear()
document.getElementById("year").innerText = year
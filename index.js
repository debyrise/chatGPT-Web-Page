function populateInput(text) {
    document.getElementById('search').value = text; 
}

        document.getElementById("moreButton").addEventListener("click", function() {
        const hiddenButtons = document.getElementById("hiddenButtons");
        hiddenButtons.style.display = "flex"; 
        this.style.display = "none"; 
    });

    const chatIcon = document.getElementById('chatIcon');
    const newChatButton = document.getElementById('newChatButton');

    chatIcon.addEventListener('mouseenter', () => {
        newChatButton.style.display = 'block'; 
    });

    chatIcon.addEventListener('mouseleave', () => {
        newChatButton.style.display = 'none'; 
    });

    const heroText = "What Can I help with?";
    let index = 0;

    function typeText() {
        if (index < heroText.length) {
            document.getElementById("heroText").innerHTML += heroText.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust speed here
        }
    }

    window.onload = typeText;

    function submitSearch() {
// Get the input value (if needed for any processing)
const searchValue = document.getElementById('search').value;

// Clear the input field
document.getElementById('search').value = '';

// Reload the page (if needed)
location.reload();
}
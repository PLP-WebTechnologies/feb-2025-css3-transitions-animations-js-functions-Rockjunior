// Elements
const animateButton = document.getElementById('animateButton');
const resetButton = document.getElementById('resetButton');
const animatedBox = document.getElementById('animatedBox');
const statusMessage = document.getElementById('statusMessage');

// Check localStorage for user preferences
document.addEventListener('DOMContentLoaded', () => {
    const animationStatus = localStorage.getItem('animationStatus');
    if (animationStatus === 'true') {
        statusMessage.textContent = 'Animation was previously triggered!';
        animatedBox.classList.add('animate');
    } else {
        statusMessage.textContent = 'Click the button to trigger the animation.';
    }
});

// Function to trigger animation
function triggerAnimation() {
    // Add animation class to the box
    animatedBox.classList.add('animate');
    
    // Store the animation status in localStorage
    localStorage.setItem('animationStatus', 'true');
    
    // Update the status message
    statusMessage.textContent = 'Animation triggered! Refresh the page to keep it.';
}

// Function to reset animation
function resetAnimation() {
    // Remove the animation class from the box
    animatedBox.classList.remove('animate');
    
    // Remove the animation status from localStorage
    localStorage.removeItem('animationStatus');
    
    // Update the status message
    statusMessage.textContent = 'Animation has been reset. Click to trigger it again.';
}

// Event Listeners
animateButton.addEventListener('click', triggerAnimation);
resetButton.addEventListener('click', resetAnimation);

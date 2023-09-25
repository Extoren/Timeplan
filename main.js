// Border color change on hover
    // Get all elements with the class "class-box"
    const animatedBoxes = document.querySelectorAll('.class-box');
  
    // Create a variable to hold the interval ID
    let animationInterval;
  
    // Function to apply the color change animation
    const applyAnimation = (box) => {
      const titleElement = box.querySelector('.Tittel');
      const colorValue = getComputedStyle(titleElement).color;
  
      box.style.borderColor = colorValue;
      box.style.transition = 'border-color 1s';
  
      // Clear the previous interval if it exists
      clearInterval(animationInterval);
  
      // Set a timeout to change the border color back to gray
      setTimeout(() => {
        box.style.borderColor = 'gray';
      }, 1000);
    };
  
    animatedBoxes.forEach((box) => {
      // Apply the initial gray border color
      box.style.borderColor = 'gray';
  
      // Add a mouseenter event listener
      box.addEventListener('mouseenter', () => {
        applyAnimation(box);
  
        // Set an interval to repeat the animation after each cycle
        animationInterval = setInterval(() => {
          applyAnimation(box);
        }, animatedBoxes.length * 1000);
      });
  
      // Add a mouseleave event listener to clear the interval
      box.addEventListener('mouseleave', () => {
        clearInterval(animationInterval);
        box.style.borderColor = 'gray';
      });
    });


// Line
document.addEventListener("DOMContentLoaded", function() {
    const startTime = 8 * 60 + 15; // 8:15 AM
    const endTime = 15 * 60 + 20; // 3:20 PM
  
    const redLine = document.getElementById('red-line');
  
    const updateRedLinePosition = () => {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();
  
      const percentage = ((currentTime - startTime) / (endTime - startTime)) * 100;
      const adjustedPercentage = percentage + 5;
      redLine.style.top = `${adjustedPercentage}%`;
    };
  
    updateRedLinePosition();
  
    setInterval(updateRedLinePosition, 60000); // Update every minute
});

  
const popupTextElement = document.getElementById("popupText");
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popupBtn").addEventListener("click", function() {
      document.getElementById("popup").style.display = "block";
      document.getElementById("popup-overlay").style.display = "block";
      displayTextWithTypewriterEffect(["la bu 😚😚😚😚😚😚😚😚😚😚😚😚😚😚😚😚 darao Next page e liye jai", "Next page e liye jai"], 0);
    });
  
    document.getElementById("closeBtn").addEventListener("click", function() {
      document.getElementById("popup").style.display = "none";
      document.getElementById("popup-overlay").style.display = "none";
      popupTextElement.innerHTML = ""; // Clear existing text

    });
  });
  
  function displayTextWithTypewriterEffect(strings, index) {
    if (index < strings.length) {
      popupTextElement.innerHTML += "</br></br>"; // Clear existing text
      const text = strings[index];
      let i = 0;
      const typeWriterInterval = setInterval(function() {
        if (i < text.length) {
          popupTextElement.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(typeWriterInterval);
          // Wait for a moment before displaying the next string
          setTimeout(function() {
            displayTextWithTypewriterEffect(strings, index + 1);
            window.location.href = "../pyaar/index.html";
          }, 1500); // Adjust this delay as needed
        }
      }, 70); // Typing speed in milliseconds, adjust as needed
    }
  }

  document.getElementById("move").addEventListener("click", function() {
    var button = document.getElementById("move");
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    
    // Calculate random coordinates within the screen boundaries
    var newX = Math.floor(Math.random() * (screenWidth - button.offsetWidth));
    var newY = Math.floor(Math.random() * (screenHeight - button.offsetHeight));
    
    // Move the button to the new coordinates
    button.style.left = newX + "px";
    button.style.top = newY + "px";
});
        // Function to start playing the music
        function startMusic() {
          var audio = document.getElementById('background-music');
          audio.play();
          // Remove the event listener after the first user interaction
          window.removeEventListener('click', startMusic);
      }

      // Add an event listener for any user interaction (e.g., click)
      window.addEventListener('click', startMusic);
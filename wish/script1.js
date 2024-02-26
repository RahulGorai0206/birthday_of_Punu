const ll = document.getElementById("ll");
document.getElementById("ll").addEventListener("click", function() {
  window.location.href = "https://wa.me/+918372924492?text=I+Love+youuuuuuuu+infinity+babyyyy+😚😚😚😚😚❤️"});

        // Function to start playing the music
        function startMusic() {
          var audio = document.getElementById('background-music');
          audio.play();
          // Remove the event listener after the first user interaction
          window.removeEventListener('click', startMusic);
      }

      // Add an event listener for any user interaction (e.g., click)
      window.addEventListener('click', startMusic);
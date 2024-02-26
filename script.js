const popupTextElement = document.getElementById("popupText");
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popupBtn").addEventListener("click", function() {
      document.getElementById("popup").style.display = "block";
      document.getElementById("popup-overlay").style.display = "block";
      displayTextWithTypewriterEffect(["Pilizzzzz sune leeeeee 🥺", "Sune le na mummummm 🥺", "sunle 100 ta chumu 😗", "sune le sune le lai ja ja yes tai click kor ja ja ASAP"], 0);
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
          }, 1500); // Adjust this delay as needed
        }
      }, 70); // Typing speed in milliseconds, adjust as needed
    }
  }
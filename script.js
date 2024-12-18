  // Wait until the DOM content is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Select the players section by its ID
    var playersSection = document.getElementById('players');
    
    // Check if the players section exists, then hide it
    if (playersSection) {
      playersSection.style.display = 'none';  // Hide the entire section
    }
  });

// Blog Section Hide
function toggleBlogSection() {
  var blogSection = document.getElementById("blogs");
  if (blogSection.style.display === "none") {
    blogSection.style.display = "block";
  } else {
    blogSection.style.display = "none";
  }
}

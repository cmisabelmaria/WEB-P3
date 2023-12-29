document.addEventListener("DOMContentLoaded", function() {
    var isDragging = false;
    var offsetX, offsetY;
  
    var movableBackground = document.querySelector(".movable-background");
  
    if (movableBackground) {
      movableBackground.addEventListener("mousedown", function(e) {
        isDragging = true;
        offsetX = e.clientX - movableBackground.offsetLeft;
        offsetY = e.clientY - movableBackground.offsetTop;
      });
  
      document.addEventListener("mousemove", function(e) {
        if (isDragging) {
          var x = e.clientX - offsetX;
          var y = e.clientY - offsetY;
  
          movableBackground.style.left = x + "px";
          movableBackground.style.top = y + "px";
        }
      });
  
      document.addEventListener("mouseup", function() {
        isDragging = false;
      });
    }
  });
  
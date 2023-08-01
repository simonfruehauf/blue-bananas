
// Extend numbers to be able to be clamped
Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
// function to show and hide bars
function toggleBar(id, visible = -1) {
  var bar = document.getElementById(id);
  bar = bar.parentElement;
  if(visible === -1){
      switch (bar.style.display) {
          case "block":
          case "":
              bar.style.display = "none";
              break;
          case "inherit":
          default:
              bar.style.display = "block";

              break;
      }
  }
  else {  
      if (visible) {
          bar.style.display = "block";
      }
      else {
          bar.style.display = "none";
      }
  }
}
  // TODO info / log thing at bottom right of screen or in sidebar

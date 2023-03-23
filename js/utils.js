
// Extend numbers to be able to be clamped
Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };


  // TODO info / log thing at bottom right of screen or in sidebar

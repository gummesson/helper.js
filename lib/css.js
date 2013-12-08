  /* CSS */

  // Set the style of the element.
  Helper.css = function(element, property, value) {
    element.style[property] = value;
  };

  // Hide the element.
  Helper.hide = function(element) {
    element.style.display = 'none';
  };

  // Show the element.
  Helper.show = function(element) {
    element.style.display = 'block';
  };

  // Hide/show the element.
  Helper.toggle = function(element) {
    if (element.style.display === 'none') {
      Helper.show(element);
    } else {
      Helper.hide(element);
    }
  };

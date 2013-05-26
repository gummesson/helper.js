  /* Manipulation */

  // Create the new element
  Helper.create = function(element) {
    return document.createElement(element);
  };

  // Append a child to the element
  Helper.append = function(element, child) {
    element.appendChild(child);
  };

  // Prepend a child to the element
  Helper.prepend = function(element, child) {
    element.insertBefore(child, element.childNodes[0]);
  };

  // Replace a child of the element
  Helper.replace = function(element, child, replacement) {
    element.replaceChild(replacement, child);
  };

  // Remove a child from the element
  Helper.remove = function(element, child) {
    element.removeChild(child);
  };

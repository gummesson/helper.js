  /* Siblings */

  // Get the next sibling of the element.
  Helper.next = function(element) {
    if (documentElement.nextElementSibling) {
      return element.nextElementSibling;
    } else {
      return Internal.findNode(element.nextSibling, 'next');
    }
  };

  // Get the previous sibling of the element.
  Helper.prev = function(element) {
    if (documentElement.previousElementSibling) {
      return element.previousElementSibling;
    } else {
      return Internal.findNode(element.previousSibling, 'prev');
    }
  };

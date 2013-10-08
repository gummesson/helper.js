  /* Children */

  // Get the parent of the element.
  Helper.parent = function(element) {
    return element.parentNode;
  };

  // Check if the element has any children.
  Helper.hasChildren = function(element) {
    return (element.children.length > 0);
  };

  // Get the first (specific) child of the element.
  Helper.first = function(element, child) {
    if (child === undefined) {
      if (documentElement.firstElementChild) {
        return element.firstElementChild;
      } else {
        return Internal.findNode(element.firstChild, 'next');
      }
    } else {
      return element.querySelector(child);
    }
  };

  // Get the last (specific) child of the element.
  Helper.last = function(element, child) {
    if (child === undefined) {
      if (documentElement.lastElementChild) {
        return element.lastElementChild;
      } else {
        return Internal.findNode(element.lastChild, 'prev');
      }
    } else {
      var elements = Internal.get(child, element);
      return elements[elements.length - 1];
    }
  };

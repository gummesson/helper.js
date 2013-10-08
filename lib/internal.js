  /* Internal functions */

  // Get the matching (child) element(s) in the document or inside 
  // another element.
  Internal.get = function(child, element) {
    var elements;
    if (element === undefined) {
      elements = document.querySelectorAll(child);
    } else {
      elements = element.querySelectorAll(child);
    }
    if (elements.length === 1) {
      return elements[0];
    } else {
      return elements;
    }
  };

  // Find the actual relevant element node if there's no support for 
  // `firstElementChild`, `lastElementChild`, `nextElementSibling` or
  // `previousElementSibling`.
  Internal.findNode = function(element, direction) {
    var node = element;
    if (direction === 'first' || direction === 'next') {
      while (node.nodeType > 1) {
        node = node.nextSibling;
      }
      return node;
    } else if (direction === 'last' || direction === 'prev') {
      while (node.nodeType > 1) {
        node = node.previousSibling;
      }
      return node;
    }
  };

  // Match the class name in the class list.
  Internal.classMatch = function(name) {
    return new RegExp('(\\s+|^)' + name + '(\\s+|$)');
  };

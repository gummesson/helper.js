  /* Element */

  // Get the matching elements.
  Helper.get = function(element, child) {
    if (child === undefined) {
      return Internal.get(element);
    } else {
      return Internal.get(child, element);
    }
  };

  /* Classes */

  // Check if the element has a specific class name.
  Helper.hasClass = function(element, name) {
    return Internal.classMatch(name).test(element.className);
  };

  // Add the class to the element's class list.
  Helper.addClass = function(element, name) {
    if (Helper.hasAttr(element, 'class')) {
      element.className += ' ' + name;
    } else {
      element.className = name;
    }
  };

  // Remove the class from the element's class list.
  Helper.removeClass = function(element, name) {
    var oldList = element.className,
        classMatch = Internal.classMatch(name),
        newList = oldList.replace(classMatch, '');
    element.className = newList;
  };

  // Add/remove the class from the element's class list.
  Helper.toggleClass = function(element, name) {
    if (Helper.hasClass(element, name)) {
      Helper.removeClass(element, name);
    } else {
      Helper.addClass(element, name);
    }
  };

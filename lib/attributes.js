  /* Attributes */

  // Check if the element has the specific attribute.
  Helper.hasAttr = function(element, attribute) {
    return element.hasAttribute(attribute);
  };

  // Get the attribute from the element.
  Helper.getAttr = function(element, attribute) {
    return element.getAttribute(attribute);
  };

  // Set the attribute on the element.
  Helper.setAttr = function(element, attribute, value) {
    element.setAttribute(attribute, value);
  };

  // Remove the attribute from the element.
  Helper.removeAttr = function(element, attribute) {
    element.removeAttribute(attribute);
  };

  /* Content */

  // Get/set the HTML content of the element.
  Helper.html = function(element, content) {
    if (content === undefined) {
      return element.innerHTML;
    } else {
      element.innerHTML = content;
    }
  };

  // Get/set the text content of the element, either by using `textContent`
  // or `innerText` on older browsers.
  Helper.text = function(element, content) {
    if (documentElement.textContent) {
      if (content === undefined) {
        return element.textContent;
      } else {
        element.textContent = content;
      }
    } else {
      if (content === undefined) {
        return element.innerText;
      } else {
        element.innerText = content;
      }
    }
  };

  // Get/set the value of the element.
  Helper.val = function(element, content) {
    if (content === undefined) {
      return element.value;
    } else {
      element.value = content;
    }
  };

  // Check if the content of the element contains the given string.
  Helper.contains = function(element, content) {
    return Helper.text(element).indexOf(content) >= 0;
  };

  // Empty the element.
  Helper.empty = function(element) {
    element.innerHTML = '';
  };

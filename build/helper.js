/*
 *  Helper.js
 *
 *  A minimal library for super basic DOM manipulation tasks.
 *
 *  Version: 0.1.0
 *  License: MIT
 *
 *  Support: IE8+
 *
 */
(function(window, undefined) {

  'use strict';

  /* Base setup */

  // Set the global variables.
  var document = window.document,
      documentElement = document.documentElement;

  // Set the global and internal namespace.
  var Helper = {},
      Internal = {};

  // Set the current version.
  Helper.VERSION = '0.1.0';

  // Export `Helper` either as a CommonJS module, an AMD module or
  // as an global object.
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = Helper;
  } else {
    if (typeof define === 'function' && define.amd) {
      define('helper', [], function() { return Helper; });
    } else {
      window.Helper = Helper;
    }
  }

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

  /* Element */

  // Get the matching elements.
  Helper.get = function(element, child) {
    if (child === undefined) {
      return Internal.get(element);
    } else {
      return Internal.get(child, element);
    }
  };

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

  /* Manipulation */

  // Create the new element.
  Helper.create = function(element) {
    return document.createElement(element);
  };

  // Append a child to the element.
  Helper.append = function(element, child) {
    element.appendChild(child);
  };

  // Prepend a child to the element.
  Helper.prepend = function(element, child) {
    element.insertBefore(child, element.childNodes[0]);
  };

  // Replace a child of the element.
  Helper.replace = function(element, child, replacement) {
    element.replaceChild(replacement, child);
  };

  // Remove a child from the element.
  Helper.remove = function(element, child) {
    element.removeChild(child);
  };

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
    var hasClass = Helper.hasClass(element, name);
    if (hasClass === true) {
      Helper.removeClass(element, name);
    } else {
      Helper.addClass(element, name);
    }
  };

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
  Helper.toggle = function (element) {
    if (element.style.display === 'none') {
      Helper.show(element);
    } else {
      Helper.hide(element);
    }
  };

  /* Dimensions */

  // Get the layout width of the element.
  Helper.width = function(element) {
    return element.offsetWidth;
  };

  // Get the layout height of the element.
  Helper.height = function(element) {
    return element.offsetHeight;
  };

  /* Events */

  // Add the event to the element.
  Helper.on = function(trigger, event, callback) {
    if (window.addEventListener) {
      trigger.addEventListener(event, callback, false);
    } else {
      trigger.attachEvent('on' + event, callback);
    }
  };

  // Remove the event to the element.
  Helper.off = function(trigger, event, callback) {
    if (window.removeEventListener) {
      trigger.removeEventListener(event, callback, false);
    } else {
      trigger.detachEvent('on' + event, callback);
    }
  };

  // Trigger the callback function when the DOM is ready.
  // It can only be used once per website.
  Helper.ready = function(callback) {
    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', callback, false);
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'interactive' ||
            document.readyState === 'complete') {
          callback();
        }
      });
    }
  };

  /* Utilities */

  // Loop through all the elements and perform the callback function 
  // on the elements (by using "this" in the callback itself).
  Helper.each = function(elements, callback) {
    var count = elements.length, i;
    for (i = 0; i < count; i++) {
      callback.apply(elements[i]);
    }
  };

  // Send a simple GET ajax request and return the data to the 
  // callback function.
  Helper.load = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        callback(request.responseText);
      }
    };
    request.send(null);
  };

})(window);

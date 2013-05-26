  /* Events */

  // Add the event to the element
  Helper.on = function(trigger, event, callback) {
    if (window.addEventListener) {
      trigger.addEventListener(event, callback, false);
    } else {
      trigger.attachEvent('on' + event, callback);
    }
  };

  // Remove the event to the element
  Helper.off = function(trigger, event, callback) {
    if (window.removeEventListener) {
      trigger.removeEventListener(event, callback, false);
    } else {
      trigger.detachEvent('on' + event, callback);
    }
  };

  // Trigger the callback function when the DOM is ready. It can only be
  // used one time per website.
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

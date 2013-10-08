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

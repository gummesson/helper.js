# Helper.js

*Helper.js* is a minimal library for super basic DOM manipulation tasks. It currently weighs in at around 10.2 kb uncompressed, about 3.3 kb minified and less than 700 bytes compressed and gzipped.

## Element

### Helper.get

Returns all of the matches of the given element.

**Usage:**

```javascript
Helper.get(element[, child]);
```

**Example:**

```javascript
Helper.get('#foo');

var foo = Helper.get('#foo');
Helper.get(foo, '.bar');
```

## Children

### Helper.parent

**Usage:**

Returns the parent element of the given element.

```javascript
Helper.parent(element);
```

**Example:**

```javascript
var foo = Helper.get('.foo');
Helper.parent(foo);
```

### Helper.hasChildren

Checks if the given element has any children. Returns either true or false.

**Usage:**

```javascript
Helper.hasChildren(element);
```

**Example:**

```javascript
var foo = Helper.get('#foo');
Helper.hasChildren(foo);
```

### Helper.first

Returns either the first child of the given element, or finds the first match of the child element in question.

**Usage:**

```javascript
Helper.first(element[, child]);
```

**Example:**

```javascript
var foo = Helper.get('#foo');
Helper.first(foo);

var foo = Helper.get('#foo');
Helper.first(foo, '.bar');
```

### Helper.last

Returns either the last child of the given element, or finds the last match of the child element in question.

**Usage:**

```javascript
Helper.last(element[, child]);
```

**Example:**

```javascript
var foo = Helper.get('#foo');
Helper.last(foo);

var foo = Helper.get('#foo');
Helper.last(foo, '.bar');
```

## Siblings

### Helper.next

Returns the next sibling of the given element.

**Usage:**

```javascript
Helper.next(element);
```

**Example:**

```javascript
var foo = Helper.get('.foo');
Helper.next(foo);
```

### Helper.prev

Returns the previous sibling of the given element.

**Usage:**

```javascript
Helper.prev(element);
```

**Example:**

```javascript
var foo = Helper.get('.foo');
Helper.prev(foo);
```

## Manipulation

### Helper.create

Creates a new element.

**Usage:**

```javascript
Helper.create(element);
```

**Example:**

```javascript
Helper.create('p');
```

### Helper.append

Appends a child element on the given parent element.

**Usage:**

```javascript
Helper.append(element, child);
```

**Example:**

```javascript
var element = Helper.get('#foo'),
    child = Helper.create('p');

Helper.append(element, child);
```

### Helper.prepend

Prepends a child element on the given parent element.

**Usage:**

```javascript
Helper.prepend(element, child);
```

**Example:**

```javascript
var element = Helper.get('#foo'),
    child = Helper.create('p');

Helper.prepend(element, child);
```

### Helper.replace

Replaces a child element with another element inside the given parent element.

**Usage:**

```javascript
Helper.replace(element, child, replacement);
```

**Example:**

```javascript
var element = Helper.get('#foo'),
    child = Helper.get('.bar'),
    replacement = Helper.create('p');

Helper.replace(element, child, replacement);
```

### Helper.remove

Removes a child element from the given parent element.

**Usage:**

```javascript
Helper.remove(element, child);
```

**Example:**

```javascript
var element = Helper.get('#foo'),
    child = Helper.get('#bar');

Helper.remove(element, child);
```

## Attributes

### Helper.hasAttr

Checks if the given element has the attribute in question. Returns either true or false.

**Usage:**

```javascript
Helper.hasAttr(element, attribute);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.hasAttr(element, 'class');
```

### Helper.getAttr

Returns the given attribute of the element in question.

**Usage:**

```javascript
Helper.getAttr(element, attribute);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.getAttr(element, 'class');
```

### Helper.setAttr

Sets the given value of an attribute on the element in question.

**Usage:**

```javascript
Helper.setAttr(element, attribute, value);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.setAttr(element, 'class', 'bar');
```

### Helper.removeAttr

Removes the given attribute of the element in question.

**Usage:**

```javascript
Helper.removeAttr(element, attribute);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.removeAttr(element, 'class');
```

## Classes

### Helper.hasClass

Checks if the given element has the class in question. Returns either true or false.

**Usage:**

```javascript
Helper.hasClass(element, class);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.hasClass(element, 'bar');
```

### Helper.addClass

Adds a class to the given element.

**Usage:**

```javascript
Helper.addClass(element, class);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.addClass(element, 'bar');
```

### Helper.removeClass

Removes a class from the given element.

**Usage:**

```javascript
Helper.removeClass(element, class);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.removeClass(element, 'bar');
```

### Helper.toggleClass

Either adds or removes a class on/from the given element.

**Usage:**

```javascript
Helper.toggleClass(element, class);
```

**Example:**

```javascript
var element = Helper.get('#foo');

Helper.on(trigger, 'click', function() {
  Helper.toggleClass('foo');
});
```

## Content

### Helper.html

Sets the HTML content of the given element. If the seconds argument is empty it'll instead return the HTML content of the element.

**Usage:**

```javascript
Helper.html(element[, content]);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.html(element);

var element = Helper.get('#foo');
Helper.html(element, '<p>Lorem ipsum</p>');
```

### Helper.text

Sets the text content of the given element. If the seconds argument is empty it'll instead return the text content of the element.

**Usage:**

```javascript
Helper.text(element[, content]);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.text(element);

var element = Helper.get('#foo');
Helper.text(element, 'Lorem ipsum');
```

### Helper.contains

Checks if the content of the given element contains the string in question. Returns either true or false.

**Usage:**

```javascript
Helper.contains(element, content);
```

**Example:**

```javascript
var foo = Helper.get('#foo');
Helper.contains(foo, 'Lorem ipsum');
```

### Helper.val

Either returns or sets the value of an text input element.

**Usage:**

```javascript
Helper.val(element[, content]);
```

**Example:**

```javascript
var foo = Helper.get('#foo');
Helper.val(foo);

var foo = Helper.get('#foo');
Helper.val(foo, 'Hello!');
```

### Helper.empty

Empties the content of the given element.

**Usage:**

```javascript
Helper.empty(element);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.empty(element);
```

## CSS

### Helper.css

Sets the inline styling of the given element.

**Usage:**

```javascript
Helper.css(element, property, value);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.css(element, 'color', 'red');
```

### Helper.hide

Hides the given element.

**Usage:**

```javascript
Helper.hide(element);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.hide(element);
```

### Helper.show

Shows the given element.

**Usage:**

```javascript
Helper.show(element, value);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.show(element);
```

### Helper.toggle

Either hides or shows the given element.

**Usage:**

```javascript
Helper.toggle(element);
```

**Example:**

```javascript
var trigger = Helper.get('#foo'),
    target = Helper.get('#bar');

Helper.on(trigger, 'click', function() {
  Helper.toggle(target);
});
```

## Dimensions

### Helper.width

Returns the width of the given element.

**Usage:**

```javascript
Helper.width(element);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.width(element);
```

### Helper.height

Returns the height of the given element.

**Usage:**

```javascript
Helper.height(element);
```

**Example:**

```javascript
var element = Helper.get('#foo');
Helper.height(element);
```

## Events

### Helper.on

Adds an event to the given trigger.

**Usage:**

```javascript
Helper.on(trigger, event, callback);
```

**Example:**

```javascript
var trigger = Helper.get('#foo');

Helper.on(trigger, 'click', function() {
  alert('Hello!');
});
```

### Helper.off

Removes an event from the given trigger.

**Usage:**

```javascript
Helper.off(trigger, event, callback);
```

**Example:**

```javascript
var trigger = Helper.get('#foo');
Helper.off(trigger, 'click', callback);
```

### Helper.ready

Executes the given callback function when the DOM is ready.

**Usage:**

```javascript
Helper.ready(callback);
```

**Example:**

```javascript
Helper.ready(function() {
  alert('Hello!');  
});
```

## Utilities

### Helper.each

Loops through the given elements and performs the callback in question.

**Usage:**

```javascript
Helper.each(element, callback);
```

**Example:**

```javascript
var foo = Helper.get('.foo');

Helper.each(foo, function() {
  Helper.css(this, 'color', 'red');
});
```

### Helper.load

Sends an ajax request and returns the content of the given URL.

**Usage:**

```javascript
Helper.load(url, callback);
```

**Example:**

```javascript
var foo = Helper.get('#foo');

Helper.load('file.txt', function(data) {
  Helper.text(foo, data);  
});
```

## Example usage

Wrap your code in an immediately invoke function expression (IIFE) to alias `Helper` to something shorter.

```javascript
(function(H) {

  var foo = H.get('.foo');

  H.each(foo, function() {
    H.css(this, 'color', 'red');
  });

})(Helper);
```

## License

**The MIT License (MIT)**

*Copyright © 2013 Ellen Gummesson*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

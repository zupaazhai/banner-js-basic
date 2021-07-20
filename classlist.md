## Handle class
```Javascript
var box = document.querySelector('#box')

// Add class name
box.classList.add('bg-red')
// <div id="box" class="bg-red"></div>

// Remove class name
box.classList.remove('bg-red')
// <div id="box"></div>

// Check class name exists
if (box.classList.contains('bg-red')) {
  ....
}
```
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

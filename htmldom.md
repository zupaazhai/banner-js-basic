## Access to DOM
```Javascript
// Access by getElementById
var box = document.getElementById('box')

// Access by querySelector
var box = document.querySelector('#box')

// Access multiple HTML Dom by querySelectorAll
var boxs = document.querySelectorAll('.box')

boxs.forEach(function (box) {
  console.log(box)
})
```
## Get/Set/Remove Attribute
```Javascript
var box = document.getElementById('box')

// Set
box.setAttribute('id', 'myBox')

// Get attribute value
box.getAttribute('id')

// Remove attribute
box.removeAttribute('id')
```

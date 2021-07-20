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
## Tip ⚡
You can access to HTML Dom by `id` without declaration of `getElementById` or `querySelector`
by set id of HTML DOM like variable declaration ex, 

```HTML
<div id="myBox"></div>
in Javascript you can use it as variable
```
```Javascript
myBox.style.color = 'red'
myBox.style.width = '400px'
```

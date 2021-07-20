# banner-js-basic
Basic Javascript for Banner

## Access HTML Dom
```Javascript
var box = document.getElementById('box')

var box = document.querySelector('#box')

var boxs = document.querySelectorAll('.box')

boxs.forEach(function (box) {
  console.log(box)
})
```

## Set style to to HTML Dom
```Javascript
// Set width = 400, height = 400, background = red
box.style.width = '400px'
box.style.height = '400px'
box.style.backgroundColor = 'red'
```
## Custom Event
```Javascript
// Create custom event
var evt = new CustomEvent('launch-rocket', {
  detail: {
    pilots: []
  }
})
window.dispatchEvent(evt)

// Listen custom event
window.addEventListener('launch-rocket', function (e) {
  console.log('Display pilot name')
  console.log(e.detail)
})
```
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

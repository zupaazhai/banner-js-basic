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
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
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

## GET data from external source
```Javascript
// Old school way
var req = new XMLHttpRequest()
req.open('GET', '/my/url', true);
req.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
  } else {
    // We reached our target server, but it returned an error

  }
}
req.send()

// Fetch API way
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

## POST data to external source
```Javascript
// Old school way
var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);

// Fetch API way
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'post'
})
.then(function (res) {
  return res.json()
})
.then(function (data) {
  console.log(data)
})
```

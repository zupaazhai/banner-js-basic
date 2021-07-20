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

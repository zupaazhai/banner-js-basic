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

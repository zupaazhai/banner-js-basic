## Cookie
### Get cookie
```Javascript
var cookies = document.cookie
```
### Get cookie and format it
```Javascript
var cookies = {}
document.cookie.split(';').forEach(cookie => {
  cookie = cookie.split('=')
  cookies[cookie[0]] = cookie[1]
})
// result will be 
{
  key1: value1, 
  key2: value2
}
```
### Set cookie
```Javascript
var newCookieName = 'foo'
var newCookieValue = 'bar'

var exdate = new Date();
exdate.setDate(exdate.getDate() + exdays);
var cookieValue = escape(newCookieValue) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
document.cookie =  newCookieName + "=" + cookieValue;
```

## Localstorage
### Get value
```Javascript
window.localStorage.getItem('item-name')
```
### Set value
```Javascript
window.localStorage.setItem('item-name', 'foo-bar-baz')
```

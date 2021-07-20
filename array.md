## Array manipulation
### .filter
```Javascript
var emojies = ['😃', '❤️', '🍿', '🚸']

var heart = emojies.filter(function (emoji) {
  return emoji == '❤️'
})

// heart = ['❤️']

```
### .map
```Javascript
var emojies = ['😃', '❤️', '🍿', '🚸']

emojies = emojies.map(function (emoji) {
  return emoji + '😇'
})

// emojies = [ "😃😇", "❤️😇", "🍿😇", "🚸😇" ]

```
### .findIndex
```Javascript
var emojies = ['😃', '❤️', '🍿', '🚸']

var index = emojies.findIndex(function (emoji) {
  return emoji == '❤️'
})

// index = 1
```
other array functions
https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/

## Array manipulation
### .filter
```Javascript
var emojies = ['π', 'β€οΈ', 'πΏ', 'πΈ']

var heart = emojies.filter(function (emoji) {
  return emoji == 'β€οΈ'
})

// heart = ['β€οΈ']

```
### .map
```Javascript
var emojies = ['π', 'β€οΈ', 'πΏ', 'πΈ']

emojies = emojies.map(function (emoji) {
  return emoji + 'π'
})

// emojies = [ "ππ", "β€οΈπ", "πΏπ", "πΈπ" ]

```
### .findIndex
```Javascript
var emojies = ['π', 'β€οΈ', 'πΏ', 'πΈ']

var index = emojies.findIndex(function (emoji) {
  return emoji == 'β€οΈ'
})

// index = 1
```
other array functions
https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/

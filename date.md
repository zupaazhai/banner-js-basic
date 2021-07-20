## Date
```Javascript
var date = new Date()

// Get timestamp
date.getTime()

// Get year
date.getFullYear()

// Get month
date.getMonth()
// value of .getMonth() will be 0, 1, 2, ..11, so we must always +1 
date.getMonth() + 1

// Get date
date.getDate()
// 1, 2, 3 ... 30

// Get hours
date.getHours()

// Get minute
date.getMinutes()

// Get seconds
date.getSeconds()
```

## Format date to Y-m-d H:i:s
```Javascript
var date = new Date()
var zeroPad = (val) => val > 9 ? `0${val}` : val

var dateFormatted = [
  date.getFullYear(),
  zeroPad(date.getMonth() + 1)
  zeroPad(date.getDate())
].join('-')

var timeFormatted = [
  date.getHours(),
  zeroPad(date.getMinutes()),
  zeroPad(date.getSeconds())
].join(':')

var dateTimeFormatted = `${dateFormatted} ${timeFormatted}`
```

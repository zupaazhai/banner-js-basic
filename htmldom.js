// Access by getElementById
var box = document.getElementById('box')

// Access by querySelector
var box = document.querySelector('#box')

// Access multiple HTML Dom by querySelectorAll
var boxs = document.querySelectorAll('.box')

boxs.forEach(function (box) {
  console.log(box)
})

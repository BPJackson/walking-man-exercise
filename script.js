


var img = document.getElementById('img');
var position = 0;
var speed = 0;

var setPosition = function () {
  if (position >=1100){
    speed = -500;
    img.style.transform = 'rotateY(180deg)';
  }

  if (position <= 0){
    speed = 500;
    img.style.transform = '';
  }
  position += speed;
  img.style.marginLeft = position + 'px';
};
  var interval = window.setInterval(setPosition, 10);



//
// function move (id,speed){
//   var img = document.getElementById('img');
//   var right = 0;
//
//     right += 2;
//     img.style.left = right + 'px';
//
//     var moveRight = setTimeout(function() {
//       move(id,speed);
//     }, 2);
// }
// move('',2);
//
// // function moveRight(id, speed) {
// //   var img = document.getElementById('img');
// //     var right = parseInt(img.style.left)||0;
// //
// //   right += speed;  // move
// //     img.style.left = right + "px";
// //
// //     var move = setInterval(function() {
// //         moveRight(id, speed);
// //     }, 50);
// //
// // }
// // moveRight('',2);
//
//
//
//
//
// // function moveRight(){
// //   var margin = img.style.marginLeft
// //   if (margin<1000){
// //     img.style.left = parseInt(img.style.left+100)+'px';
// //   }
// //
// //   }
// // }
// //
// //
// // setInterval(move(), 20);
//
// // img.addEventListener ('click', function() {
// //  move();
// //   //img.style.left = parseInt("100px");
// //
// // });




var img = document.getElementById('img');
var position = 0;
var speed = 0;

var setPosition = function () {
  if (position >=1100){
    speed = -5;
    img.style.transform = 'rotateY(180deg)';
  }

  if (position <= 0){
    speed = 5;
    img.style.transform = 'rotateX(180deg)';
  }
  position += speed;
  img.style.marginLeft = position + 'px';
};
  var interval = window.setInterval(setPosition, 10);



function moveRight(){
  var margin = img.style.marginLeft
  if (margin<1000){
    img.style.left = parseInt(img.style.left+100)+'px';
  }

  }

img.addEventListener ('click', function() {
 move();
  img.style.left = parseInt("100px");

});

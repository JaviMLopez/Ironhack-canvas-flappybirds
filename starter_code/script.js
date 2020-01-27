window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var img = new Image();
img.src = "images/bg.png"
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;

let fabby = {
  width:10,
  height:10,
  speedX:10,
  speedY:10,
  gravity:10,
  gravitySpeed:10,
  update: () =>{
    this.speedX = x;
    this.speedY= y; 
  },
  newPos: () =>{
    update();
  }
}


  }

};

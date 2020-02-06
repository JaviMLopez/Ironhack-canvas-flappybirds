window.onload = function () {
  document.getElementById("start-button").onclick = function () {
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

      move: function () {
        this.x += this.speed;
        this.x %= canvas.width;
      },

      draw: function () {
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

    // window.addEventListener("DOMContentLoaded", function () {
    //   var image = document.getElementById("fab");
    //  document.body.appendChild(canvas);

    //   canvas.width = image.width;
    //   canvas.height = image.height;

    //   var context = canvas.getContext("2d");

    //   context.drawImage(image, 0, 0);
    // });

    // let fabby = {
    //   width: 10,
    //   height: 10,
    //   speedX: 10,
    //   speedY: 10,
    //   gravity: 10,
    //   gravitySpeed: 10,
    //   update: () => {
    //     this.speedX = x;
    //     this.speedY = y;
    //   },
    //   newPos: () => {
    //     update();
    //   }
    // }

      let fabbycanvas = documnet.getElementById("canvasFab")
      let ctxFab = canvas.getContext('2d');

    const images = {
      background: "./images/bg.png",
      character: "./images/flappy.png",
      obstacleBottom: "./images/obstacle_bottom.png",
      obstacleTop: "./images/obstacle_top.png"
    };

    class Flappy {
      constructor(){
        this.x = 50;
        this.y = 50;
        this.width = 50;
        this.height = 50;
        this.img = new Image();
        this.img.src = images.character
      }

      draw(){
        this.y += 3
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }

    }

    const birdy = new Flappy();

    function draw(bird) {
      var img3 = new Image();
      img3.onload = function() { 
         ctx.drawImage(img3, birdy.x, birdy.y, 50, 50); 
      }
      img3.src = "images/falppy.png";
    }

    
    
    document.body.onkeyup = function (e) {
      if (e.keyCode == 32) {
        fabby.gravity = fabby.gravity * -1;
        console.log("flapped")

      }


    };
  }
}

for (var i = 0 ; i < document.querySelectorAll(".drum").length;i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click",function() {


          sound(this.innerHTML);
          btnan(this.innerHTML);
    });
  }


      function btnan(cls)
      {
        var actb = document.querySelector("."+cls);
          actb.classList.add("pressed");

          setTimeout(function(){
            actb.classList.remove("pressed");},100);

      }

  document.addEventListener("keypress",function(event) {
    sound(event.key);
    btnan(event.key);
  });

    function sound(key){
      switch (key) {
        case 'w':
          var crash = new Audio("sounds/crash.mp3");
            crash.play();
                break;
      }

      switch (key) {
        case 'a':
          var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
                break;
      }

      switch (key) {
        case 's':
          var snare = new Audio("sounds/snare.mp3");
            snare.play();
                break;
      }

      switch (key) {
        case 'd':
          var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
                  break;

      }

      switch (key) {
        case 'j':
          var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
                break;

      }

      switch (key) {
        case 'k':
          var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
                break;
      }

      switch (key) {
        case 'l':
          var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
                break;
      }
    }

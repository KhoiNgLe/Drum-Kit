var numberOfDrumButtons = document.querySelectorAll(".drum").length

for( var i = 0; i<numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function());

      var buttonInnerHTML = this.innterHTML

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });


document.addEventListener("keypress",function(event)){
  makeSound(event.key);

  buttonAnimation(event.key);

});
    function makeSound(key){


      switch(key){
        case "w":
        var tom1 = new Audio("C:\Users\16139\OneDrive\Desktop\Web Development\Drum Kit\sounds\tom-1.mp3");
        tom1.play();
        break;

        case "a":
        var tom2 = new Audio("C:\Users\16139\OneDrive\Desktop\Web Development\Drum Kit\sounds\tom-2.mp3");
        tom2.play();
          break;

        case "s":
        var tom3 = new Audio("C:\Users\16139\OneDrive\Desktop\Web Development\Drum Kit\sounds\tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio("C:\Users\16139\OneDrive\Desktop\Web Development\Drum Kit\sounds\tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var kickBass = new Audio("C:\Users\16139\OneDrive\Desktop\Web Development\Drum Kit\sounds\kick-bass.mp3");
        kickBass.play();
        break;

        case "k":
        var snare = new Audio("C:\Users\16139\OneDrive\Desktop\Web Development\Drum Kit\sounds\snare.mp3");
        snare.play();
        break;

        case "l":
        var tom6 = new Audio("C:\Users\16139\OneDrive\Desktop\Web Development\Drum Kit\sounds\kick-bass.mp3");
        tom6.play();
        break;

        default: console.log (buttonInnerHTML);
      }
  })

}  }

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout (functiuon(){
    activeButton.classList.remove("pressed");
  }, 100);
  })
}



window.onload = function(){

 
//REMOVE INTRO VIDEO

    var introVideo = document.getElementById('intro-video');
    introVideo.addEventListener('ended', removeVideo, false);

    function removeVideo(e) {
        if(!e) { 
          e = window.event; 
        }
        introVideo.setAttribute("class", "invisible");
    }

//PLAY GAME

		var timer = 0;
		var perc = 0;

		function updateProgress(percentage) {
		    $('#pbar_innerdiv').css("width", percentage + "%");
		    $('#pbar_innertext').text(percentage + "%");
		}

		function animateUpdate() {
		    perc++;
		    updateProgress(perc);
		    if(perc < 100) {
		        timer = setTimeout(animateUpdate, 20);
		    }
		    if (perc === 100 ){
				clearTimeout(timer);
				displayEndScreen();
			   }

		}

//DISPLAY END SCREEN

	var endScreen = document.getElementById("end-screen");

	function displayEndScreen() {
		endScreen.setAttribute("class", "visible");
	}

	$(document).ready(function() {
	    $('#instructions').click(function() {
	        clearTimeout(timer);
	        perc = 0;
	        animateUpdate();

	    });
	});

//NAV BUTTONS
    var currentPage = document.getElementsByClassName("visible-page")[0];  
    var adrianPage = document.getElementById("adrian-page");
    var hermesPage = document.getElementById("hermes-page");
    var maxPage = document.getElementById("max-page");
    var shortzPage = document.getElementById("shortz-page");
    var sullyPage = document.getElementById("sully-page");
    var homePage = document.getElementById("home-page");

    var navBtnAdrian = document.getElementById("adrian");
    navBtnAdrian.addEventListener("click", gotoPageAdrian, false);

    function gotoPageAdrian() {
      alert("go to Adrian's page");
      currentPage.setAttribute("class", "invisible-page");
      adrianPage.setAttribute("class", "visible-page"); 
    }

    var navBtnHermes = document.getElementById("hermes");
    navBtnHermes.addEventListener("click", gotoPageHermes, false);

    function gotoPageHermes() {
      currentPage.setAttribute("class", "invisible-page");
      hermesPage.setAttribute("class", "visible-page"); 
    }

    var navBtnMax = document.getElementById("max");
    navBtnMax.addEventListener("click", gotoPageMax, false);

    function gotoPageMax() {
      currentPage.setAttribute("class", "invisible-page");
      maxPage.setAttribute("class", "visible-page"); 
    }

    var navBtnShortz = document.getElementById("shortz");
    navBtnShortz.addEventListener("click", gotoPageShortz, false);

    function gotoPageShortz() {
      currentPage.setAttribute("class", "invisible-page");
      shortzPage.setAttribute("class", "visible-page"); 
    }

    var navBtnSully = document.getElementById("sully");
    navBtnSully.addEventListener("click", gotoPageSully, false);

    function gotoPageSully() {
      currentPage.setAttribute("class", "invisible-page");
      sullyPage.setAttribute("class", "visible-page"); 
    }
	


  //END GAME

   var endBtnAdrian = document.getElementById("adrian-button");
   endBtnAdrian.addEventListener('click', wrongGuess, false);

   var playAgainBtn = document.getElementById("play-again-btn");
   playAgainBtn.addEventListener('click', playAgain, false);

   var hermesBtn = document.getElementById("hermes-button");
   hermesBtn.addEventListener('click', wrongGuess, false);

   var endBtnX = document.getElementById("max-button");
   endBtnX.addEventListener('click', correctGuess, false);

   var endBtnShortz = document.getElementById("shortz-button");
   endBtnShortz.addEventListener('click', wrongGuess, false);

   var endBtnSully = document.getElementById("sully-button");
   endBtnSully.addEventListener('click', wrongGuess, false);

   var guessScreen = document.getElementById("guess-screen");
   var correctGuessScreen = document.getElementById("correct-guess");
   var wrongGuessScreen = document.getElementById("wrong-guess");


  function wrongGuess() {
   	guessScreen.setAttribute("class", "invisible");
    wrongGuessScreen.setAttribute("class", "visible");
	}

	function correctGuess() {
		guessScreen.setAttribute("class", "invisible");
    correctGuessScreen.setAttribute("class", "visible");
	}
  
  function playAgain (){
     wrongGuessScreen.setAttribute("class", "invisible");
     correctGuessScreen.setAttribute("class", "invisible");
     endScreen.setAttribute("class", "invisible");
     currentPage.setAttribute("class", "invisible-page");
     document.getElementById("pbar_outerdiv").setAttribute("class","invisible");
     homePage.setAttribute("class", "visible-page");
      
  }

  function gotoHomepage(){
      introVideo.removeAttribute("class", "invisible");   

  }

}();
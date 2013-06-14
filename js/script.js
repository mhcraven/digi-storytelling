

window.onload = function(){

//INTRO VIDEO

    var introVideo = document.getElementById('intro-video');
    introVideo.addEventListener('ended',removeVideo,false);

    function removeVideo(e) {
        if(!e) { e = window.event; 
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


   
    var navBtnShortz = document.getElementById("shortz");

    var navBtnAdrian = document.getElementById("adrian");
    navBtnShortz.addEventListener("click", gotoAdrianPage, false);

    var navBtnHermes = document.getElementById("hermes");
    navBtnShortz.addEventListener("click", gotoHermesPage, false);

    var navBtnX = document.getElementById("x");
    navBtnShortz.addEventListener("click", gotoXPage, false);

    var navBtnShortz = document.getElementById("shortz");
    navBtnShortz.addEventListener("click", gotoNewPage, false);

    var navBtnSully = document.getElementById("sully");
    navBtnShortz.addEventListener("click", gotoSullyPage, false);


    function gotoNewPage(e) {
		var adrianPage = document.getElementById("adrian-page");
    	var shortzPage = document.getElementById("hermes-page");
    	var xPage = document.getElementById("x-page");
    	var shortzPage = document.getElementById("shortz-page");
    	var sullyPage = document.getElementById("sully-page");
		
		var currentPage = document.getElementsByClassName("visible-page");		
		currentPage.setAttribute("class", "invisible-page");
		
		if(e.target === navBtnAdrian){
			adrianPage.setAttribute("class", "visible-page"); 
      	} else if (e.target === navBtnHermes){
      		hermesPage.setAttribute("class", "visible-page"); 
      		}	else if (e.target === navBtnHermes){
      				xPage.setAttribute("class", "visible-page"); 
      			}	else if (e.target === navBtnHermes){
      					shortzPage.setAttribute("class", "visible-page"); 
      				}	else if (e.target === navBtnHermes){
      						sullyPage.setAttribute("class", "visible-page"); 
      					}
    }



    var homeNavItem = document.getElementsByClassName("home-grouping");

    for (var i = 0; i < homeNavItem.length; i++) {
	homeNavItem[i].addEventListener("click", gotoNewPage, false);
	}
	

    

  //END GAME

   var endBtnAdrian = document.getElementById("adrian-button");
   endBtnAdrian.addEventListener('click', wrongGuess, false);

   var hermesBtn = document.getElementById("hermes-button");
   hermesBtn.addEventListener('click', wrongGuess, false);

   var endBtnX = document.getElementById("x-button");
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
  


}();
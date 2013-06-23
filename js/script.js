

window.onload = function(){


//AUDIO

  function playBkgrdMusic() {
    var introMusic = document.getElementById("intro-music");

    introMusic.loop = true;
    introMusic.play();
  }
  //INTRO VIDEO


  var pBar = document.getElementById("pbar_outerdiv");
  var homeNav = document.getElementById("home-nav");

  var skipVideoBtn = document.getElementById("skip-video-btn");
  skipVideoBtn.addEventListener('click', removeVideo, false);

  var introVideo = document.getElementById("intro-video");
  introVideo.addEventListener('ended', removeVideo, false);


//PLAY GAME

  function startGame() {
      playBkgrdMusic();
      skipVideoBtn.setAttribute("class", "invisible");
      pBar.setAttribute("class", "visible");
      homeNav.setAttribute("class", "visible");
      introVideo.removeEventListener('ended', removeVideo, false);
  }

  function removeVideo(e) {
        if(!e) { 
          e = window.event; 
        } 
        if ( introVideo.play ) {
            introVideo.pause(); 
          }
          introVideo.setAttribute("class", "invisible");
          startGame(); 
  }
//PROGRESS BAR
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
		        timer = setTimeout(animateUpdate, 5000);
		    }
		    if (perc === 100 ){
				clearTimeout(timer);
				displayEndScreen();
			   }
         if (perc === 25 ){
        displayChooseNowBtn();
         }
		}

    var guessNowBtn = document.getElementById("guess-now-btn");
    guessNowBtn.addEventListener("click", displayEndScreen, false);

    function displayChooseNowBtn(){
      guessNowBtn.setAttribute("class", "visible");
    }

    function reSetTimer(){
        document.getElementById("pbar_outerdiv").setAttribute("class","visible");
        document.getElementById("pbar_innertext").innerHTML = "Preparing to Download...";
        timer = 0;
        perc = 0;
        animateUpdate();
    }

//DISPLAY END SCREEN

	var endScreen = document.getElementById("end-screen");
  var guessScreen = document.getElementById("guess-screen");

	function displayEndScreen() {
		endScreen.setAttribute("class", "visible");
    guessScreen.setAttribute("class", "visible");
    playAgainBtn.setAttribute("class", "invisible");
	}

	$(document).ready(function() {
	    $('#instructions').click(function() {
	        clearTimeout(timer);
	        perc = 0;
	        animateUpdate();

	    });
	});

//NAV BUTTONS 

    var adrianPage = document.getElementById("adrian-page");
    var hermesPage = document.getElementById("hermes-page");
    var maxPage = document.getElementById("max-page");
    var shortzPage = document.getElementById("shortz-page");
    var sullyPage = document.getElementById("sully-page");
    var homePage = document.getElementById("home-page");

    var intHeader = document.getElementsByTagName("header")[0];

    var navBtnAdrian = document.getElementById("adrian");
    navBtnAdrian.addEventListener("click", gotoPageAdrian, false);

    var navBtnadrian = document.getElementById("adrian2");
    navBtnadrian.addEventListener("click", gotoPageAdrian, false);

    var theOnIconSrc = "images/folder-icon-on.png";
    var theOffIconSrc = "images/folder-icon-off.png";

    function gotoPageAdrian() {
      intHeader.setAttribute("class","visible");
      hideVisiblePage();
      adrianPage.setAttribute("class", "visible-page");
      turnOnIconOff();
      navBtnadrian.getElementsByTagName('img')[0].setAttribute("src", theOnIconSrc);
    }

    var navBtnHermes = document.getElementById("hermes");
    navBtnHermes.addEventListener("click", gotoPageHermes, false);

    var navBtnhermes = document.getElementById("hermes2");
    navBtnhermes.addEventListener("click", gotoPageHermes, false);

    function gotoPageHermes() {
      intHeader.setAttribute("class","visible");
      hideVisiblePage();
      hermesPage.setAttribute("class", "visible-page");
      turnOnIconOff();
      navBtnhermes.getElementsByTagName('img')[0].setAttribute("src", theOnIconSrc);
    }

    var navBtnMax = document.getElementById("max");
    navBtnMax.addEventListener("click", gotoPageMax, false);

    var navBtnmax = document.getElementById("max2");
    navBtnmax.addEventListener("click", gotoPageMax, false);

    function gotoPageMax() {
      hideVisiblePage();
      intHeader.setAttribute("class","visible");
      maxPage.setAttribute("class", "visible-page");
      turnOnIconOff();
      navBtnmax.getElementsByTagName('img')[0].setAttribute("src", theOnIconSrc);
    }

    var navBtnShortz = document.getElementById("shortz");
    navBtnShortz.addEventListener("click", gotoPageShortz, false);

    var navBtnshortz = document.getElementById("shortz2");
    navBtnshortz.addEventListener("click", gotoPageShortz, false);

    function gotoPageShortz() {
      hideVisiblePage();
      intHeader.setAttribute("class","visible");
      shortzPage.setAttribute("class", "visible-page");
      turnOnIconOff();
      navBtnshortz.getElementsByTagName('img')[0].setAttribute("src", theOnIconSrc);
    }

    var navBtnSully = document.getElementById("sully");
    navBtnSully.addEventListener("click", gotoPageSully, false);

    var navBtnsully = document.getElementById("sully2");
    navBtnsully.addEventListener("click", gotoPageSully, false);

    function gotoPageSully(e) {
      hideVisiblePage();
      intHeader.setAttribute("class","visible");
      sullyPage.setAttribute("class", "visible-page");
      turnOnIconOff();
      navBtnsully.getElementsByTagName('img')[0].setAttribute("src", theOnIconSrc);
    }

    function hideVisiblePage(){
      var theVisiblePages = document.getElementsByClassName('visible-page');
        for(var i = 0; i < theVisiblePages.length; i++){
            theVisiblePages[i].setAttribute("class", "invisible-page");
        }
    }

    function turnOnIconOff() {
      var theIcons = document.getElementsByTagName("img");

      for(var i = 0; i < theIcons.length; i++){
        if (theIcons[i].getAttribute("src") === theOnIconSrc){
            theIcons[i].setAttribute("src", theOffIconSrc);
        } else { 
          continue;
          }
      }
    }

  //END GAME

    var endBtnAdrian = document.getElementById("adrian-button");
    endBtnAdrian.addEventListener('click', wrongGuess, false);

    var playAgainBtn = document.getElementById("play-again-btn");
    playAgainBtn.addEventListener('click', playAgain, false);

    var endBtnHermes = document.getElementById("hermes-button");
    endBtnHermes.addEventListener('click', wrongGuess, false);

    var endBtnX = document.getElementById("max-button");
    endBtnX.addEventListener('click', correctGuess, false);

    var endBtnShortz = document.getElementById("shortz-button");
    endBtnShortz.addEventListener('click', wrongGuess, false);

    var endBtnSully = document.getElementById("sully-button");
    endBtnSully.addEventListener('click', wrongGuess, false);

    var correctGuessScreen = document.getElementById("correct-guess");
    var wrongGuessScreen = document.getElementById("wrong-guess");


  function wrongGuess( e ) {
        switch (e.target ) {

        case endBtnAdrian:
          wrongGuessScreen.innerHTML = "Sorry, you guessed incorrectly. Adrian did not steal your files. In fact, some evidence suggests that he is dead.";
          break;
        case endBtnHermes:
          wrongGuessScreen.innerHTML = "Sorry, you guessed incorrectly. Hermes did not steal your files. Although, she is closely associated with a more likely suspect.";
          break;
        case endBtnShortz:
          wrongGuessScreen.innerHTML = "Sorry, you guessed incorrectly. Shortz86 did not steal your files. However, by meddling in other people's private affairs she is likely to be the next victim.";
          break;
        case endBtnSully:
          wrongGuessScreen.innerHTML = "Sorry, you guessed incorrectly. Sully did not steal your files. But, with all his video surveillance tapes he probably has evidence that implicates the real suspect--the person who would be most affected by your expose.";
          break;
          default:
        }
   	guessScreen.setAttribute("class", "invisible");
    wrongGuessScreen.setAttribute("class", "visible");
    playAgainBtn.setAttribute("class", "visible");
	}

	function correctGuess() {
		guessScreen.setAttribute("class", "invisible");
    correctGuessScreen.setAttribute("class", "visible");
    playAgainBtn.setAttribute("class", "visible");
	}
  
  function playAgain (){
     wrongGuessScreen.setAttribute("class", "invisible");
     correctGuessScreen.setAttribute("class", "invisible");
     endScreen.setAttribute("class", "invisible");
     intHeader.setAttribute("class","invisible");
     hideVisiblePage();
     reSetTimer();
     homePage.setAttribute("class", "visible-page");
     homePage.setAttribute("style", "");
     var theInstructions = document.getElementById("instructions");
     //theInstructions.setAttribute("class", "visible");

  }

  function gotoHomepage(){
      introVideo.removeAttribute("class", "invisible");   
  }

}();
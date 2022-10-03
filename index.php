 <!DOCTYPE html>
<html>
  <head>
    <html lang="en">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>GETSCAMMED!</title>
    <link rel="icon" type="image/x-icon" href="/data/poker.ico">
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="P5/p5.js"></script>
    <script src="P5/p5.sound.js"></script>
  </head>
  <body>
    <div class="background"></div>
    <div class="script-wrapper">
      <script src="src/preload.js"></script>
      <script src="src/card.js"></script>
      <script src="src/cardsolver.js"></script>
      <script src="src/setup.js"></script>
      <script src="src/mysql.js"></script>
      <script src="src/playerProfile.js"></script>
      <script src="script.js"></script>
    </div>
    <div id="holder" style="position: relative;"> 
      
      <div id="chipsholder" class="chips">
		    <div class="pokerchip white" onclick="addChips1();"></div>
		    <div class="pokerchip red" onclick="addChips5();"></div>
		    <div class="pokerchip blue" onclick="addChips10();"></div>
		    <div class="pokerchip green" onclick="addChips25();"></div>
		    <div class="pokerchip black" onclick="addChips100();"></div>
	    </div>
    </div>
  </body>
</html>
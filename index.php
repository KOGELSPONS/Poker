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

<?php
//$servername = "rdbms.strato.de";
//$username = "dbu2034445";
//$password = "#Manderijn118";
//$dbname = "dbs8648412";

//// Create connection
//$conn = new mysqli($servername, $username, $password, $dbname);

//// Check connection
//if(mysqli_connect_errno())
//{
//  die("Connection could not be established");
//} else {
//  echo "Connected successfully";
//}
?>
    
<?php
  function pullGame(){
    
  }
  function pushGame(){
    
  }
  function pullP1(){
    
  }
  function pushP1(){
    
  }
  function pullP2(){
    
  }
  function pushP2(){
    
  }
  echo $_COOKIE["myname"];
?>

<script>
  var pullGame = <?php echo pullGame();?>
  var pushGame = <?php echo pushGame();?>
  var pullP1 = <?php echo pullP1();?>
  var pushP1 = <?php echo pushP1();?>
  var pullP2 = <?php echo pullP2();?>
  var pushP2 = <?php echo pushP2();?>
</script>

    <div class="background"></div>
    <div class="script-wrapper">
      <script src="src/preload.js"></script>
      <script src="src/card.js"></script>
      <script src="src/cardsolver.js"></script>
      <script src="src/setup.js"></script>
      <script src="src/mysql.js"></script>
      <script src="script.js"></script>
    </div>
    <div id="holder" style="position: relative;"> </div>
  </body>
</html>
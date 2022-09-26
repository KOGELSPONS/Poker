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
  function checkID(){
    $ID = $_COOKIE["ID"];
    $sql = "SELECT id FROM members WHERE id='$ID'";
    $result = mysql_query($sql);
    if(mysql_num_rows($result) >0){
      setcookie("ID", 0, time() + (86400 * 10), "/");
      echo $_COOKIE["Is Allreay here!"];
    }
  }
  function createRecord(){
    $ID = $_COOKIE["ID"];
    $Game = $_COOKIE["Game"];
    $P1 = $_COOKIE["P1"];
    $P2 = $_COOKIE["P2"];
    $sql = "INSERT INTO PokerGame (ID, Game, Player1, Player2)
    VALUES ( $ID, $Game, $P1, $P2)";
  }
  function pullGame(){
    $ID = $_COOKIE["ID"];
    $sql = "SELECT Game FROM PokerGame WHERE ID=$ID";
    $result = mysqli_query($conn, $sql);
  }
  function pushGame(){
    $ID = $_COOKIE["ID"];
    $Game = $_COOKIE["Game"];
    $sql = "UPDATE PokerGame SET Game=$Game WHERE id=$ID";
  }
  function pullP1(){
    $ID = $_COOKIE["ID"];
    $sql = "SELECT Player1 FROM PokerGame WHERE ID=$ID";
    $result = mysqli_query($conn, $sql);
  }
  function pushP1(){
    $ID = $_COOKIE["ID"];
    $P1 = $_COOKIE["P1"];
    $sql = "UPDATE PokerGame SET Player1=$P1 WHERE id=$ID";
  }
  function pullP2(){
    $ID = $_COOKIE["ID"];
    $sql = "SELECT Player2 FROM PokerGame WHERE ID=$ID";
    $result = mysqli_query($conn, $sql);
  }
  function pushP2(){
    $ID = $_COOKIE["ID"];
    $P1 = $_COOKIE["P1"];
    $sql = "UPDATE PokerGame SET Player2=$P2 WHERE id=$ID";
  }
  function test(){
    echo $_COOKIE["p1"];
  }
?>
<script type="text/javascript">
  
    function PHPcheckID(){
      var PHPID =<?php checkID();?>;
      console.log(PHPID);
    } 
    function PHPcreateRecord(){
      
    }
    function PHPpullGame(){
      
    }
    function PHPpushGame(){
      
    }
    function PHPpullP1(){
      
    }
    function PHPpushP1(){
      
    }
    function PHPpullP2(){
      
    }
    function PHPpushP2(){
      
    }
    function PHPtest(){
      var PHPtest =<?php test();?>;
      console.log(PHPtest);
    }
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
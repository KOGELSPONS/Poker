<?php
$servername = "rdbms.strato.de";
$username = "dbu2034445";
$password = "#Manderijn118";
$dbname = "dbs8648412";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if(mysqli_connect_errno())
{
  die("Connection could not be established");
} else {
  echo "Connected successfully";
}
?>

<?php
  function checkID(){
    $ID = $_COOKIE["ID"];
    $sql = "SELECT id FROM members WHERE id='$ID'";
    $result = mysql_query($sql);
    if(mysql_num_rows($result) >0){
      setcookie("ID", 0, time() + (86400 * 10), "/");
      echo $_COOKIE["1"];
    }
    else{
      echo $_COOKIE["0"];
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
  function test(){
    echo "Database: " + rand(1,200);
  }
?>
<?php
$servername = "rdbms.strato.de";
$username = "dbu2034445";
$password = "#Manderijn118";
$dbname = "dbs8648412";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection could not be established");
}

//Test ID!
$ID = $_COOKIE["ID"];
$sql = "SELECT id FROM members WHERE id='$ID'";
$result = mysql_query($sql);
if(mysql_num_rows($result) >0){
  $ID += 1;
  setcookie("ID", $ID, time() + (86400 * 10), "/");
}

$ID = $_COOKIE["ID"];
echo $ID;
$Game = $_COOKIE["game"];
echo $Game;
$P1 = $_COOKIE["p1"];
echo $P1;
$P2 = $_COOKIE["p2"];
echo $P2;

$sql = "INSERT INTO PokerGame (ID, Game, Player1, Player2)
VALUES ($ID, $Game, $P1, $P2)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

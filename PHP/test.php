<?php
$servername = "rdbms.strato.de";
$username = "dbu2034445";
$password = "#Manderijn118";
$dbname = "dbs8648412";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  
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
VALUES ($ID, 'Test', 'Test', 'Test')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
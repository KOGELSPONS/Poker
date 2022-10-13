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

$ID = $_COOKIE["ID"];
$Game = $_COOKIE["game"];
$P1 = $_COOKIE["p1"];

$sql = "INSERT INTO `PokerGame` (ID, Game, Player1)
VALUES ($ID, $Game, $P1)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
exit();
?>
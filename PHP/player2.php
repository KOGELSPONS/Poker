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
  //pullGame
    $ID = $_COOKIE["ID"];
    $sql = "SELECT Game FROM PokerGame WHERE ID=$ID";
    $result = mysqli_query($conn, $sql);
  //pullP1
    $ID = $_COOKIE["ID"];
    $sql = "SELECT Player1 FROM PokerGame WHERE ID=$ID";
    $result = mysqli_query($conn, $sql);

  //pushP2
    $ID = $_COOKIE["ID"];
    $P1 = $_COOKIE["P1"];
    $sql = "UPDATE PokerGame SET Player2=$P2 WHERE id=$ID";
?>
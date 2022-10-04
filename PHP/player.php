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
  //pushGame
    $ID = $_COOKIE["ID"];
    $Game = $_COOKIE["Game"];
    $sql = "UPDATE PokerGame SET Game=$Game WHERE id=$ID";

  //pushP1
    $ID = $_COOKIE["ID"];
    $P1 = $_COOKIE["P1"];
    $sql = "UPDATE PokerGame SET Player1=$P1 WHERE id=$ID";

  //pullP2
    $ID = $_COOKIE["ID"];
    $sql = "SELECT Player2 FROM PokerGame WHERE ID=$ID";
    $result = mysqli_query($conn, $sql);
    echo $result;
?>
<?php
$servername = "rdbms.strato.de";
$username = "dbu2034445";
$password = "#Manderijn118";
$dbname = "dbs8648412";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection could not be established");
}
//pushGame
  $ID = $_COOKIE["ID"];
  $Game = $_COOKIE["game"];
  $sql = "UPDATE PokerGame SET `Game`= $Game WHERE `ID` = $ID";
  $conn->query($sql);

//pushP1
  $P1 = $_COOKIE["p1"];
  $sql = "UPDATE `PokerGame` SET `Player1`= $P1 WHERE `ID` = $ID";
  $conn->query($sql);

//pullP2
  $sql = "SELECT `Player2` FROM `PokerGame` WHERE `ID` = $ID";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $P2 = JSON.stringify($row["Player2"]);
      setrawcookie("p2", $P2, 0, "/");
    }
  }
  $conn->close();
  exit();
?>
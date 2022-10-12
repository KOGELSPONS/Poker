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
//pushP2
  $ID = $_COOKIE["ID"];
  $P2 = $_COOKIE["p2"];
  $sql = "UPDATE `PokerGame` SET `Player2`= $P2 WHERE `ID` = $ID";
  $conn->query($sql);

//pullGame
  $sql = "SELECT `Game` FROM `PokerGame` WHERE `ID` = $ID";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
  // output data of each row
    while($row = $result->fetch_assoc()) {
      setcookie("game", $row["Game"], 0, "/");
    }
  }

//pullP1
  $sql = "SELECT `Player1` FROM `PokerGame` WHERE `ID` = $ID";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
  // output data of each row
    while($row = $result->fetch_assoc()) {
      setcookie("p1", $row["Player1"], 0, "/");
    }
  }

$conn->close();
exit();
?>
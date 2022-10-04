<?php
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
  }
?>
<?php
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
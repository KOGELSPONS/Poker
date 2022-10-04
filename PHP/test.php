<?php
//Create Record!
    $ID = $_COOKIE["ID"];
    $Game = $_COOKIE["Game"];
    $P1 = $_COOKIE["P1"];
    $P2 = $_COOKIE["P2"];
    $sql = "INSERT INTO PokerGame (ID, Game, Player1, Player2)
    VALUES ( $ID, $Game, $P1, $P2)";
?>
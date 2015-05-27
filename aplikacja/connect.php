<?php
$host = "localhost";
$user = "spaczek_finder";
$pass = "finder@";
$database = "spaczek_finder";

$link = mysql_connect($host, $user, $pass) or die ("Prak połączenia z serwerem!");
mysql_set_charser('utf8') or die ("Błąd - nie można ustawić poprawnego kodowania!");
mysql_select_db($database, $link) or die ("Nie można odszukać danych!");
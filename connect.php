<?php

$con = mysqli_connect("localhost","root","","agri rentals");
if ($con) {
    echo"connection successful";
} else {
    die(mysqli_error($con));
}
?>
<?php

include '../Modelo/clsLoguin.php';
include '../DAO/loguinDAO.php';

isset($_POST['usu']) ? $usuario = $_POST['usu'] : $usuario = "";
isset($_POST['pass']) ? $password = $_POST['pass'] : $password = "";

$loguin = new clsLoguin($usuario, $password);
$conex = new loguinDAO();

$mensaje;

if ($conex->loguear($loguin)) {
    $mensaje = true;   
} else {
    $mensaje = false;   
}

echo '[{"res" : "' . $mensaje . '"}]';
        








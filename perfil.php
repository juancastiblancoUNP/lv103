<?php
require_once 'config.php';
use Microsoft\Graph\Graph;

// Asegurar que el token está disponible
if (!isset($_SESSION['access_token'])) {
    header('Location: /login.php');
    exit;
}

$accessToken = $_SESSION['access_token'];

try {
    // 1. Inicializar el cliente de Microsoft Graph
    $graph = new Graph();
    $graph->setAccessToken($accessToken);
    
    // 2. Llamar al endpoint /me para obtener los datos del usuario
    $user = $graph->createRequest('GET', '/me?$select=displayName,mail,jobTitle,id')
        ->setReturnType(Microsoft\Graph\Model\User::class)
        ->execute();

    // 3. Mostrar los datos recuperados de Microsoft Entra
    echo "<h1>Datos de Microsoft Entra Recuperados</h1>";
    echo "<h2>¡Bienvenido, " . $user->getDisplayName() . "!</h2>";
    echo "<ul>";
    echo "<li>Correo Electrónico: " . $user->getMail() . "</li>";
    echo "<li>Puesto de Trabajo: " . $user->getJobTitle() . "</li>";
    echo "<li>ID de Objeto Entra: " . $user->getId() . "</li>";
    echo "</ul>";

} catch (Exception $e) {
    // Manejo de errores (ej. Token expirado)
    echo "Error al obtener datos de Microsoft Graph: " . $e->getMessage();
    // Podrías intentar usar el Refresh Token aquí si lo implementaste.
}

<?php
$headers = getallheaders();
$accessToken = $headers['X-MS-TOKEN-AAD-ACCESS-TOKEN'] ?? null;

if ($accessToken) {
// Asegúrate de incluir tu autoloader
require 'vendor/autoload.php';

use Microsoft\Graph\Graph;
use Microsoft\Graph\Model\User;

// ... (Código del Paso 1 para obtener $accessToken) ...

try {
    // 1. Inicializar el cliente de Microsoft Graph con el token de Azure
    $graph = new Graph();
    $graph->setAccessToken($accessToken);
    
    // 2. Ejecutar la petición al endpoint /me (para obtener los datos del usuario)
    // Usamos $select para pedir solo los campos que necesitamos (buena práctica)
    $user = $graph->createRequest('GET', '/me?$select=displayName,mail,jobTitle,id')
        ->setReturnType(User::class)
        ->execute();

    // 3. ¡Datos recuperados!
    $nombre = $user->getDisplayName();
    $email = $user->getMail();
    $objectId = $user->getId();
    
    echo "<h1>Bienvenido, $nombre!</h1>";
    echo "<p>Tu email de Entra ID es: $email</p>";

} catch (Exception $e) {
    echo "Error al conectar o recuperar datos de Microsoft Graph: " . $e->getMessage();
}

}

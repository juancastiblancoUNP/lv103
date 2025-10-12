Hola mundo
<?php
// 1. INCLUIR AUTOLOADER
// Esto hace que el SDK de Microsoft Graph (en la carpeta vendor) sea accesible.
require __DIR__ . '/vendor/autoload.php';

use Microsoft\Graph\Graph;
use Microsoft\Graph\Model\User;

// 2. OBTENER EL TOKEN DE ACCESO INYECTADO POR AZURE APP SERVICE
// Azure App Service ("Easy Auth") coloca el token de acceso de Graph en este encabezado.
$headers = getallheaders();
$accessToken = $headers['X-MS-TOKEN-AAD-ACCESS-TOKEN'] ?? null;

if (!$accessToken) {
    // Si no hay token, el usuario no está autenticado o Easy Auth falló.
    die("Error de autenticación: No se pudo obtener el token de acceso. ¿El usuario inició sesión con Entra ID?");
}

// 3. LLAMAR A MICROSOFT GRAPH
try {
    // Inicializar el cliente de Graph con el token de Azure
    $graph = new Graph();
    $graph->setAccessToken($accessToken);
    
    // Ejecutar la petición al endpoint /me para obtener el perfil
    // El $select es crucial para optimizar la petición
    $user = $graph->createRequest('GET', '/me?$select=displayName,mail,id,jobTitle')
        ->setReturnType(User::class)
        ->execute();

    // 4. MOSTRAR DATOS RECUPERADOS
    $nombre = $user->getDisplayName();
    $email = $user->getMail();
    
    echo "<h1>✅ Autenticación Exitosa. Bienvenido, " . htmlspecialchars($nombre) . "!</h1>";
    echo "<p>Tu correo de Entra ID es: <strong>" . htmlspecialchars($email) . "</strong></p>";
    echo "<p>Tu Cargo es: " . htmlspecialchars($user->getJobTitle() ?? 'No especificado') . "</p>";

} catch (Exception $e) {
    // Si hay un error, el problema casi siempre son los permisos de API.
    echo "<h1>❌ Error al recuperar datos de Microsoft Graph</h1>";
    echo "<p>Mensaje: " . $e->getMessage() . "</p>";
    echo "<p><strong>Verificación:</strong> Asegúrate de que el permiso <strong>'User.Read'</strong> esté CONCEDIDO en el panel de 'Permisos de API' de tu aplicación en Azure.</p>";
}

?>

// perfil.php (Fragmento clave para la recuperación de datos)

// 1. Inicializar el cliente de Microsoft Graph
$graph = new Graph();
$graph->setAccessToken($_SESSION['access_token']);

// 2. Ejecutar la petición
$user = $graph->createRequest('GET', '/me?$select=displayName,mail,jobTitle')
    ->setReturnType(Microsoft\Graph\Model\User::class)
    ->execute();

// 3. Los datos del usuario están ahora en el objeto $user
echo "Nombre: " . $user->getDisplayName();
echo "Correo: " . $user->getMail();

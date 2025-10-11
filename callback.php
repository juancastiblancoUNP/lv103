<?php
require_once 'config.php';
use League\OAuth2\Client\Provider\GenericProvider;

$provider = new GenericProvider([
    // ... (Misma configuración que en login.php) ...
]);

// 1. Verificar si hay un código de autorización en la URL
if (!isset($_GET['code'])) {
    die('Error de autenticación o el usuario canceló.');
}

try {
    // 2. Intercambiar el código por un Access Token
    $accessToken = $provider->getAccessToken('authorization_code', [
        'code' => $_GET['code']
    ]);

    // 3. Almacenar el Access Token de forma segura en la sesión
    $_SESSION['access_token'] = $accessToken->getToken();
    
    // Opcional: Almacenar el Refresh Token si solicitaste el scope 'offline_access'
    // $_SESSION['refresh_token'] = $accessToken->getRefreshToken();

    // 4. Redirigir a la página principal (donde se recuperan los datos)
    header('Location: /perfil.php');
    exit;

} catch (Exception $e) {
    die('Error al obtener tokens: ' . $e->getMessage());
}

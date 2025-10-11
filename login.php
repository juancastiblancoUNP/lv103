<?php
require_once 'config.php';
use League\OAuth2\Client\Provider\GenericProvider;

// 1. Crear el proveedor OIDC
$provider = new GenericProvider([
    'clientId'                => CLIENT_ID,
    'clientSecret'            => CLIENT_SECRET,
    'redirectUri'             => REDIRECT_URI,
    'urlAuthorize'            => 'https://login.microsoftonline.com/'.TENANT_ID.'/oauth2/v2.0/authorize',
    'urlAccessToken'          => 'https://login.microsoftonline.com/'.TENANT_ID.'/oauth2/v2.0/token',
    'urlResourceOwnerDetails' => '', // No se usa directamente con Graph, lo llamaremos nosotros
    'scopes'                  => GRAPH_SCOPES
]);

// 2. Generar la URL de autorización
$authorizationUrl = $provider->getAuthorizationUrl();

// 3. Redirigir al usuario
header('Location: ' . $authorizationUrl);
exit;

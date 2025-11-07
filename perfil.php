<?php

// 1. Obtener el nombre principal del cliente (que suele ser el email)
$email = $_SERVER['HTTP_X_MS_CLIENT_PRINCIPAL_NAME'];

// 2. Verificar si la variable existe y si hay un usuario autenticado
if (isset($email)) {
    echo htmlspecialchars($email);
    // 2. Obtener la cadena JSON codificada en Base64
    $encoded_json = $_SERVER['HTTP_X_MS_CLIENT_PRINCIPAL'];

    // 3. Decodificar la cadena Base64 a una cadena JSON
    $decoded_json_string = base64_decode($encoded_json);

    // 4. Decodificar la cadena JSON a un objeto o array de PHP
    $client_principal = json_decode($decoded_json_string, true);

    // 5. Buscar el nombre en las notificaciones (claims)
    $nombre_completo = "Nombre no encontrado"; 
    $claims = $client_principal['claims'] ?? []; // Acceder de forma segura

    foreach ($claims as $claim) {
        // La claim 'name' suele contener el nombre completo
        if ($claim['typ'] === 'name') {
            $nombre_completo = htmlspecialchars($claim['val']);
            break;
        }
        // Si necesita el apellido o el nombre de pila por separado, use:
        // if ($claim['typ'] === 'family_name') { ... }
        // if ($claim['typ'] === 'given_name') { ... }
    }
    
    // 6. Mostrar el resultado
    echo "|".$nombre_completo;

} else {
    // Esto podría ocurrir si la página se accede sin pasar por el flujo de autenticación de Easy Auth,
    // o si el modo de autenticación está configurado como "Permitir solicitudes anónimas".
    echo "No se encontró información de usuario autenticado.";
}

?>

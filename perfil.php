<?php

// 1. Obtener el nombre principal del cliente (que suele ser el email)
$email = $_SERVER['HTTP_X_MS_CLIENT_PRINCIPAL_NAME'];

// 2. Verificar si la variable existe y si hay un usuario autenticado
if (isset($email)) {
    echo htmlspecialchars($email);
} else {
    // Esto podría ocurrir si la página se accede sin pasar por el flujo de autenticación de Easy Auth,
    // o si el modo de autenticación está configurado como "Permitir solicitudes anónimas".
    echo "No se encontró información de usuario autenticado.";
}

?>

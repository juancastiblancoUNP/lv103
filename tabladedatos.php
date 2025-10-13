<?php
// Establecer la zona horaria a Bogotá, Colombia (GMT-5)
date_default_timezone_set('America/Bogota');
// 1. CONFIGURACIÓN DEL SERVIDOR AZURE SQL
$serverName = "lineavida103.database.windows.net,1433"; 
$databaseName = "LineaVida103";
// 2. CREDENCIALES DE AZURE ACTIVE DIRECTORY (AAD)
// ¡ADVERTENCIA! Nunca guarde credenciales sensibles directamente en el código de producción. Use variables de entorno.
$azureUsername = "juan.castiblanco@unp.gov.co"; // Debe ser su usuario AAD
$azurePassword = "Unp2025*";        // Debe ser la contraseña de su usuario AAD

// 3. DEFINICIÓN DEL DSN (Incluyendo la opción clave de AAD)
$dsn = "sqlsrv:server=$serverName; Database=$databaseName; Authentication=ActiveDirectoryPassword";

try {
    // 4. Conexión usando PDO
    $conn = new PDO(
        $dsn,
        $azureUsername, 
        $azurePassword,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION] // Asegura que se lancen excepciones en caso de error
    );
    

    // --- COMIENZO DE LA NUEVA LÓGICA DE INSERCIÓN DEL FORMULARIO ---

    // 5. RECUPERAR DATOS DEL FORMULARIO CON CONVERSIÓN DE TIPO
$fecha_actual = date('Y-m-d H:i:s');

  

    // 6. CONSULTA SQL CON MARCADORES DE POSICIÓN (?)
    $sql = "SELECT fecha_registro, nombre_articulador, email_articulador,
                tipo_de_llamada, id_llamada_carbyne, id_llamada_carbyne_consecutivo_padre, 
                telefono_llamante, grupo_al_que_pertenece,subgrupo_al_que_pertenece, els, descripcion_de_llamada, 
                ciudad, tipo_de_comunidad, Subdireccion_UnidadUNP,tipo_de_proteccion, tipo_gestion, evento, nombre_completo, 
                numero_documento,es_menor_de_edad, es_una_emergencia_real, hubo_colaboracion_de_las_fuerzas_armadas, 
                cuerpo_de_emergencia_que_colabora, caso_de_exito, estado FROM Registro_de_llamadas";

    $stmt = $conn->query($sql);
    
    // 4. Fetch the results
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "fecha_registro: " . $row['fecha_registro'] . ", nombre_articulador: " . $row['nombre_articulador'] . "\n";
    }
 

    // --- FIN DE LA NUEVA LÓGICA DE INSERCIÓN ---

} catch (PDOException $e) {
    // 5. Handle connection or query errors
    echo "Connection failed: " . $e->getMessage();
}

// 6. Close the connection
$conn = null;
?>

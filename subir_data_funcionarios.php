<?php

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
    
    echo "¡Conexión exitosa a Azure SQL con AAD!";

    // --- COMIENZO DE LA NUEVA LÓGICA DE INSERCIÓN DEL FORMULARIO ---

    // 5. RECUPERAR DATOS DEL FORMULARIO CON CONVERSIÓN DE TIPO

    // Campos NUMÉRICOS (con decimales o enteros)
    // Usamos floatval() para los campos numeric(9,2) y intval() para enteros, o null si están vacíos.
    $id_llamada_carbyne = isset($_POST['id_llamada_carbyne']) && $_POST['id_llamada_carbyne'] !== '' ? floatval($_POST['id_llamada_carbyne']) : null;
    $id_llamada_carbyne_consecutivo_padre = isset($_POST['id_llamada_carbyne_consecutivo_padre']) && $_POST['id_llamada_carbyne_consecutivo_padre'] !== '' ? floatval($_POST['id_llamada_carbyne_consecutivo_padre']) : null;
    $telefono_llamante = isset($_POST['telefono_llamante']) && $_POST['telefono_llamante'] !== '' ? floatval($_POST['telefono_llamante']) : null;
    $numero_documento = isset($_POST['numero_documento']) && $_POST['numero_documento'] !== '' ? floatval($_POST['numero_documento']) : null;

    // Campos de TEXTO (varchar/text)
    // Usamos el operador de fusión nula para obtener el valor o null si no se envió.
    $tipo_de_llamada = $_POST['tipo_de_llamada'] ?? null;
    $grupo_al_que_pertenece = $_POST['grupo_al_que_pertenece'] ?? null;
    $els = $_POST['els'] ?? null;
    $descripcion_de_llamada = $_POST['descripcion_de_llamada'] ?? null;
    $ciudad = $_POST['ciudad'] ?? null;
    $tipo_de_comunidad = $_POST['tipo_de_comunidad'] ?? null;
    $tipo_gestion = $_POST['tipo_gestion'] ?? null;
    $evento = $_POST['evento'] ?? null;
    $nombre_completo = $_POST['nombre_completo'] ?? null;
    $es_una_emergencia_real = $_POST['es_una_emergencia_real'] ?? null;
    $hubo_colaboracion_de_las_fuerzas_armadas = $_POST['hubo_colaboracion_de_las_fuerzas_armadas'] ?? null;
    $cuerpo_de_emergencia_que_colabora = $_POST['cuerpo_de_emergencia_que_colabora'] ?? null;
    $caso_de_exito = $_POST['caso_de_exito'] ?? null;

    // ... (El resto del código PHP permanece igual)


    // 6. CONSULTA SQL CON MARCADORES DE POSICIÓN (?)
    $sql = "INSERT INTO Solicitudes (
                tipo_de_llamada, id_llamada_carbyne, id_llamada_carbyne_consecutivo_padre, 
                telefono_llamante, grupo_al_que_pertenece, els, descripcion_de_llamada, 
                ciudad, tipo_de_comunidad, tipo_gestion, evento, nombre_completo, 
                numero_documento, es_una_emergencia_real, hubo_colaboracion_de_las_fuerzas_armadas, 
                cuerpo_de_emergencia_que_colabora, caso_de_exito
            )
            VALUES (
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
            )";

    // 7. ARREGLO DE PARÁMETROS (DEBEN IR EN EL MISMO ORDEN QUE LA CONSULTA)
    $params = [
        $tipo_de_llamada,
        $id_llamada_carbyne,
        $id_llamada_carbyne_consecutivo_padre,
        $telefono_llamante,
        $grupo_al_que_pertenece,
        $els,
        $descripcion_de_llamada,
        $ciudad,
        $tipo_de_comunidad,
        $tipo_gestion,
        $evento,
        $nombre_completo,
        $numero_documento,
        $es_una_emergencia_real,
        $hubo_colaboracion_de_las_fuerzas_armadas,
        $cuerpo_de_emergencia_que_colabora,
        $caso_de_exito
    ];

    // 8. PREPARAR Y EJECUTAR LA CONSULTA
    $stmt = $conn->prepare($sql);
    $stmt->execute($params);

    echo "<br>¡Inserción segura exitosa! Registro guardado en la base de datos.";  
    echo " <script>window.location("formulario_ingreso.html");</script>";

    // --- FIN DE LA NUEVA LÓGICA DE INSERCIÓN ---

} catch (PDOException $e) {
    // Si la conexión falla, se mostrará el error.
    die("<br>Fallo de conexión PDO o de inserción: " . $e->getMessage());
}

?>

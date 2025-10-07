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

    // Aquí puede continuar con sus consultas SQL...

    // ... después de la conexión exitosa (Línea 25)

// Línea 26: Consulta SQL con marcadores de posición (?)
$sql = "INSERT INTO funcionarios_linea_vida_103 
        (numero_contrato, nombre, apellido, tipo_documento, numero_documento, regional, ciudad, cad)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)"; // <- La consulta ahora está en un string

// Línea 27: Los valores se pasan por separado
$params = [
    '0034 de 2025', 
    'JUAN PABLO', 
    'CASTIBLANCO CASTELLANOS', 
    'CEDULA DE CIUDADANIA', 
    '80168543', 
    'SEDE PRINCIPAL', 
    'BOGOTA', 
    'SEDE PRINCIPAL'
];

// Prepara y ejecuta
$stmt = $conn->prepare($sql);
$stmt->execute($params);

echo "Inserción segura exitosa con PDO."; 

// ...

} catch (PDOException $e) {
    // Si la conexión falla, se mostrará el error.
    die("Fallo de conexión PDO: " . $e->getMessage());
}

?>

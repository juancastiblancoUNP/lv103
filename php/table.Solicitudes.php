<?php

/*
 * Editor server script for DB table Solicitudes
 * Created by http://editor.datatables.net/generator
 */

// DataTables PHP library and database connection
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Mjoin,
	DataTables\Editor\Options,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate,
	DataTables\Editor\ValidateOptions;

// The following statement can be removed after the first run (i.e. the database
// table has been created). It is a good idea to do this to help improve
// performance.
$db->sql( "CREATE TABLE IF NOT EXISTS `Solicitudes` (
	`id` int(10) NOT NULL auto_increment,
	`tipo_de_llamada` varchar(255),
	`id_llamada_carbyne` numeric(9,2),
	`id_llamada_carbyne_consecutivo_padre` numeric(9,2),
	`telefono_llamante` numeric(9,2),
	`grupo_al_que_pertenece` varchar(255),
	`els` varchar(255),
	`descripcion_de_llamada` text,
	`ciudad` varchar(255),
	`tipo_de_comunidad` varchar(255),
	`tipo_gestion` varchar(255),
	`evento` varchar(255),
	`nombre_completo` varchar(255),
	`numero_documento` numeric(9,2),
	`es_una_emergencia_real` varchar(255),
	`hubo_colaboracion_de_las_fuerzas_armadas` varchar(255),
	`cuerpo_de_emergencia_que_colabora` varchar(255),
	`caso_de_exito` varchar(255),
	PRIMARY KEY( `id` )
);" );

// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'Solicitudes', 'id' )
	->fields(
		Field::inst( 'tipo_de_llamada' ),
		Field::inst( 'id_llamada_carbyne' )
			->validator( Validate::notEmpty() )
			->validator( Validate::numeric() ),
		Field::inst( 'id_llamada_carbyne_consecutivo_padre' )
			->validator( Validate::numeric() ),
		Field::inst( 'telefono_llamante' )
			->validator( Validate::notEmpty() )
			->validator( Validate::minNum( 11 ) ),
		Field::inst( 'grupo_al_que_pertenece' ),
		Field::inst( 'els' ),
		Field::inst( 'descripcion_de_llamada' )
			->validator( Validate::notEmpty() ),
		Field::inst( 'ciudad' ),
		Field::inst( 'tipo_de_comunidad' ),
		Field::inst( 'tipo_gestion' ),
		Field::inst( 'evento' ),
		Field::inst( 'nombre_completo' ),
		Field::inst( 'numero_documento' )
			->validator( Validate::numeric() ),
		Field::inst( 'es_una_emergencia_real' ),
		Field::inst( 'hubo_colaboracion_de_las_fuerzas_armadas' ),
		Field::inst( 'cuerpo_de_emergencia_que_colabora' ),
		Field::inst( 'caso_de_exito' )
	)
	->process( $_POST )
	->json();

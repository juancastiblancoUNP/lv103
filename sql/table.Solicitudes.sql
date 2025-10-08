-- 
-- Editor SQL for DB table Solicitudes
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE IF NOT EXISTS `Solicitudes` (
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
);
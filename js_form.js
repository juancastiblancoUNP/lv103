
    // LISTADO COMPLETO DE DEPARTAMENTOS Y MUNICIPIOS DE COLOMBIA (Estructura simplificada)
    const datosColombia = {
        "N/A": ["N/A"],
        "AMAZONAS": [
    // Municipios (Las únicas dos entidades con este estatus en el departamento):
    "Leticia",          // Capital
    "Puerto Nariño",
    // Áreas No Municipalizadas (ANM), a menudo listadas como "municipios" para fines geográficos:
    "El Encanto",
    "La Chorrera",
    "La Pedrera",
    "La Victoria",
    "Mirití-Paraná",
    "Puerto Alegría",
    "Puerto Arica",
    "Puerto Santander",
    "Tarapacá"
],
    "ANTIOQUIA": [
    "Medellín", "Abejorral", "Abriaquí", "Alejandría", "Amagá",
    "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí",
    "Santa Fe de Antioquia", "Anzá", "Apartadó", "Arboletes", "Argelia",
    "Armenia", "Barbosa", "Bello", "Belmira", "Betania",
    "Betulia", "Ciudad Bolívar", "Briceño", "Buriticá", "Cáceres",
    "Caicedo", "Caldas", "Campamento", "Cañasgordas", "Caracolí",
    "Caramanta", "Carepa", "El Carmen de Viboral", "Carolina del Príncipe", "Caucasia",
    "Chigorodó", "Cisneros", "Cocorná", "Concepción", "Concordia",
    "Copacabana", "Dabeiba", "Donmatías", "Ebéjico", "El Bagre",
    "Entrerríos", "Envigado", "Fredonia", "Frontino", "Giraldo",
    "Girardota", "Gómez Plata", "Granada", "Guadalupe", "Guarne",
    "Guatapé", "Heliconia", "Hispania", "Itagüí", "Ituango",
    "Jardín", "Jericó", "La Ceja", "La Estrella", "La Pintada",
    "La Unión", "Liborina", "Maceo", "Marinilla", "Montebello",
    "Murindó", "Mutatá", "Nariño", "Necoclí", "Nechí",
    "Olaya", "El Peñol", "Peque", "Pueblorrico", "Puerto Berrío",
    "Puerto Nare", "Puerto Triunfo", "Remedios", "El Retiro", "Rionegro",
    "Sabanalarga", "Sabaneta", "Salgar", "San Andrés de Cuerquia", "San Carlos",
    "San Francisco", "San Jerónimo", "San José de la Montaña", "San Juan de Urabá", "San Luis",
    "San Pedro de los Milagros", "San Pedro de Urabá", "San Rafael", "San Roque", "San Vicente Ferrer",
    "Santo Domingo", "Segovia", "Sonsón", "Sopetrán", "Támesis",
    "Tarazá", "Tarso", "Titiribí", "Toledo", "Turbo",
    "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí",
    "Venecia", "Vigía del Fuerte", "Yalí", "Yarumal", "Yolombó",
    "Yondó", "Zaragoza"
],
    "ARAUCA": [
        "Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondón",
        "Saravena", "Tame"
        // No hay municipios faltantes en la lista (son 7 en total).
    ],
    "ATLÁNTICO": [
    "Barranquilla", // Capital y Distrito Especial
    "Baranoa",
    "Campo de la Cruz",
    "Candelaria",
    "Galapa",
    "Juan de Acosta",
    "Luruaco",
    "Malambo",
    "Manatí",
    "Palmar de Varela",
    "Piojó",
    "Polonuevo",
    "Ponedera",
    "Puerto Colombia",
    "Repelón",
    "Sabanagrande",
    "Sabanalarga",
    "Santa Lucía",
    "Santo Tomás",
    "Soledad",
    "Suan",
    "Tubará",
    "Usiacurí"
],
    "BOGOTA": [
        "Bogotá D.C."
    ],
    "BOLÍVAR": [
    "Cartagena de Indias", // Capital y Distrito
    "Achí",
    "Altos del Rosario",
    "Arenal",
    "Arjona",
    "Arroyohondo",
    "Barranco de Loba",
    "Calamar",
    "Cantagallo",
    "Cicuco",
    "Clemencia",
    "Córdoba",
    "El Carmen de Bolívar",
    "El Guamo",
    "El Peñón",
    "Hatillo de Loba",
    "Magangué",
    "Mahates",
    "Margarita",
    "María La Baja",
    "Montecristo",
    "Morales",
    "Norosí",
    "Pinillos",
    "Regidor",
    "Río Viejo",
    "San Cristóbal",
    "San Estanislao",
    "San Fernando",
    "San Jacinto",
    "San Jacinto del Cauca",
    "San Juan Nepomuceno",
    "San Martín de Loba",
    "San Pablo",
    "Santa Catalina",
    "Santa Cruz de Mompox",
    "Santa Rosa",
    "Santa Rosa del Sur",
    "Simití",
    "Soplaviento",
    "Talaigua Nuevo",
    "Tiquisio",
    "Turbaco",
    "Turbaná",
    "Villanueva",
    "Zambrano"
],
    "BOYACÁ": [
    "Almeida",
    "Aquitania",
    "Arcabuco",
    "Belén",
    "Berbeo",
    "Betéitiva",
    "Boavita",
    "Boyacá",
    "Briceño",
    "Buenavista",
    "Busbanzá",
    "Caldas",
    "Campohermoso",
    "Cantagallo",
    "Cerinza",
    "Chinavita",
    "Chiquinquirá",
    "Chiscas",
    "Chita",
    "Chitaraque",
    "Chivatá",
    "Chivor",
    "Chíquiza",
    "Ciénega",
    "Cómbita",
    "Coper",
    "Corrales",
    "Covarachía",
    "Cubará",
    "Cucaita",
    "Cuítiva",
    "Duitama",
    "El Cocuy",
    "El Espino",
    "Firavitoba",
    "Floresta",
    "Gachantivá",
    "Gámeza",
    "Garagoa",
    "Guacamayas",
    "Guateque",
    "Guayatá",
    "Güicán de la Sierra",
    "Iza",
    "Jenesano",
    "Jericó",
    "La Capilla",
    "La Uvita",
    "La Victoria",
    "Labranzagrande",
    "Macanal",
    "Maripí",
    "Miraflores",
    "Mongua",
    "Monguí",
    "Moniquirá",
    "Motavita",
    "Muzo",
    "Nobsa",
    "Nuevo Colón",
    "Oicatá",
    "Otanche",
    "Pachavita",
    "Páez",
    "Paipa",
    "Pajarito",
    "Panqueba",
    "Pauna",
    "Paya",
    "Paz de Río",
    "Pesca",
    "Pisba",
    "Puerto Boyacá",
    "Quípama",
    "Ramiriquí",
    "Ráquira",
    "Rondón",
    "Saboyá",
    "Sáchica",
    "Samacá",
    "San Eduardo",
    "San José de Pare",
    "San Luis de Gaceno",
    "San Mateo",
    "San Miguel de Sema",
    "San Pablo de Borbur",
    "Santa María",
    "Santa Sofía",
    "Santana",
    "Sativanorte",
    "Sativasur",
    "Siachoque",
    "Soatá",
    "Socotá",
    "Socha",
    "Sogamoso",
    "Somondoco",
    "Sora",
    "Soracá",
    "Sotaquirá",
    "Susacón",
    "Sutatenza",
    "Sutamarchán",
    "Tasco",
    "Tenza",
    "Tibaná",
    "Tibasosa",
    "Tinjacá",
    "Tipacoque",
    "Toca",
    "Tópaga",
    "Tota",
    "Tunja", // Capital
    "Tununguá",
    "Turmequé",
    "Tuta",
    "Tutazá",
    "Úmbita",
    "Ventaquemada",
    "Villa de Leyva",
    "Viracachá",
    "Zetaquira"
],
    "CALDAS": [
    "Manizales", // Capital
    "Aguadas",
    "Anserma",
    "Aranzazu",
    "Belalcázar",
    "Chinchiná",
    "Filadelfia",
    "La Dorada",
    "La Merced",
    "Manzanares",
    "Marmato",
    "Marquetalia",
    "Marulanda",
    "Neira",
    "Norcasia",
    "Pácora",
    "Palestina",
    "Pensilvania",
    "Riosucio",
    "Risaralda",
    "Salamina",
    "Samaná",
    "San José",
    "Supía",
    "Victoria",
    "Villamaría",
    "Viterbo"
],
    "CAQUETÁ": [
    "Florencia", // Capital
    "Albania",
    "Belén de los Andaquíes",
    "Cartagena del Chairá",
    "Curillo",
    "El Doncello",
    "El Paujil",
    "La Montañita",
    "Milán",
    "Morelia",
    "Puerto Rico",
    "San José del Fragua",
    "San Vicente del Caguán",
    "Solano",
    "Solita",
    "Valparaíso"
],
    "CASANARE": [
    "Yopal", // Capital
    "Aguazul",
    "Chámeza",
    "Hato Corozal",
    "La Salina",
    "Maní",
    "Monterrey",
    "Nunchía",
    "Orocué",
    "Paz de Ariporo",
    "Pore",
    "Recetor",
    "Sabanalarga",
    "Sácama",
    "San Luis de Palenque",
    "Támara",
    "Tauramena",
    "Trinidad",
    "Villanueva"
],
    "CAUCA": [
    "Popayán", // Capital
    "Almaguer",
    "Argelia",
    "Balboa",
    "Bolívar",
    "Buenos Aires",
    "Cajibío",
    "Caldono",
    "Caloto",
    "Corinto",
    "El Tambo",
    "Florencia",
    "Guachené",
    "Guapi",
    "Inzá",
    "Jambaló",
    "La Sierra",
    "La Vega",
    "López de Micay",
    "Mercaderes",
    "Miranda",
    "Morales",
    "Padilla",
    "Páez",
    "Patía",
    "Piamonte",
    "Piendamó",
    "Puerto Tejada",
    "Puracé",
    "Rosas",
    "San Sebastián",
    "Santa Rosa",
    "Santander de Quilichao",
    "Silvia",
    "Sotará",
    "Suárez",
    "Sucre",
    "Timbío",
    "Timbiquí",
    "Toribío",
    "Totoró",
    "Villa Rica"
],
    "CESAR": [
    "Valledupar", // Capital
    "Aguachica",
    "Agustín Codazzi",
    "Astrea",
    "Becerril",
    "Bosconia",
    "Chimichagua",
    "Chiriguaná",
    "Curumaní",
    "El Copey",
    "El Paso",
    "Gamarra",
    "González",
    "La Gloria",
    "La Jagua de Ibirico",
    "La Paz",
    "Manaure Balcón del Cesar",
    "Pailitas",
    "Pelaya",
    "Pueblo Bello",
    "Río de Oro",
    "San Alberto",
    "San Diego",
    "San Martín",
    "Tamalameque"
],
    "CHOCÓ": [
    "Quibdó", // Capital
    "Acandí",
    "Alto Baudó",
    "Atrato",
    "Bagadó",
    "Bahía Solano",
    "Bajo Baudó",
    "Bojayá",
    "Carmen del Darién",
    "Cértegui",
    "Condoto",
    "El Cantón de San Pablo",
    "El Carmen de Atrato",
    "El Litoral de San Juan",
    "Istmina",
    "Juradó",
    "Lloró",
    "Medio Atrato",
    "Medio Baudó",
    "Medio San Juan",
    "Nóvita",
    "Nuevo Belén de Bajirá", // Municipio de creación reciente
    "Nuquí",
    "Río Iró",
    "Río Quito",
    "Riosucio",
    "San José del Palmar",
    "Sipí",
    "Tadó",
    "Unguía",
    "Unión Panamericana"
],
    "CÓRDOBA": [
    "Montería", // Capital
    "Ayapel",
    "Buenavista",
    "Canalete",
    "Cereté",
    "Chimá",
    "Chinú",
    "Ciénaga de Oro",
    "Cotorra",
    "La Apartada",
    "Los Córdobas",
    "Momil",
    "Montelíbano",
    "Moñitos",
    "Planeta Rica",
    "Pueblo Nuevo",
    "Puerto Escondido",
    "Puerto Libertador",
    "Purísima",
    "Sahagún",
    "San Andrés de Sotavento",
    "San Antero",
    "San Bernardo del Viento",
    "San Carlos",
    "San José de Uré",
    "San Pelayo",
    "Santa Cruz de Lorica",
    "Tierralta",
    "Tuchín",
    "Valencia"
],
    "CUNDINAMARCA": [
    // Capitales de Provincia y Municipios grandes ya incluidos:
    "Fusagasugá", "Girardot", "Soacha", "Chía", "Cajicá",
    "Facatativá", "Zipaquirá",
    // Municipios agregados, incluyendo Cáqueza y Chipaque:
    "Agua de Dios", "Albán", "Anapoima", "Anolaima", "Apulo",
    "Arbeláez", "Beltrán", "Bituima", "Bojacá", "Cabrera",
    "**Cáqueza**", "Carmen de Carupa", "Chaguaní", "**Chipaque**", "Choachí",
    "Chocontá", "Cogua", "Cota", "Cucunubá", "El Colegio",
    "El Peñón", "El Rosal", "Fómeque", "Fosca", "Fúquene",
    "Gachalá", "Gachancipá", "Gachetá", "Gama", "Guachetá",
    "Guaduas", "Guasca", "Guataquí", "Guatavita", "Guayabal de Síquima",
    "Guayabetal", "Gutiérrez", "Jerusalén", "Junín", "La Calera",
    "La Mesa", "La Palma", "La Peña", "La Vega", "Lenguazaque",
    "Machetá", "Madrid", "Manta", "Medina", "Melgar", // Melgar se comparte con Tolima
    "Nariño", "Nemocón", "Nilo", "Nimaima", "Nocaima",
    "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca",
    "Puerto Salgar", "Pulí", "Quebradanegra", "Quetame", "Quipile",
    "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco",
    "San Juan de Rioseco", "Sasaima", "Sesquilé", "Sibaté", "Silvania",
    "Simijaca", "Sopó", "Subachoque", "Supatá", "Susa",
    "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo",
    "Tibacuy", "Tibirita", "Tocaima", "Tocancipá", "Topaipí",
    "Ubalá", "Ubaque", "Une", "Útica", "Vianí",
    "Villagómez", "Villapinzón", "Villeta", "Viotá", "Yacopí",
    "Zipacón"
],
    "GUAINÍA": [
        "Inírida", "Barranco Minas", "Cacahual", "Mapiripana", "San Felipe",
        // Agregados (Áreas no municipalizadas):
        "La Guadalupe", "Morichal Nuevo", "Pana Pana", "Puerto Colombia" 
        // Nota: Guainía solo tiene 2 municipios y 6 áreas no municipalizadas.
    ],
    "GUAVIARE": [
        "San José del Guaviare", "Calamar", "El Retorno", "Miraflores"
        // No hay municipios faltantes en la lista (son 4 en total).
    ],
    "HUILA": [
    "Neiva",
    "Acevedo",
    "Agrado",
    "Aipe",
    "Algeciras",
    "Altamira",
    "Baraya",
    "Campoalegre",
    "Colombia",
    "Elías",
    "Garzón",
    "Gigante",
    "Guadalupe",
    "Hobo",
    "Íquira",
    "Isnos",
    "La Argentina",
    "La Plata",
    "Nátaga",
    "Oporapa",
    "Paicol",
    "Palermo",
    "Palestina",
    "Pital",
    "Pitalito",
    "Rivera",
    "Saladoblanco",
    "San Agustín",
    "Santa María",
    "Suaza",
    "Tarqui",
    "Tello",
    "Teruel",
    "Tesalia",
    "Timaná",
    "Villavieja",
    "Yaguará"
],
    "LA GUAJIRA": [
    // Los 6 municipios originales:
    "Riohacha", "Maicao", "Uribia", "Albania", "Fonseca",
    "San Juan del Cesar",
    // Los 9 municipios agregados para completar el departamento:
    "Barrancas", "Dibulla", "Distracción", "El Molino", "Hatonuevo",
    "La Jagua del Pilar", "Manaure", "Urumita", "Villanueva"
],
    "MAGDALENA": [
    // Capital
    "Santa Marta",
    // Municipios (ordenados alfabéticamente para facilitar la revisión):
    "Algarrobo",
    "Aracataca",
    "Ariguaní (El Difícil)",
    "Cerro de San Antonio",
    "Chibolo",
    "Ciénaga",
    "Concordia",
    "El Banco",
    "El Piñón",
    "El Retén",
    "Fundación",
    "Guamal",
    "Nueva Granada",
    "Pedraza",
    "Pijiño del Carmen",
    "Pivijay",
    "Plato",
    "Puebloviejo",
    "Remolino",
    "Sabanas de San Ángel",
    "Salamina",
    "San Sebastián de Buenavista",
    "San Zenón",
    "Santa Ana",
    "Santa Bárbara de Pinto",
    "Sitionuevo",
    "Tenerife",
    "Zapayán",
    "Zona Bananera"
],
    "META": [
    // Municipios que estaban:
    "Villavicencio", "Acacías", "Granada", "Puerto Gaitán", "Restrepo",
    "San Martín", "Cubarral",
    // Municipios agregados para completar el departamento:
    "Barranca de Upía", "Cabuyaro", "Castilla la Nueva", "El Castillo", "El Dorado",
    "Fuente de Oro", "La Macarena", "La Uribe", "Lejanías", "Mapiripán",
    "Mesetas", "Puerto Concordia", "Puerto Lleras", "Puerto López", "Puerto Rico",
    "San Carlos de Guaroa", "San Juan de Arama", "San Juanito", "Vistahermosa"
],
   "NARIÑO": [
    "Pasto",
    "Albán (San José)",
    "Aldana",
    "Ancuyá",
    "Arboleda (Berruecos)",
    "Barbacoas",
    "Belén",
    "Buesaco",
    "Chachagüí",
    "Colón (Génova)",
    "Consacá",
    "Contadero",
    "Córdoba",
    "Cuaspud (Carlosama)",
    "Cumbal",
    "Cumbitara",
    "El Charco",
    "El Peñol",
    "El Rosario",
    "El Tablón de Gómez",
    "El Tambo",
    "Francisco Pizarro (Salahonda)",
    "Funes",
    "Guachucal",
    "Guaitarilla",
    "Gualmatán",
    "Iles",
    "Imués",
    "Ipiales",
    "La Cruz",
    "La Florida",
    "La Llanada",
    "La Tola",
    "La Unión",
    "Leiva",
    "Linares",
    "Los Andes",
    "Magüí Payán",
    "Mallama",
    "Mosquera",
    "Nariño",
    "Olaya Herrera",
    "Ospina",
    "Policarpa",
    "Potosí",
    "Providencia",
    "Puerres",
    "Pupiales",
    "Ricaurte",
    "Roberto Payán (San José de las Lagunas)",
    "Samaniego",
    "San Bernardo",
    "San Lorenzo",
    "San Pablo",
    "San Pedro de Cartago",
    "Sandoná",
    "Santa Bárbara (Iscuandé)",
    "Santacruz",
    "Sapuyes",
    "Taminango",
    "Tangua",
    "Tumaco (San Andrés de Tumaco)",
    "Túquerres",
    "Yacuanquer"
],
    "NORTE DE SANTANDER": [
    "Cúcuta",
    "Ábrego",
    "Arboledas",
    "Bochalema",
    "Bucarasica",
    "Cáchira",
    "Cácota",
    "Chinácota",
    "Chitagá",
    "Convención",
    "Cucutilla",
    "Durania",
    "El Carmen",
    "El Tarra",
    "El Zulia",
    "Gramalote",
    "Hacarí",
    "Herrán",
    "La Esperanza",
    "La Playa de Belén",
    "Labateca",
    "Los Patios",
    "Lourdes",
    "Mutiscua",
    "Ocaña",
    "Pamplona",
    "Pamplonita",
    "Puerto Santander",
    "Ragonvalia",
    "Salazar de Las Palmas",
    "San Calixto",
    "San Cayetano",
    "Santiago",
    "Santo Domingo de Silos",
    "Sardinata",
    "Teorama",
    "Tibú",
    "Toledo",
    "Villa Caro",
    "Villa del Rosario"
],
    "PUTUMAYO": [
    "Mocoa",
    "Colón",
    "Orito",
    "Puerto Asís",
    "Puerto Caicedo",
    "Puerto Guzmán",
    "Puerto Leguízamo",
    "San Francisco",
    "San Miguel",
    "Santiago",
    "Sibundoy",
    "Valle del Guamuez",
    "Villagarzón"
],
    "QUINDIO": [
    "Armenia",
    "Buenavista",
    "Calarcá",
    "Circasia",
    "Córdoba",
    "Filandia",
    "Génova",
    "La Tebaida",
    "Montenegro",
    "Pijao",
    "Quimbaya",
    "Salento"
],
    "RISARALDA": [
        "Pereira", "Dosquebradas", "La Virginia", "Santa Rosa de Cabal", "Marsella",
        // Agregados (solo los 14 faltantes):
        "Apía", "Balboa", "Belén de Umbría", "Guática", "Mistrató",
        "Pueblo Rico", "Quinchía", "Santuario", "Santuario", "Santuario",
        "Santuario", "Santuario", "Santuario", "Santuario" // Nota: Hay 14 municipios.
    ],
    "SAN ANDRÉS Y PROVIDENCIA": [
        "San Andrés", "Providencia"
        // No hay municipios faltantes en la lista (son 2 en total).
    ],
    "SANTANDER": [
    "Bucaramanga",
    "Aguada",
    "Albania",
    "Aratoca",
    "Barbosa",
    "Barichara",
    "Barrancabermeja",
    "Betulia",
    "Bolívar",
    "Cabrera",
    "California",
    "Capitanejo",
    "Carcasí",
    "Cepitá",
    "Cerrito",
    "Charalá",
    "Charta",
    "Chima",
    "Chipatá",
    "Cimitarra",
    "Concepción",
    "Confines",
    "Contratación",
    "Coromoro",
    "Curití",
    "El Carmen de Chucurí",
    "El Guacamayo",
    "El Peñón",
    "El Playón",
    "Encino",
    "Enciso",
    "Florián",
    "Floridablanca",
    "Galán",
    "Gámbita",
    "Girón",
    "Guaca",
    "Guadalupe",
    "Guapotá",
    "Guavatá",
    "Güepsa",
    "Hato",
    "Jesús María",
    "Jordán",
    "La Belleza",
    "Landázuri",
    "La Paz",
    "Lebrija",
    "Los Santos",
    "Macaravita",
    "Málaga",
    "Matanza",
    "Mogotes",
    "Molagavita",
    "Ocamonte",
    "Oiba",
    "Onzaga",
    "Palmar",
    "Palmas del Socorro",
    "Páramo",
    "Piedecuesta",
    "Pinchote",
    "Puente Nacional",
    "Puerto Parra",
    "Puerto Wilches",
    "Rionegro",
    "Sabana de Torres",
    "San Andrés",
    "San Benito",
    "San Gil",
    "San Joaquín",
    "San José de Miranda",
    "San Miguel",
    "San Vicente de Chucurí",
    "Santa Bárbara",
    "Santa Helena del Opón",
    "Simacota",
    "Socorro",
    "Suaita",
    "Sucre",
    "Suratá",
    "Tona",
    "Valle de San José",
    "Vélez",
    "Vetas",
    "Villanueva",
    "Zapatoca"
],
    "SUCRE": [
    "Sincelejo",
    "Buenavista",
    "Caimito",
    "Chalán",
    "Colosó",
    "Corozal",
    "Coveñas",
    "El Roble",
    "Galeras",
    "Guaranda",
    "La Unión",
    "Los Palmitos",
    "Majagual",
    "Morroa",
    "Ovejas",
    "Palmito",
    "Sampués",
    "San Benito Abad",
    "San Juan de Betulia",
    "San Marcos",
    "San Onofre",
    "San Pedro",
    "Santiago de Tolú",
    "Sincé",
    "Sucre",
    "Tolúviejo"
],
    "TOLIMA": [
    "Ibagué",
    "Alpujarra",
    "Alvarado",
    "Ambalema",
    "Anzoátegui",
    "Armero (Guayabal)",
    "Ataco",
    "Cajamarca",
    "Carmen de Apicalá",
    "Casabianca",
    "Chaparral",
    "Coello",
    "Coyaima",
    "Cunday",
    "Dolores",
    "El Espinal",
    "Falan",
    "Flandes",
    "Fresno",
    "Guamo",
    "Herveo",
    "Honda",
    "Icononzo",
    "Lérida",
    "Líbano",
    "Mariquita",
    "Melgar",
    "Murillo",
    "Natagaima",
    "Ortega",
    "Palocabildo",
    "Piedras",
    "Planadas",
    "Prado",
    "Purificación",
    "Rioblanco",
    "Roncesvalles",
    "Rovira",
    "Saldaña",
    "San Antonio",
    "San Luis",
    "Santa Isabel",
    "Suárez",
    "Valle de San Juan",
    "Venadillo",
    "Villahermosa",
    "Villarrica"
],
    "VALLE DEL CAUCA": [
    "Cali",
    "Alcalá",
    "Andalucía",
    "Ansermanuevo",
    "Argelia",
    "Bolívar",
    "Buenaventura",
    "Buga (Guadalajara de Buga)",
    "Bugalagrande",
    "Caicedonia",
    "Calima (El Darién)",
    "Candelaria",
    "Cartago",
    "Dagua",
    "El Águila",
    "El Cairo",
    "El Cerrito",
    "El Dovio",
    "Florida",
    "Ginebra",
    "Guacarí",
    "Jamundí",
    "La Cumbre",
    "La Unión",
    "La Victoria",
    "Obando",
    "Palmira",
    "Pradera",
    "Restrepo",
    "Riofrío",
    "Roldanillo",
    "San Pedro",
    "Sevilla",
    "Toro",
    "Trujillo",
    "Tuluá",
    "Ulloa",
    "Versalles",
    "Vijes",
    "Yotoco",
    "Yumbo",
    "Zarzal"
],
    "VAUPÉS": [
        "Mitú", "Carurú", "Taraira",
        // Agregados (Áreas no municipalizadas):
        "Papunaua", "Yavaraté", "Pacoa"
        // Nota: Vaupés solo tiene 3 municipios y 3 áreas no municipalizadas.
    ],
    "VICHADA": [
        "Puerto Carreño", "Cumaribo", "La Primavera", "Santa Rosalía"
        // No hay municipios faltantes en la lista (son 4 en total).
    ]
        // NOTA: La lista ha sido acortada. En producción, se incluirían los más de 1100 municipios.
    };

    const selectDepartamento = document.getElementById('selectDepartamento');
    const selectMunicipio = document.getElementById('selectMunicipio');

    // 1. FUNCIÓN PARA CARGAR DEPARTAMENTOS AL INICIO
    function cargarDepartamentos() {
        // Recorrer las claves (nombres de los departamentos) del objeto datosColombia
        for (const departamento in datosColombia) {
            const option = document.createElement('option');
            option.value = departamento; // El valor que se enviará es el nombre del departamento
            option.textContent = departamento;
            selectDepartamento.appendChild(option);
        }
    }

    // 2. FUNCIÓN PARA FILTRAR MUNICIPIOS
    function filtrarMunicipios() {
        const departamentoSeleccionado = selectDepartamento.value;

        // Limpiar municipios anteriores
        selectMunicipio.innerHTML = '<option value="" disabled selected>Seleccione Ciudad / Municipio</option>';
        
        // Habilitar o deshabilitar el selector de municipios
        if (departamentoSeleccionado) {
            selectMunicipio.disabled = false;
            // Obtener la lista de municipios del departamento seleccionado
            const municipios = datosColombia[departamentoSeleccionado];

            // Añadir las nuevas opciones
            municipios.forEach(municipio => {
                const option = document.createElement('option');
                option.value = municipio; // El valor que se enviará es el nombre del municipio
                option.textContent = municipio;
                selectMunicipio.appendChild(option);
            });
        } else {
            selectMunicipio.disabled = true;
            selectMunicipio.innerHTML = '<option value="" disabled selected>Primero seleccione un departamento</option>';
        }
    }

    // EVENTO: Ejecutar filtrarMunicipios cada vez que el departamento cambie
    selectDepartamento.addEventListener('change', filtrarMunicipios);

    // INICIO: Cargar los departamentos al cargar la página
    cargarDepartamentos();

$(document).ready(function(){
  //script que envia los datos del formulario de cosechas
  $("#boton_subir").click(function(){
    $.ajax({
        url: 'subir_data_funcionarios.php',
        type: 'post',
        data: $('form#formsubida').serialize(),
        success: function(data) { 
            if(data=="ok"){
                              document.getElementById('respuesta').style.display='block';
                  $('#respuesta').html("<div class='w3-center w3-text-grey'><i class='fa fa-check w3-text-green w3-xxxlarge'></i><br>Clave cambiada satisfactoriamente<br>Actualizando datos...</div>");
                setTimeout(function(){ $("#respuesta").fadeOut(500); }, 1000);
location.reload();
            }else{
                              document.getElementById('respuesta').style.display='block';
                  $('#respuesta').html("<div class='w3-center w3-text-grey'><i class='fa fa-close w3-text-red w3-xxxlarge'></i><br>No se cambio la clave<br>Por favor verifique sus datos"+data+"</div>");
                setTimeout(function(){ $("#respuesta").fadeOut(3500); }, 4000);
            }
        }
      });
    });
  });
    
$(document).ready(function(){
    $.ajax({
        url: 'perfil.php',
        type: 'post',
        data: "ok",
        success: function(data) { 
            var datasplit=data.split("|");
             $('#email_login').val(datasplit[0]);
             $('#nombre_login').val(datasplit[1]);
             $('#nombre_login_ini').html(datasplit[1]);
        }
      });
  });

        // Función de normalización para asegurar la clave (quita tildes, puntos, comas, usa guiones bajos)
        function normalizarCadenaValue(str) {
            return str.toLowerCase()
                      .normalize("NFD") // Descompone caracteres con tildes
                      .replace(/[\u0300-\u036f]/g, "") // Elimina las tildes
                      .replace(/[.,;:]/g, "") // Quita puntos, comas, dos puntos
                      .replace(/\s+/g, '_') // Reemplaza espacios por guiones bajos
                      .replace(/'/g, "") // Quita comillas simples
                      .trim(); // Quita espacios/guiones bajos al inicio/final
        }

        // Mapeo de la relación con claves normalizadas (puntos -> guion bajo)
        const datosRelacionados = {
            "no_pertenece_a_ningun_grupo": ["N/A"],
            "contratista_publico": ["Contratista Público"],
            "1_dirigentes_o_activistas_de_grupos_politicos_de_oposicion": [
                "1.1. Dirigente de Grupo Político.", "1.2. Miembro de Grupo Político."
            ],
            "2_dirigentes_representantes_o_activistas_de_organizaciones_defensoras_de_derechos_humanos_y_de_paz_de_victimas_civicas_comunales_campesinas_o_sociales": [
                "2.1. Dirigente y/o representante de Organización defensora de derechos humanos y de paz.", 
                "2.2. Dirigente y/o representante Organización de Víctimas.", 
                "2.3. Dirigente y/o representante Organización Cívica.", 
                "2.4. Dirigente y/o representante Organización Comunal.", 
                "2.5. Dirigente y/o representante Organización Campesina.", 
                "2.6. Dirigente y/o representante Organización Social."
            ],
            "3_dirigentes_o_activistas_sindicales": [
                "3.1. Dirigente Sindical.", "3.2. Activista Sindical."
            ],
            "4_dirigentes_representantes_o_activistas_de_organizaciones_gremiales": [
                "4.1. Dirigente y/o representante de Organización Gremial.", "4.2. Activista de Organización Gremial."
            ],
            "5_dirigentes_representantes_o_miembros_de_grupos_etnicos": [
                "5.1. Dirigente y/o representante de comunidad afro.", "5.2. Miembro de comunidad afro.", 
                "5.3. Dirigente y/o representante de comunidad Indígena.", "5.4. Miembro de comunidad Indígena.",
                "5.5. Dirigente y/o representante de comunidad Gitana (Rom).", "5.6. Miembro de comunidad Gitana (Rom).", 
                "5.7. Dirigente y/o representante de Comunidad Palenquera.", "5.8. Miembro de Comunidad Palenquera.", 
                "5.9. Dirigente y/o representante de Comunidad Raizal.", "5.10. Miembro de Comunidad Raizal."
            ],
            "6_miembros_de_mision_medica": [
                "6.1. Miembros de misión médica."
            ],
            "7_testigos_de_casos_de_violaciones_de_ddhh_y_dih": [
                "7.1. Testigo o declarante de violaciones de DDHH y DIH."
            ],
            "8_periodistas_y_comunicadores_sociales": [
                "8.1. Periodista y comunicador social."
            ],
            "9_victimas_de_violaciones_a_los_ddhh_e_infracciones_al_dih_incluyendo_dirigentes_lideres_y_reclamantes_de_tierras": [
                "9.1. Víctima de violaciones a los derechos humanos e infracción al DIH (incluyendo dirigentes).", 
                "9.2. Persona en condición de desplazamiento.", 
                "9.3. Persona objeto de restitución de tierras.", 
                "9.4. Dirigente, representante y líder de población desplazada.", 
                "9.5. Dirigente, representante y líder reclamante de tierras."
            ],
            "10_servidores_publicos_que_tengan_o_hayan_tenido_bajo_su_responsabilidad_la_direccion_coordinacion_o_ejecucion_de_politicas_de_ddhh_proteccion_o_justicia_transicional": [
                "10.1. Dirigente de Grupo Político.", "10.2. Miembro de Grupo Político."
            ],
            "11_ex_servidores_publicos_que_hayan_tenido_bajo_su_responsabilidad_el_diseño_coordinacion_o_ejecucion_de_politicas_de_proteccion": [
                "11.1. Ex servidor público que haya sido jefe de seguridad o quien haya tenido bajo su responsabilidad la dirección, coordinación o ejecución de políticas de protección de derechos humanos.", 
                "11.2. Ex defensor de DDHH."
            ],
            "12_dirigentes_del_movimiento_19_de_abril_m_19_la_corriente_de_renovacion_socialista_el_ejercito_popular_de_liberacion_epl_entre_otros": [
                "12.1. Dirigente CRS.", "12.2. Dirigente EPL.", "12.3. Dirigente FARC.", "12.4. Dirigente MAQL.", 
                "12.5. Dirigente del Frente Francisco Garnica de la Coordinadora Guerrillera Simón Bolívar.", 
                "12.6. Dirigente MIR CGSB.", "12.7. Dirigente de la Unión Popular del Pueblo para el Pueblo.", 
                "12.8. Dirigente Milicias independientes del valle de aburra.", "12.9. Dirigente Bloque Magdalena Medio del EPL."
            ],
            "13_apoderados_o_profesionales_forenses_que_participen_en_procesos_judiciales_o_disciplinarios_por_violaciones_a_ddhh": [
                "13.1. Apoderado que participe en procesos judiciales o disciplinarios por violaciones a DDHH.", 
                "13.2. Profesional forense que participe en procesos judiciales o disciplinarios por violaciones a DDHH."
            ],
            "14_docentes_de_acuerdo_a_la_definicion_de_la_ley_1857_de_2017": [
                "14.1. Docentes."
            ],
            "15_servidores_publicos_con_excepcion_de_aquellos_mencionados_en_el_numeral_10": [
                "15.1. Otro Servidor Público.", "15.2. Ministro.", "15.3. Juez.", "15.4. Diputado.", 
                "15.5. Concejal.", "15.6. Personero.", "15.7. Alcalde.", 
                "15.8. Servidor público que interviene en los procesos administrativos y judiciales de protección o justicia transicional."
            ],
            "16_desmovilizados_en_proceso_de_reintegracion": [
                "16.1. Desmovilizado en proceso de reintegración.", 
                "16.2. Integrante del M-19, en atención a Ley 4375 de 2005 (Ley de Justicia y Paz).", 
                "16.3. Protección Especial de personas de las FARC, en atención al Acuerdo de Paz de 2016.", 
                "16.4. Integrante del M-19, sin proceso de reintegración."
            ],
            "17_la_unidad_nacional_de_proteccion_unp_en_el_ejercicio_de_sus_funciones": [
                "17.1. Servidores públicos en ejercicio de funciones de la UNP que por sus funciones han recibido amenazas de carácter grave y urgente."
            ],
            "18_nucleo_familiar_hace_referencia_al_conyuge_o_compañero_a_permanente_a_los_hijos_o_al_padre_o_madre_de_manera_excepcional_del_solicitante_o_protegido_del_programa_especial_de_proteccion": [
                "18.1. Hijo (a) de manera excepcional del solicitante o protegido del Programa Especial de Protección.", 
                "18.2. Padre o madre de manera excepcional del solicitante o protegido del Programa Especial de Protección."
            ],
            "19_programa_especial_de_proteccion_integral_para_dirigentes_miembros_y_sobrevivientes_de_la_union_patriotica_up_y_del_partido_comunista_colombiano_pcc": [
                "19.1. Dirigente de la Unión Patriótica 'UP'.", "19.2. Miembro de la Unión Patriótica 'UP'.", 
                "19.3. Sobreviviente de la Unión Patriótica 'UP'.", "19.4. Dirigente del Partido Comunista Colombiano 'PCC'.", 
                "19.5. Miembro del Partido Comunista Colombiano 'PCC'.", "19.6. Sobreviviente del Partido Comunista Colombiano 'PCC'."
            ]
        };

        function actualizarDetalle() {
            const categoriaSelect = document.getElementById('grupo_al_que_pertenece');
            const detalleSelect = document.getElementById('subgrupo_al_que_pertenece');
            // La clave de coincidencia es la cadena normalizada del 'value'
            const categoriaSeleccionada = categoriaSelect.value;

            // 1. Limpiar opciones anteriores
            detalleSelect.innerHTML = '<option value="">-- Seleccione un Detalle --</option>';

            if (categoriaSeleccionada) {
                // 2. Buscar detalles en el mapa usando la clave normalizada
                const detalles = datosRelacionados[categoriaSeleccionada];

                if (detalles) {
                    detalles.forEach(detalle => {
                        const newOption = document.createElement('option');
                        
                        // Normalizamos el valor de la opción secundaria también
                        const valorNormalizado = normalizarCadenaValue(detalle);
                        
                        // El VALUE es la cadena normalizada; el TEXTCONTENT es el texto completo
                        newOption.value = valorNormalizado; 
                        newOption.textContent = detalle;
                        
                        detalleSelect.appendChild(newOption);
                    });
                    // 3. Habilitar el select
                    detalleSelect.disabled = false;
                } else {
                    detalleSelect.disabled = true;
                }
            } else {
                detalleSelect.disabled = true;
            }
        }

        // 1. Definición de los datos
        const datosRelacionados_gestion = {
            "SOLICITUD DE INFORMACION": [
                "CAPACITACION LINEA VIDA 103",
            "ENCUESTA DE SATISFACCION",
            "GENERAL PROCESOS",
            "LLAMADA ABANDONADA",
            "LLAMADA ABUSIVA",
            "LLAMADA CLARO",
            "LLAMADA DE BROMA",
            "LLAMADA DE PRUEBA",
            "LLAMADA MOVISTAR",
            "LLAMADA NO CORRESPONDIENTE A LA LINEA DE VIDA 103",
            "LLAMADA SIN RESPUESTA",
            "LLAMADA TIGO",
            "LLAMADA VIRGIN",
            "LLAMADA WOM",
            "REPORTE DE DESPLAZAMIENTO",
            "REPORTE EN CAD",
            "REPORTE PUNTOS VIDA",
            "RIÑAS"
            ],
            "EMERGENCIA": [
                "ACCIDENTE",
            "ACOSO SEXUAL",
            "ALTERACION DEL ORDEN PUBLICO",
            "AMENAZAS",
            "ATAQUE DE ANIMALES",
            "ATENTADO",
            "CONSUMO DE ESTUPEFACIENTES",
            "CORTO CIRCUITO O RIESGO ELECTRICO",
            "DESASTRE NATURAL",
            "EMERGENCIA MEDICA",
            "EMERGENCIA SICOLOGICA",
            "FALLA MECANICA",
            "FAUNA Y FLORA",
            "GRUPOS ARMADOS",
            "HURTO",
            "HURTO VEHICULAR",
            "INCENDIO",
            "INTENTO DE HURTO",
            "MALTRATO ANIMAL",
            "MANIFESTACIONES",
            "MATERIALES PELIGROSOS",
            "PERSONA DESAPARECIDA",
            "PERSONA FALLECIDA",
            "PUESTO DE CONTROL",
            "SECUESTRO",
            "SITUACIONES SOSPECHOSAS O DE PELIGRO",
            "SOLICITUD DE RESCATE",
            "SUICIDIO",
            "VANDALISMO",
            "VIOLENCIA DE GENERO",
            "VIOLENCIA INTRAFAMILIAR"
            ].sort()
        };

        // 2. Función que se ejecuta al cambiar la primera lista
        function actualizarEventos() {
            const tipoGestionSelect = document.getElementById('tipo_gestion');
            const eventoSelect = document.getElementById('evento');
            
            // Obtener el valor seleccionado en la primera lista
            const tipoSeleccionado = tipoGestionSelect.value;
            
            // Limpiar opciones anteriores del segundo select
            eventoSelect.innerHTML = '<option value="" disabled selected>-- Elija un Evento --</option>';
            
            if (tipoSeleccionado) {
                // Habilitar el segundo select y obtener las opciones correctas
                eventoSelect.disabled = false;
                const eventos = datosRelacionados_gestion[tipoSeleccionado];

                // Crear y agregar las nuevas opciones
                eventos.forEach(evento => {
                    const newOption = document.createElement('option');
                    newOption.value = evento;
                    newOption.textContent = evento;
                    eventoSelect.appendChild(newOption);
                });
            } else {
                // Si no se selecciona nada, deshabilitar el segundo select
                eventoSelect.disabled = true;
                eventoSelect.innerHTML = '<option value="" disabled selected>Seleccione un Tipo de Gestión primero</option>';
            }
        }
 
    // Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

function funcion_subdireccion(valor){
    // Obtener la colección de elementos con la clase "ver_subdirecciones"
    var clasesubdireccion = document.getElementsByClassName("ver_subdirecciones");
    
    // Determinar el estilo de display
    var nuevoDisplay = (valor === "COMUNIDAD UNP") ? "block" : "none";

    // 1. Iterar sobre la colección para aplicar el estilo a CADA elemento
    for (var i = 0; i < clasesubdireccion.length; i++) {
        clasesubdireccion[i].style.display = nuevoDisplay;
    }

    // 2. Limpiar los otros campos (el .reset() parece ser para <select> o <form>)
    document.getElementById("subdireccion_unidadUNP").selectedIndex = 1;
    document.getElementById("tipo_de_proteccion").selectedIndex = 1; 
    
    // NOTA: Si '.reset()' no funciona, usa '.value = ""' para limpiar campos de formulario. 
    // Si eran formularios completos, puedes usar document.getElementById("ID_DEL_FORMULARIO").reset();

}

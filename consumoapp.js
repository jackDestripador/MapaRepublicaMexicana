//==========================================================================
/* Solicitud AJAX para cargar el archivo JSON localmente
AJAX, es acrónimo de Asynchronous JavaScript And XML (JavaScript asíncrono y XML),
----------------------------------------------------------------------------
Consumir el json desde una cdn o un link
(async () => {
  const topology = await fetch(
    "https://code.highcharts.com/mapdata/countries/mx/mx-all.topo.json"
  ).then((response) => response.json());
  -------------------------------------------------------------------------*/

//Consumir el .json localmente de manera asíncrona

(async () => {
  // Cargar el archivo JSON localmente
  const response = await fetch("./highchart.json");
  const topology = await response.json();

  // Prepare demo data. The data is joined to map using value of 'hc-key'
  // property by default. See API docs for 'joinBy' for more info on linking
  // data and map.
  const data = [
    //{ "hc-key": "mx-3622", value: 100, num_inst: 0 },
    {
      "hc-key": "mx-bc",
      value: 0,
      num_inst: 3,
      direccion:
        "Calzada Cetys, No.1800. Plaza Cataviña. Local 04. Col. Rivera, C.P. 21240. Mexicali, Baja California.",
      num: "55 59 98 20 00 Ext. 51200 y 51201",
      MAPS: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3359.1942007226035!2d-115.4153688!3d32.6542759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d771a54216a04b%3A0xefa67f32aff12403!2sPlaza%20Catavi%C3%B1a!5e0!3m2!1ses-419!2smx!4v1710865432353!5m2!1ses-419!2smx" width="300" height="150" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion1:
        "Aeropuerto, No. 1900, Centro Comercial Otay, locales G28, G29 y G30. C.P. 22425. Tijuana, Baja California.",
      num1: "664 655 25 97. Ext: 20323",
      MAPS1:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6727.753318645203!2d-116.951759!3d32.529441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947360f91edbf%3A0xbaee339d94a247ff!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral!5e0!3m2!1ses-419!2smx!4v1710865627931!5m2!1ses-419!2smx" width="300" height="150" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion2:
        "Calle Segunda, No. 664, Col. Zona Centro, C.P. 22800. Ensenada, Baja California.",
      num2: "646 978 0759. Ext: 20321.",
      MAPS2:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6777.167821584191!2d-116.625477!3d31.863536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d89351c39a6b35%3A0x5e25f7772af45a2b!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral!5e0!3m2!1ses-419!2smx!4v1710865663722!5m2!1ses-419!2smx" width="300" height="150" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, // Baja California
    {
      "hc-key": "mx-bs",
      value: 0,
      num_inst: 1,
      direccion:
        "Calle Profesor Marcelo Rubio Ruíz, No. 1640, Plaza Nautilus, locales 1 y 2. Col. Zona Centro. C. P. 23000, La Paz, Baja California Sur.",
      num: "612 689 32 57. Ext: 20188.",
      MAPS: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1820.259352442224!2d-110.306615!3d24.153535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86afd3bd813193dd%3A0xc48815eb2950d2c6!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral%20Oficina%20Estatal%20La%20Paz!5e0!3m2!1ses-419!2smx!4v1710865861272!5m2!1ses-419!2smx" width="300" height="150" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, // Baja California Sur
    {
      "hc-key": "mx-so",
      value: 0,
      num_inst: 1,
      direccion:
        "Av. Aquiles Serdán, No. 160, Palacio Federal, Col. Centro, C.P. 83000, Hermosillo, Sonora.",
      num: "5588748643. Ext:20043.",
      MAPS: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d871.738874358659!2d-110.952901!3d29.07746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85455f1ef8e7%3A0x1f156aabbca56076!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral!5e0!3m2!1ses-419!2smx!4v1710866379809!5m2!1ses-419!2smx" width="300" height="150" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, // Sonora },
    {
      "hc-key": "mx-cl",
      value: 100,
      num_inst: 1,
      direccion:
        "Av. Constitución, No. 2080, Plaza Norte, Edificio A, locales 4 y 5, Col. Residencial Hacienda El Volantín, C.P. 28017. Colima, Colima.",
      num: "312 323 56 20. Ext: 20319.",
      MAPS: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1883.1913702030938!2d-103.708672!3d19.265715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255bd5921fad45%3A0xd24a9b11df3a40cd!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral!5e0!3m2!1ses-419!2smx!4v1710866781378!5m2!1ses-419!2smx" width="300" height="150" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, // Colima},
    {
      "hc-key": "mx-na",
      value: 100,
      num_inst: 1,
      direccion:
        "Av. Insurgentes poniente, No. 866, Col. La Huerta, C.P. 63070, Tepic, Nayarit.",
      num: "3116890686 Ext: 20186",
      MAPS: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3711.7474496437444!2d-104.914157!3d21.51761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427379a956879e7%3A0x84bf9d962707e6f0!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral!5e0!3m2!1ses-419!2smx!4v1710866865194!5m2!1ses-419!2smx" width="300" height="150" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, // Nayarit },
    {
      "hc-key": "mx-cm",
      value: 0,
      num_inst: 2,
      direccion:
        "AV. MARÍA LA VALLE URBINAS S/N, MZ J, LT 4, BARRIO DE SAN FRANCISCO, C.P. 24010",
      num: "9818168893",
      MAPS: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7505.322794123892!2d-90.527859!3d19.854275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f83334c2415b89%3A0x372b73d60f245109!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral%2C%20Oficina%20de%20Apoyo%20Estatal%20de%20Campeche%20sede%20Campeche!5e0!3m2!1ses!2smx!4v1710867162998!5m2!1ses!2smx" width="300" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion1:
        "Av. Isla de Tris, No. 57-G, Altum Center, segundo piso, locales 203, 204 y 205. Col. El Tambor, C.P. 24100, Ciudad del Carmen, Campeche. ",
      num1: "9386881222 Ext: 20260 y 9386881336 Ext:20261",
      MAPS1:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.173650795805!2d-91.789753!3d18.656202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f10782f83d9951%3A0x525207ee29412539!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral%2C%20Oficina%20Estatal%20de%20Campeche%20sede%20Ciudad%20del%20Carmen!5e0!3m2!1ses!2smx!4v1710867395846!5m2!1ses!2smx" width="300" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, // Campeche },
    {
      "hc-key": "mx-qr",
      value: 0,
      num_inst: 2,
      direccion:
        "Av. Palenque S/N, Supermanzana 35, manzana 01, lote 01, Plaza Hollywood, local 57, C.P. 77500. Cancún, Quintana Roo.",
      num: "998 689 37 72 y 55 88 74 86 00. Ext: 20325.",
      MAPS: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7441.81651509776!2d-86.834095!3d21.156049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b0c28670f61%3A0x32886c6eab0524c9!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral!5e0!3m2!1ses-419!2smx!4v1710867607968!5m2!1ses-419!2smx" width="300" height="150" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion1:
        "Av. Insurgentes. No. 210. Entre Benito Juárez y Corozal. Col. David Gustavo Gutiérrez Ruiz. C.P. 77013. Chetumal, Quintana Roo.",
      num1: "983 832 12 68, 983 832 98 01 y 983 832 93  EXT. 80201 y 80202",
      MAPS1:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.795812189644!2d-88.29516735894914!3d18.5199094181713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba49cb1249469%3A0xd7c3539b40df4da5!2sDelegaci%C3%B3n%20Federal%20Del%20Trabajo%20En%20Quintana%20Roo!5e0!3m2!1ses-419!2smx!4v1710867703077!5m2!1ses-419!2smx" width="300" height="150" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, // Quintana Roo},
    {
      "hc-key": "mx-mx",
      value: 100,
      num_inst: 2,
      direccion:
        "Vía Alfredo del Mazo, No. 1028, Col. Santa Cruz Atzcapotzaltongo, C.P. 50030. Toluca de Lerdo, Estado de México.",
      num: "7226894711 Ext: 20185",
      MAPS: "",
      direccion1:
        "San Andrés Atoto, No. 1, Col. San Esteban, C.P. 53550. Naucalpan de Juárez, Estado de México.",
      num1: "5591569970. Ext:20490. y 5591569971. Ext:20491.",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //estado de mexico
    {
      "hc-key": "mx-mo",
      value: 100,
      num_inst: 1,
      direccion:
        " Av. Plan de Ayala, No. 825. Plaza Corporativa Arcos Cristal, locales 1 y 2, Col. Teopanzolco, C.P. 62350. Cuernavaca, Morelos.",
      num: "7776890993 y 55 88 74 86 00. Ext: 20193.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //morelos
    {
      "hc-key": "mx-df",
      value: 100,
      num_inst: 1,
      direccion:
        "Dr. José María Vértiz, No. 211, Col. Doctores, C.P. 06720, Alcaldía Cuauhtémoc, Ciudad de México.",
      num: "55 59 98 20 00",
      MAPS: '<br><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6777.167821584191!2d-116.625477!3d31.863536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d89351c39a6b35%3A0x5e25f7772af45a2b!2sCentro%20Federal%20de%20Conciliaci%C3%B3n%20y%20Registro%20Laboral!5e0!3m2!1ses-419!2smx!4v1710863673502!5m2!1ses-419!2smx" width="350" height="200" style=" border-radius: 10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //ciudad de méxico
    {
      "hc-key": "mx-qt",
      value: 100,
      num_inst: 1,
      direccion:
        "Calzada de los Arcos, No. 278-C, segundo piso, Col. Loma Dorada, C.P. 76060, Querétaro, Querétaro.",
      num: "4422354055. Ext:20730  y 4422354056. Ext:20731.",
      MAPS: "",
      direccion1: " ",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //queretaro
    {
      "hc-key": "mx-tb",
      value: 0,
      num_inst: 1,
      direccion:
        "Calle del Abogado (antes Calle Cuatro), No. 121, Piso 3, Col. José Narciso Rovirosa, C.P. 86050, Villahermosa, Tabasco.",
      num: "9936887997 Ext:20830. y 9936889477. Ext:20831.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //tabasco
    {
      "hc-key": "mx-cs",
      value: 0,
      num_inst: 1,
      direccion:
        "Periférico Poniente Norte, No. 275, Col. Francisco Sabinal, C.P. 29020, Tuxtla Gutiérrez, Chiapas.",
      num: "55 88 74 86 00 y 961 689 06 57. Ext: 20194.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //chiapas
    {
      "hc-key": "mx-nl",
      value: 0,
      num_inst: 1,
      direccion:
        "Av. Francisco I. Madero, No. 1085, Col. Zona Centro, C.P. 64000, Monterrey, Nuevo León.",
      num: "5588748626 Ext:20026 y 5588748627 Ext:20027.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //nuevo leon
    {
      "hc-key": "mx-si",
      value: 0,
      num_inst: 2,
      direccion:
        "Benito Juárez. S/N. Esq. con Ángel Flores. Palacio Federal, segundo piso. Col. Centro. C.P. 82000. Mazatlán, Sinaloa.",
      num: "669 981 34 03 y 669 981 05 45. Ext:  82210 y 82211. ",
      MAPS: "",
      direccion1:
        "Av. Independencia, No. 833, Local B-4, Col. Centro, C.P. 80000, Culiacán, Sinaloa.",
      num1: "5588748641. Ext:20041.",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //sinaloa
    {
      "hc-key": "mx-ch",
      value: 0,
      num_inst: 3,
      direccion:
        "Av. Juárez, No. 3115, Plaza Victoria, locales 26 y 27, Col. Centro, C.P. 31000, Chihuahua, Chihuahua.",
      num: "5588748631. Ext:20031.",
      MAPS: "",
      direccion1:
        "Calle Escalerillas, No.14, tercer piso, Col. Barrio el Conejo, C.P. 33850. Hidalgo del Parral, Chihuahua.",
      num1: "6275258984",
      MAPS1: "",
      direccion2:
        "Boulevard Manuel Gómez Morín, No. 7045, Fraccionamiento de Santa Rita, local 12, piso 3, Col. Virreyes, C.P. 32459, Ciudad Juárez, Chihuahua.",
      num2: "5588748638 y 5588748696.",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //chihuahua
    {
      "hc-key": "mx-ve",
      value: 0,
      num_inst: 5,
      direccion:
        "Av. Coatzacoalcos Aeropuerto. No. 212 , Centro Comercial El Dorado. Local SA-2B. Col. Las Gaviotas. C.P. 96536. Coatzacoalcos, Veracruz.",
      num: "2296890492 y 55 88 74 86 00. Ext: 20192",
      MAPS: "",
      direccion1:
        "Av. Salvador Díaz Mirón, No. 2880, planta baja, Col. Electricistas, C.P. 91916. Veracruz, Veracruz.",
      num1: "229 937 28 85 y 55 88 74 86 00. Ext: 20327.",
      MAPS1: "",
      direccion2:
        "Sur 33, No. 700, Plaza Faro, locales 35- 36, Col. Centro, C.P. 94300, Orizaba, Veracruz.",
      num2: "2726890393. Ext:20920 y 2726890394 Ext:20921",
      MAPS2: "",
      direccion3:
        "Boulevard Adolfo Ruiz Cortines, No.506, Col. Obras Sociales, C.P. 93240. Poza Rica de Hidalgo, Veracruz.",
      num3: "782 689 11 37 y 55 88 74 86 00. Ext: 20195.",
      MAPS3: "",
      direccion4:
        "Carretera Federal Xalapa-Enríquez, km. 4+300, No. 553, Col. Las Trancas, C.P. 91194. Xalapa-Enríquez, Veracruz.",
      num4: "228 689 23 58 y 55 88 74 86 00. Ext: 20326. ",
      MAPS4: "",
    }, //veracruz
    {
      "hc-key": "mx-za",
      value: 0,
      num_inst: 1,
      direccion:
        "Av. Francisco García Salinas, No. 315, local 6, Col. Las Arboledas, C.P. 98608. Guadalupe, Zacatecas.",
      num: "4926890397 Ext: 20187.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //zacatecas
    {
      "hc-key": "mx-ag",
      value: 100,
      num_inst: 1,
      direccion:
        "Av. Adolfo López Mateos, No. 1001, Plaza Kristal. PH 1, Torre A, Col. San Luis, C.P. 20250. Aguascalientes, Aguascalientes.",
      num: "4499180107. Ext: 20318.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //aguascalientes
    {
      "hc-key": "mx-ja",
      value: 100,
      num_inst: 1,
      direccion:
        "Av. Chapultepec Norte, No. 15, Torre Chapultepec, piso 8, Col. Ladrón de Guevara, C.P. 44600, Guadalajara, Jalisco.",
      num: "5588748624. Ext:20024. y 5588748625. Ext:20025.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //jalisco
    {
      "hc-key": "mx-mi",
      value: 100,
      num_inst: 1,
      direccion:
        "Boulevard García de León. No. 1035, Torre Boulevard locales 10 y 14. Col. Chapultepec Sur, C.P. 58260. Morelia, Michoacán.",
      num: "5588748623. Ext:20023",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //michoacan
    {
      "hc-key": "mx-oa",
      value: 0,
      num_inst: 1,
      direccion:
        "Calle Violetas, No. 401, Palza Pabellón Violetas, local 35, Col. Reforma, C.P. 68050. Oaxaca de Juárez, Oaxaca.",
      num: "9516890982 y 55 88 74 86 00. Ext: 20191.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //oaxaca
    {
      "hc-key": "mx-pu",
      value: 100,
      num_inst: 1,
      direccion:
        "Av. Arroyo de Xonaca, No. 1006, Plaza Paseo San Francisco, Local-207, Col. Barrio del Alto, C.P. 72290. Puebla de Zaragoza, Puebla.",
      num: "2226894979. Ext:20710. y 2226894980. Ext:20711.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //puebla
    {
      "hc-key": "mx-gr",
      value: 0,
      num_inst: 1,
      direccion:
        "Av. Costera Miguel Alemán, No. 820, Condominio Twin Towers Bay, Planta Baja, Col. Hornos, C.P. 39355. Acapulco, Guerrero.",
      num: "7446890367 y  55 88 74 86 00. Ext: 20190.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //guerrero
    {
      "hc-key": "mx-tl",
      value: 100,
      num_inst: 1,
      direccion:
        "Prolongación Porfirio Díaz, No. 41, Plaza Comercial Prisma, locales 1b a 5b, Col. San Isidro, C.P. 90000. Tlaxcala, Tlaxcala.",
      num: "2466890377. Ext:20890. y 2466890378. Ext:20891.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //tlaxcala
    {
      "hc-key": "mx-tm",
      value: 0,
      num_inst: 3,
      direccion:
        "Juan B. Tijerina, S/N, esquina con Calle. José María Morelos, Palacio Federal, Col. Centro, C. P. 87000, Ciudad Victoria, Tamaulipas.",
      num: "5588748691. Ext:20091.",
      MAPS: "",
      direccion1:
        "Isauro Alfaro, No. 104, Palacio Federal, Col. Centro, C. P. 89000, Tampico, Tamaulipas.",
      num1: "8336890689 Ext: 20189.",
      MAPS1: "",
      direccion2:
        "Libramiento Sur, No. 4000, locales 56-I y 57-I, Col. Lomas Real Jarachina, C. P. 88730. Reynosa, Tamaulipas.",
      num2: "5588748646. Ext:20046.",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //tamaulipas
    {
      "hc-key": "mx-co",
      value: 0,
      num_inst: 2,
      direccion:
        "Calle Jesús Manuel Acuña (antes Aguascalientes), No. 336, Col. República Poniente, C.P. 25265, Saltillo, Coahuila.",
      num: "8446888550 y Ext: 20322.",
      MAPS: "",
      direccion1:
        "Avenida Juárez, S/N, Palacio Federal, Col. Centro, C.P. 27000, Torreón, Coahuila.  ",
      num1: "5588748666 Ext:20066.",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //coahuila
    {
      "hc-key": "mx-yu",
      value: 0,
      num_inst: 1,
      direccion:
        " Paseo Montejo, No. 444-A, Plaza Centro del Paseo, locales A2, A3, A4 y A5, Col. Centro, C.P. 97000. Mérida, Yucatán.",
      num: "5588748663. Ext:20063. ",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //yucatan
    {
      "hc-key": "mx-dg",
      value: 0,
      num_inst: 1,
      direccion:
        "Elorreaga, No. 262, Col. Centro, C.P. 34000, Durango, Durango.",
      num: "61086 88 30 05 Ext:20440.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //durango
    {
      "hc-key": "mx-gj",
      value: 100,
      num_inst: 1,
      direccion:
        "Boulevard Juan Alonso de Torres, No. 1315, Plaza Galerías Las Torres, E-27 y E-28, Col. San José del Consuelo, C.P. 37200. León, Guanajuato.",
      num: "4776894133. Ext:20500. y 4776894134. Ext:20501.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //guanajuato
    {
      "hc-key": "mx-sl",
      value: 100,
      num_inst: 1,
      direccion:
        "Julián de Los Reyes No. 346, Col. Centro, C.P. 78000, San Luis Potosí, San Luis Potosí.",
      num: "4446885109 Ext: 20320.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //san luis potosi
    {
      "hc-key": "mx-hg",
      value: 100,
      num_inst: 1,
      direccion:
        "Cerrada de Everardo Márquez, No. 115, tercer piso, Col. Ex Hacienda de Coscotitlán, C.P. 42080, Pachuca de Soto, Hidalgo.",
      num: "7716881486. Ext:20560 y 7716881456. Ext:20561.",
      MAPS: "",
      direccion1: "",
      num1: "",
      MAPS1: "",
      direccion2: "",
      num2: "",
      MAPS2: "",
      direccion3: "",
      num3: "",
      MAPS3: "",
      direccion4: "",
      num4: "",
      MAPS4: "",
    }, //hidalgo
  ];

  // Create the chart
  Highcharts.mapChart("container", {
    chart: {
      map: topology,
    },

    title: {
      text: "Highcharts Maps basic demo",
    },

    subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/mx/mx-all.topo.json">Mexico</a>',
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      min: 0,
      max: 100,
      type: "linear",
      minColor: "#D4C19C", // Amarillo
      maxColor: "#B38E5D", // Ocre
    },

    tooltip: {
      formatter: function () {
        return (
          "<b> ✅ " +
          this.point.name +
          "</b><br>" +
          "Numero de instituciones: " +
          this.point.num_inst
        );
      },
    },

    series: [
      {
        name: "Estado:",
        data: data,
        states: {
          hover: {
            color: "#13322B",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            color: "black",
            textOutline: "none",
          },
        },
      },
    ],
  });

  // Cambiar el color del estado "mx-df" a verde
  Highcharts.each(
    Highcharts.charts[Highcharts.charts.length - 1].series[0].points,
    function (point) {
      if (point.properties["hc-key"] === "mx-df") {
        point.update({ color: "#bb0808" });
      }
    }
  );
  // Después de crear el gráfico, asignar el evento clic a los puntos del mapa
  // Después de crear el gráfico, asignar el evento clic a los puntos del mapa
  Highcharts.each(
    Highcharts.charts[Highcharts.charts.length - 1].series[0].points,
    function (point) {
      point.graphic.on("click", function () {
        // Obtener el nombre del estado clicked
        var estado = point.properties.name; // Acceder al nombre desde properties

        // Mostrar la ventana modal al hacer clic en un estado
        $("#estadoModal").modal("show");

        // Crear una variable para almacenar el contenido del modal
        var modalContent = "<h3>Estado: " + estado + "</h3>";

        // Inicializar un contador para las instituciones
        var institucionCount = 1;

        // Recorrer los atributos del estado y agregarlos al contenido del modal
        for (var key in point.options) {
          // Verificar si el atributo es una dirección o un número de teléfono y no está vacío
          if (
            key !== "num_inst" &&
            (key.startsWith("direccion") ||
              key.startsWith("num") ||
              key.startsWith("MAPS")) &&
            point.options[key] !== ""
          ) {
            // Cambiar la etiqueta de "num" a "Teléfono 1", "num1" a "Teléfono 2", "num2" a "Teléfono 3", etc.
            var label;
            if (key.startsWith("direccion")) {
              label = "Institución " + institucionCount++;
            } else {
              label = key.replace("num", "Teléfono");
            }
            // Agregar el atributo al contenido del modal
            modalContent +=
              "<p><strong>" +
              label +
              ":</strong> " +
              point.options[key] +
              "</p>";
            if (key.startsWith("num")) {
              modalContent += "<br>"; // Agregar salto de línea después de cada número de teléfono
            }
          }
        }

        // Personalizar el contenido de la ventana modal
        $("#estadoModal .modal-body").html(modalContent);
      });
    }
  );
})();

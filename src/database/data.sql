INSERT INTO lumina_db.roles VALUES(1,"customer"), (2,"admin"), (3,"gestor");
/* Adding two users admin and cutomer */
INSERT INTO lumina_db.users values(1,"Ignacio Agustín", "Padilla", "2000-08-22", "nacho@hotmail.com", "+54 1130673225", "1710027734943_img_.png","$2a$12$n4C9cbFtaTuFMHRSgbKoK.RccAK/a2DzL8.i7PNHMVaRGhQmEfE72", 2),
(2,"Carlos Rodolfo","Sanchez", "2002-10-04","argcarlos@gmail.com", "+54 388647233", "1710029650878_img_.jpeg", "$2a$12$6geTV5YJ97d2cOfieFrCnOkLw5lbgVS8Z1ljLri21SzqM152LAORu", 1);

/*Adding colors*/
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('brown');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('black');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('white');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('red');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('grey');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('royal-blue');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('core-black');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('core-white');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('navy-black');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('blue');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('salmon');

/*Adding discounts*/
INSERT INTO `lumina_db`.`discounts` (`percent`) VALUES ('50');
INSERT INTO `lumina_db`.`discounts` (`percent`) VALUES ('30');
INSERT INTO `lumina_db`.`discounts` (`percent`) VALUES ('0');
INSERT INTO `lumina_db`.`discounts` (`percent`) VALUES ('20');
INSERT INTO `lumina_db`.`discounts` (`percent`) VALUES ('10');

/*Adding categories*/
INSERT INTO `lumina_db`.`categories` (`name`) VALUES ('clothes');
INSERT INTO `lumina_db`.`categories` (`name`) VALUES ('accesory');
INSERT INTO `lumina_db`.`categories` (`name`) VALUES ('footwear');

/*Adding genders*/
INSERT INTO `lumina_db`.`genders` (`name`) VALUES ('women');
INSERT INTO `lumina_db`.`genders` (`name`) VALUES ('man');
INSERT INTO `lumina_db`.`genders` (`name`) VALUES ('boy');
INSERT INTO `lumina_db`.`genders` (`name`) VALUES ('girl');

/*Adding products*/
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Zapatillas Grand Court Alpha', '59.5', 'Las 3 Tiras evocan el legado de Lumina. Y cuando se las combina con estas zapatillas adidas Grand Court Alpha, celebran generaciones de originalidad. La silueta minimalista crea ese look atemporal. El logo en relieve en la lengüeta y las elegantes costuras le dan un toque moderno. La amortiguación Cloudfoam le inyecta comodidad a cada uno de tus pasos.', 'Lavar a máquina del revés, temperatura max. 30°', '98% Algodón 2% Spandex', '300', '3', '3', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Gorra de Running Adizero HEAT.RDY', '53.999', 'La Gorra Negra Adizero es el accesorio perfecto para completar tu estilo. Con un diseño moderno y elegante, esta gorra te brinda comodidad y un toque de sofisticación al hacer ejercicio. Fabricada con materiales de alta calidad, es ideal para cualquier ocasión.', 'Lavar a máquina del revés, temperatura max. 30°', '98% Algodón 2% Spandex', '200', '2', '2', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Bolso para botines Tiro League', '35.999', 'Creado para el deporte rey. Este bolso para botines adidas forma parte de la colección Tiro League y mantiene tus botines sanos y salvos mientras no los tenés puestos. Su exterior tejido resistente lo hace perfecto para resistir los golpes y raspones del vestuario. El panel de ventilación de malla se encarga de que tus botines se empiecen a secar de manera natural mucho antes de llegar a casa. Este producto, hecho con una serie de materiales reciclados y al menos un 40 % de contenido reciclado, representa solo una de nuestras soluciones para acabar con los residuos plásticos.', 'Limpiar únicamente con paño húmedo. No usar blanqueador, secadora ni lavar en seco.', '98% Algodón 2% Spandex', '100', '2','3', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Pelota Argentum 22 league', '69.999', 'De 1978 al futuro. Los llamativos gráficos difuminados de esta pelota adidas Argentum 22 se inspiran en la icónica pelota Tango Rosario que protagonizó la coronación de Argentina como campeón del mundo en suelo local. Ideal para entrenar, su estructura TSBE sin costuras y el sello de calidad FIFA Quality garantizan su predictibilidad en la cancha, partido tras partido.', 'Limpiar únicamente con paño húmedo. No usar blanqueador, secadora ni lavar en seco.', 'Exterior 100 % TPU, Cámara de caucho, Estructura sin costuras TSBE.', '20', '2', '3', null);
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Branded Layer', '106.999', 'Branded Layer es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Branded Layer podés dejar una reseña abajo; siempre nos encanta conocer tu opinión.', 'Usar únicamente detergente suave. Lavar con cierres ajustados. No usar blanqueador, secadora ni lavar en seco. No planchar.', 'Exterior 100 % TPU, Cámara de caucho, Estructura sin costuras TSBE.', '300', '1', '2','1');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Remera de entrenamiento Yoga', '48.999', 'Ponete esta remera de yoga lumina, respirá profundo y dejá que el estrés del día se disipe. El tejido extrasuave hace que sea muy fácil encontrar tu ritmo. Incorpora tecnología de absorción AEROREADY que te permite concentrarte únicamente en el aquí y ahora. Este producto está hecho con materiales naturales y renovables como parte de nuestro compromiso para eliminar los recursos finitos de nuestros diseños y ayudar a ponerles fin a los residuos plásticos.', 'Usar únicamente detergente suave. Lavar con cierres ajustados. No usar blanqueador, secadora ni lavar en seco. No planchar.', 'Tejido jersey 52 % algodón, 48 % poliéster reciclado', '10', '1', '3','2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Botines x Crazyfast+ FG', '449.999', 'Cambiá el juego con los botines X Crazyfast+ FG para terreno firme. Estos botines livianos de fútbol lucen una parte superior semitranslúcida con tecnología Aeropacity Speedskin+ e incluyen refuerzos en zonas estratégicas. Presentan unos cordones livianos y una suela SPEEDFRAME con AEROPLATE para propulsión y movimientos dinámicos. Hemos reducido el impacto ecológico de este par de zapatillas en al menos un 10% en comparación con una versión anterior. Menos emisiones de gases de efecto invernadero, incluyendo CO2, para todo el ciclo de vida, desde su creación hasta el final.', 'No usar blanqueador, secadora ni lavar en seco.', 'Exterior Aeropacity Speedskin+. Forro interno de soporte técnico Aerocage+', '300', '3', '2','2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Zapatillas Cross', '89999', 'Permitíles jugar con total comodidad. Estas zapatillas de básquet adidas para niños tienen una mediasuela ultrasuave de Cloudfoam que es perfecta para correr sin parar por la cancha. La suela de caucho de gran agarre se encarga de brindar tracción en los momentos decisivos.', 'No usar blanqueador, secadora ni lavar en seco.', 'Exterior sintético perforado con lengüeta de malla. Forro interno textil. Diseño transpirable.', '150', '3', '2', '2');

INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Zapatillas Campus 00S', '171999', 'Un diseño icónico de los años 80 reimaginado para el mundo de hoy, estas zapatillas adidas toman forma con una parte superior de cuero suave, detalles de gamuza y una suela de caucho que es familiar y moderna a la vez. Todos los detalles emblemáticos del original han sido actualizados en forma y proporción para que puedas crear el tuyo propio. Este clásico casual siempre está listo para acompañarte.', 'No usar blanqueador, secadora ni lavar en seco.', 'Ajuste clásico. Sistema de atado de cordones. Forro interno textil. Suela de caucho. Parte superior de gamuza y cuero.', '60', '3', '3', '1');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Musculosa club para tenis', '48999', 'Estilo y rendimiento para la cancha de tenis. Parte de la colección adidas Club, esta musculosa aporta espacio para jugar gracias a su tejido elástico y diseño de espalda cruzada. La malla transpirable y la tecnología de absorción AEROREADY se encargan de que cada golpe en la cancha de tenis sea contundente.', 'No usar blanqueador, no lavar en seco y planchar a temperatura baja.', 'Ajuste ceñido. Cuello redondo. Espalda Racerback. Cuello y aberturas de malla.', '50', '1', '3', '1');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Calzas optime power 7/8', '138999', 'Sacá el máximo partido a tu energía con estas calzas adidas. Diseñadas con una tecnología específica en la cintura de talle alto que aporta estabilidad y sujeción extra mientras realizas tus ejercicios. Están confeccionadas en tejido Adimove con elasticidad en cuatro direcciones para que se muevan contigo cuando haces sentadillas y otros ejercicios de pierna. La tecnología AEROREADY ayuda a reducir el sudor al mínimo. Es tu momento de dominar de tu fuerza.', 'No usar blanqueador, no lavar en seco  y no planchar.', 'Ajuste ceñido con tiro alto. Cintura elástica con soporte. Tejido 76% políester, 24% entrelazado. Conserva la forma.', '100', '1', '3', '1');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Remera corta vibrant print 3-stripes cotton', '47999', '¿Recordás esos días en los que necesitás un poco más de optimismo? Esta remera corta adidas te lo da. Luciendo la tradición de una nueva manera, llena las emblemáticas 3 Tiras con un destello de color vibrante y alegre. Su corte moderno es holgado y relajado, lo que te permite combinarla fácilmente con pantalones de cintura alta o lo que se adapte a tu estado de ánimo. Confeccionada en tejido de punto jersey de algodón, ofrece toda la suavidad con la cantidad justa de elasticidad.', 'No usar blanqueador, no lavar en seco, lavar a máquina a temperatura fría y planchar a temperatura baja.', 'Ajuste holgado. Cuello redondo. Tejido en punto jersey 100% algodón. Hecho con Better Cotton.', '50', '1', '3', '1');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Zapatillas munchen 24', '183999', 'Aventurate a nuevos destinos con un estilo de inspiración retro. Estas zapatillas te transportan a Múnich, sede de algunos de los partidos más importantes de la UEFA Euro 2024. La parte superior de gamuza prémium y la suela de caucho evocan el legado deportivo de adidas, mientras que los detalles en contraste en las icónicas 3 Tiras, el refuerzo de talón y la lengüeta le imprimen un toque contemporáneo. Envovete en un pedazo de historia y mantenete cómodo sin importar lo que te depare el día. Cada paso te conecta con un legado deportivo y de estilo que todo el mundo puede ver.', 'No usar blanqueador, no lavar en seco, lavar a temperatura fría.', 'Ajuste clásico. Sistema de atado de corones. Forro sintético interno. Suela de caucho natural.', '50', '3', '3', '1');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Botines copa pure II elite terreno firme', '369999', 'Creados para mejorar el control en cada aspecto de tu juego, los COPA están diseñados para la conexión. Así que la próxima vez, no se estarán preguntando "¿cómo es tu toque?", sino "¿cómo lo hiciste?"', 'No usar blanqueador, no lavar en seco, lavar a temperatura fría.', 'Corte clásico. Sistema de atado de corones. Contienen al menos un 20% de material reciclado. Suela para terreno firme.', '10', '3', '3', '1');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Campera termina con capucha terrex multi hybrid', '173999', 'Esta campera adidas híbrida ofrece aislamiento térmico y transpirabilidad en donde más los necesitas. El relleno sintético acolchado brinda abrigo en todo el frente, mientras que la felpa transpirable te permite regular la temperatura mientras te mueves. No importa si estás ascendiendo una cumbre o explorando el valle, esta campera te permite marcar el ritmo con comodidad.', 'No usar blanqueador, no lavar en seco, lavar a temperatura fría.', 'Corte clásico. Sistema de atado de corones. Contienen al menos un 20% de material reciclado. Suela para terreno firme.', '20', '1', '3', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Remera essentials logo lineal bordado tejido jersey', '28999', 'Si la sencillez es tu mantra, te encantará esta remera adidas. Su silueta sencilla y clásica de cuello redondo combina a la perfección con casi todas las prendas de tu armario. Está hecha de tejido jersey de algodón que ofrece una sensación de total suavidad contra tu piel.', 'No usar blanqueador, no lavar en seco, lavar a temperatura alta. Planchar a temperatura alta', 'Ajuste clásico. Cuello redondeado acanalado. Tejido Jersey 100% algodón.', '100', '1', '4', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Shorts titular argentina 2024', '44999', 'Estos shorts de fútbol adidas de la Selección Argentina siguen el ejemplo de la camiseta a la que acompañan. Creados para mantener cómodo al hincha, están hechos de tejido suave y cuentan con tecnología de absorción AEROREADY. EL logo de la selección bordado le pone el toque final al diseño.', 'No usar blanqueador, no lavar en seco, lavar a temperatura alta. Planchar a temperatura baja', 'Ajuste clásico. Tejido Jersey 100% algodón.', '150', '1', '3', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Zapatillas running supernova rise', '169999', 'Hemos diseñado las Supernova Rise para ofrecer máxima comodidad en cada paso. Nuestra tecnología Dreamstrike+ amortigua la mediasuela con ​una espuma rediseñada. ¿Sabes qué la hace tan increíble? Ofrece el equilibrio perfecto entre comodidad y soporte para mantenerte cómodo kilómetro tras kilómetro. Además, tiene un sistema de varillas de soporte de espuma más densa, lo que significa que tendrás una transición libre de preocupaciones del talón hasta la punta. Por último, nuestro Comfort Heel Fit combina espuma acolchada y tejido suave para un ajuste más seguro que se siente como si el calzado estuviera abrazando tu talón.', 'No usar blanqueador, no lavar en seco, lavar a temperatura alta.', 'Neutro. Horna clásica Unisex. 10mm caida del talón a la punta.', '50', '3', '3', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Guantes x league', '91999', 'Llegá a todas las pelotas. Estos guantes de arquero adidas X League te dan la velocidad que necesitas para dominar tu área. El revestimiento de malla ligera del dorso te mantiene cómodo y rápido, mientras que la palma URG 3.0 permite llegar con facilidad a los disparos fuertes y a los disparos cruzados con efecto. El puño técnico ofrece el ajuste perfecto para una estabilidad que gana partidos.', 'No usar blanqueador, no lavar en seco, lavar a mano a temperatura fria.', 'Corte negativo. Puños ajustados con diseño técnico.', '50', '2', '3', null);


/*Asosseate colors and products*/
insert INTO lumina_db.product_colors values(2, 1),(3, 1),(4, 2), (5, 2),(8, 3),(6, 3),(3, 4), (3, 5),(3, 6),(3, 7),(3, 8), (1, 9), (2, 9), (3, 9), (2, 10), (3, 10), (4, 10), (1, 11), (2, 11), (3, 11), (4, 11), (6, 11), (10, 12), (3, 13), (3, 14), (4, 14), (3, 15), (5, 15), (6, 15), (11, 16), (2, 17), (3, 17), (5, 18), (3, 18), (3, 19);


/*Asoseate image with products*/
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("grand-court-alpha-1.jpg", 1),("grand-court-alpha-2.jpg", 1),("grand-court-alpha-3.jpg", 1),("grand-court-alpha-4.jpg", 1);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("cap-running-adizero-1.jpg", 2),("cap-running-adizero-2.jpg", 2),("cap-running-adizero-3.jpg", 2);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("boot-bag-tiro-league-1.jpg", 3),("boot-bag-tiro-league-2.jpg", 3),("boot-bag-tiro-league-3.jpg", 3),("boot-bag-tiro-league-4.jpg", 3);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("ball-argentum-22-league-1.jpg", 4),("ball-argentum-22-league-2.jpg", 4),("ball-argentum-22-league-3.jpg", 4),("ball-argentum-22-league-4.jpg", 4);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("branded-layer-1.jpg", 5),("branded-layer-2.jpg", 5);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("yoga-trainning-tshirt-1.jpg", 6),("yoga-trainning-tshirt-2.jpg", 6), ("yoga-trainning-tshirt-3.jpg", 6), ("yoga-trainning-tshirt-4.jpg", 6);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("booties-crazyfast-1.jpg", 7),("booties-crazyfast-2.jpg", 7), ("booties-crazyfast-3.jpg", 7), ("booties-crazyfast-4.jpg", 7);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("sneakers-cross-emup-1.jpg", 8),("sneakers-cross-emup-2.jpg", 8), ("sneakers-cross-emup-3.jpg", 8), ("sneakers-cross-emup-4.jpg", 8);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("sneakers-campus-00S-1.jpg", 9),("sneakers-campus-00S-2.jpg", 9), ("sneakers-campus-00S-3.jpg", 9), ("sneakers-campus-00S-4.jpg", 9);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("tennis-women-tank-top-1.jpg", 10),("tennis-women-tank-top-2.jpg", 10), ("tennis-women-tank-top-3.jpg", 10), ("tennis-women-tank-top-4.jpg", 10);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("women-sports-tights-1.jpg", 11),("women-sports-tights-2.jpg", 11), ("women-sports-tights-3.jpg", 11), ("women-sports-tights-4.jpg", 11);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("women-short-tshirt-vibrant-sprint-1.jpg", 12),("women-short-tshirt-vibrant-sprint-2.jpg", 12), ("women-short-tshirt-vibrant-sprint-3.jpg", 12), ("women-short-tshirt-vibrant-sprint-4.jpg", 12);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("women-sneakers-munchen-24-1.jpg", 13),("women-sneakers-munchen-24-2.jpg", 13), ("women-sneakers-munchen-24-3.jpg", 13), ("women-sneakers-munchen-24-4.jpg", 13);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("women-copa-pure-boots-1.jpg", 14),("women-copa-pure-boots-2.jpg", 14), ("women-copa-pure-boots-3.jpg", 14), ("women-copa-pure-boots-4.jpg", 14);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("men-thermal-jacket-hood-1.jpg", 15),("men-thermal-jacket-hood-2.jpg", 15), ("men-thermal-jacket-hood-3.jpg", 15), ("men-thermal-jacket-hood-4.jpg", 15);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("men-essential-tshirt-1.jpg", 16),("men-essential-tshirt-2.jpg", 16), ("men-essential-tshirt-3.jpg", 16), ("men-essential-tshirt-4.jpg", 16);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("men-holder-short-argentina-24-1.jpg", 17),("men-holder-short-argentina-24-2.jpg", 17), ("men-holder-short-argentina-24-3.jpg", 17), ("men-holder-short-argentina-24-4.jpg", 17);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("men-supernova-rise-shoes-1.jpg", 18),("men-supernova-rise-shoes-2.jpg", 18), ("men-supernova-rise-shoes-3.jpg", 18), ("men-supernova-rise-shoes-4.jpg", 18);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("x-league-gloves-1.jpg", 19),("x-league-gloves-2.jpg", 19), ("x-league-gloves-3.jpg", 19), ("x-league-gloves-4.jpg", 19);

/*Adding sizes*/
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('S');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('M');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('L');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('XL');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('XXL');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('12');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('14');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('16');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('36');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('37');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('38');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('39');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('40');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('41');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('42');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('43');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('44');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('45');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('46');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('47');
INSERT INTO `lumina_db`.`sizes` (`measurement`) VALUES ('48');

/*Asoseate sizes with products*/
INSERT INTO lumina_db.product_sizes VALUES(9,1),(11,1),(11,1),(12,1),(13,1);
INSERT INTO lumina_db.product_sizes VALUES(1,5),(2,5),(3,5),(4,5);
INSERT INTO lumina_db.product_sizes VALUES(1,6),(2,6),(3,6),(4,6);
INSERT INTO lumina_db.product_sizes VALUES(9,7),(10,7),(11,7),(12,7),(13,7),(14,7),(15,7),(16,7),(17,7),(18,7),(19,7),(20,7);
INSERT INTO lumina_db.product_sizes VALUES(9,7),(10,7),(11,7),(12,7),(13,7),(14,7),(15,7),(16,7),(17,7),(18,7),(19,7),(20,7);
INSERT INTO lumina_db.product_sizes VALUES(9,8),(10,8),(11,8),(12,8),(13,8),(14,8),(15,8),(16,8),(17,8),(18,8),(19,8),(20,8);

INSERT INTO lumina_db.product_sizes VALUES(9,9),(10,9),(11,9),(12,9),(13,9),(14,9),(15,9),(16,9),(17,9),(19,9),(19,9),(20,9);
INSERT INTO lumina_db.product_sizes VALUES(1,10),(2,10),(3,10),(4,10),(5,10);
INSERT INTO lumina_db.product_sizes VALUES(1,11),(2,11),(3,11),(4,11),(5,11);
INSERT INTO lumina_db.product_sizes VALUES(1,12),(2,12),(3,12),(4,12),(5,12);
INSERT INTO lumina_db.product_sizes VALUES(9,13),(10,13),(11,13),(12,13),(13,13),(14,13),(15,13),(16,13),(17,13),(19,13),(19,13),(20,13);
INSERT INTO lumina_db.product_sizes VALUES(9,14),(10,14),(11,14),(12,14),(13,14),(14,14),(15,14),(16,14),(17,14),(19,14),(19,14),(20,14);
INSERT INTO lumina_db.product_sizes VALUES(1,15),(2,15),(3,15),(4,15),(5,15);
INSERT INTO lumina_db.product_sizes VALUES(1,16),(2,16),(3,16),(4,16),(5,16);
INSERT INTO lumina_db.product_sizes VALUES(1,17),(2,17),(3,17),(4,17),(5,17);
INSERT INTO lumina_db.product_sizes VALUES(9,18),(10,18),(11,18),(12,18),(13,18),(14,18),(15,18),(16,18),(17,18),(19,18),(19,18),(20,18);
INSERT INTO lumina_db.product_sizes VALUES(12,19),(15,19),(16,19),(17,19),(18,19);


INSERT INTO `lumina_db`.`installments` (`count`) VALUES ('1');
INSERT INTO `lumina_db`.`installments` (`count`) VALUES ('2');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('3', '10');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('4', '12');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('5', '15');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('6', '30');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('7', '50');
INSERT INTO lumina_db.roles VALUES(1,"customer"), (2,"admin"), (3,"gestor");
/* Adding two users admin and cutomer */
INSERT INTO lumina_db.users values(1,"Ignacio Agustín", "Padilla", "2000-08-22", "nacho20002008@hotmail.com", "+54 1130673225", "1710027734943_img_.png","$2a$12$n4C9cbFtaTuFMHRSgbKoK.RccAK/a2DzL8.i7PNHMVaRGhQmEfE72", 2),
(2,"Carlos Rodolfo","Sanchez", "2002-10-04","argcarlos@gmail.com", "+54 388647233", "1710029650878_img_.jpeg", "$2a$12$6geTV5YJ97d2cOfieFrCnOkLw5lbgVS8Z1ljLri21SzqM152LAORu", 1);

/*Adding colors*/
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('brown');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('black');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('white');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('red');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('grey');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('royal blue');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('core black');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('core white');
INSERT INTO `lumina_db`.`colors` (`name`) VALUES ('navy black');

/*Adding discounts*/
INSERT INTO `lumina_db`.`discounts` (`percent`) VALUES ('50');
INSERT INTO `lumina_db`.`discounts` (`percent`) VALUES ('30');

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
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Zapatillas Grand Court Alpha', '59.5', 'Las 3 Tiras evocan el legado de Lumina. Y cuando se las combina con estas zapatillas adidas Grand Court Alpha, celebran generaciones de originalidad. La silueta minimalista crea ese look atemporal. El logo en relieve en la lengüeta y las elegantes costuras le dan un toque moderno. La amortiguación Cloudfoam le inyecta comodidad a cada uno de tus pasos.', 'Lavar a máquina del revés, temperatura max. 30°', '98% Algodón 2% Spandex', '300', '3', '1', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Gorra de Running Adizero HEAT.RDY', '53.999', 'La Gorra Negra Adizero es el accesorio perfecto para completar tu estilo. Con un diseño moderno y elegante, esta gorra te brinda comodidad y un toque de sofisticación al hacer ejercicio. Fabricada con materiales de alta calidad, es ideal para cualquier ocasión.', 'Lavar a máquina del revés, temperatura max. 30°', '98% Algodón 2% Spandex', '200', '2', '2', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Bolso para botines Tiro League', '35.999', 'Creado para el deporte rey. Este bolso para botines adidas forma parte de la colección Tiro League y mantiene tus botines sanos y salvos mientras no los tenés puestos. Su exterior tejido resistente lo hace perfecto para resistir los golpes y raspones del vestuario. El panel de ventilación de malla se encarga de que tus botines se empiecen a secar de manera natural mucho antes de llegar a casa. Este producto, hecho con una serie de materiales reciclados y al menos un 40 % de contenido reciclado, representa solo una de nuestras soluciones para acabar con los residuos plásticos.', 'Limpiar únicamente con paño húmedo. No usar blanqueador, secadora ni lavar en seco.', '98% Algodón 2% Spandex', '100', '2','2', '2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Pelota Argentum 22 league', '69.999', 'De 1978 al futuro. Los llamativos gráficos difuminados de esta pelota adidas Argentum 22 se inspiran en la icónica pelota Tango Rosario que protagonizó la coronación de Argentina como campeón del mundo en suelo local. Ideal para entrenar, su estructura TSBE sin costuras y el sello de calidad FIFA Quality garantizan su predictibilidad en la cancha, partido tras partido.', 'Limpiar únicamente con paño húmedo. No usar blanqueador, secadora ni lavar en seco.', 'Exterior 100 % TPU, Cámara de caucho, Estructura sin costuras TSBE.', '20', '2', '1',null);
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Branded Layer', '106.999', 'Branded Layer es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Branded Layer podés dejar una reseña abajo; siempre nos encanta conocer tu opinión.', 'Usar únicamente detergente suave. Lavar con cierres ajustados. No usar blanqueador, secadora ni lavar en seco. No planchar.', 'Exterior 100 % TPU, Cámara de caucho, Estructura sin costuras TSBE.', '300', '1', '2','1');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Remera de entrenamiento Yoga', '48.999', 'Ponete esta remera de yoga lumina, respirá profundo y dejá que el estrés del día se disipe. El tejido extrasuave hace que sea muy fácil encontrar tu ritmo. Incorpora tecnología de absorción AEROREADY que te permite concentrarte únicamente en el aquí y ahora. Este producto está hecho con materiales naturales y renovables como parte de nuestro compromiso para eliminar los recursos finitos de nuestros diseños y ayudar a ponerles fin a los residuos plásticos.', 'Usar únicamente detergente suave. Lavar con cierres ajustados. No usar blanqueador, secadora ni lavar en seco. No planchar.', 'Tejido jersey 52 % algodón, 48 % poliéster reciclado', '10', '1', '1','2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Botines x Crazyfast+ FG', '449.999', 'Cambiá el juego con los botines X Crazyfast+ FG para terreno firme. Estos botines livianos de fútbol lucen una parte superior semitranslúcida con tecnología Aeropacity Speedskin+ e incluyen refuerzos en zonas estratégicas. Presentan unos cordones livianos y una suela SPEEDFRAME con AEROPLATE para propulsión y movimientos dinámicos. Hemos reducido el impacto ecológico de este par de zapatillas en al menos un 10% en comparación con una versión anterior. Menos emisiones de gases de efecto invernadero, incluyendo CO2, para todo el ciclo de vida, desde su creación hasta el final.', 'No usar blanqueador, secadora ni lavar en seco.', 'Exterior Aeropacity Speedskin+. Forro interno de soporte técnico Aerocage+', '300', '3', '2','2');
INSERT INTO `lumina_db`.`products` (`title`, `price`, `overview`, `care_instructions`, `composition`, `stock`, `category_id`, `discount_id`, `gender_id`) VALUES ('Zapatillas Cross', '89999', 'Permitíles jugar con total comodidad. Estas zapatillas de básquet adidas para niños tienen una mediasuela ultrasuave de Cloudfoam que es perfecta para correr sin parar por la cancha. La suela de caucho de gran agarre se encarga de brindar tracción en los momentos decisivos.', 'No usar blanqueador, secadora ni lavar en seco.', 'Exterior sintético perforado con lengüeta de malla. Forro interno textil. Diseño transpirable.', '150', '3', '2', '2');

/*Asosseate colors and products*/
insert INTO lumina_db.product_colors values(2, 1),(3, 1),(4, 2), (5, 2),(8, 3),(6, 3),(3, 4), (3, 5),(3, 6),(3, 7),(3, 8);


/*Asoseate image with products*/
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("grand-court-alpha-1.jpg", 1),("grand-court-alpha-2.jpg", 1),("grand-court-alpha-3.jpg", 1),("grand-court-alpha-4.jpg", 1);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("cap-running-adizero-1.jpg", 2),("cap-running-adizero-2.jpg", 2),("cap-running-adizero-3.jpg", 2);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("boot-bag-tiro-league-1.jpg", 3),("boot-bag-tiro-league-2.jpg", 3),("boot-bag-tiro-league-3.jpg", 3),("boot-bag-tiro-league-4.jpg", 3);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("ball-argentum-22-league-1.jpg", 4),("boot-bag-tiro-league-2.jpg", 4),("boot-bag-tiro-league-3.jpg", 4),("boot-bag-tiro-league-4.jpg", 4);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("branded-layer-1.jpg", 5),("branded-layer-2.jpg", 5);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("yoga-trainning-tshirt-1.jpg", 6),("yoga-trainning-tshirt-2.jpg", 6), ("yoga-trainning-tshirt-3.jpg", 6), ("yoga-trainning-tshirt-4.jpg", 6);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("booties-crazyfast-1.jpg", 7),("booties-crazyfast-2.jpg", 7), ("booties-crazyfast-3.jpg", 7), ("booties-crazyfast-4.jpg", 7);
INSERT INTO lumina_db.product_images (`url_image`,`product_id`) VALUES("sneakers-cross-emup-1.jpg", 8),("sneakers-cross-emup-2.jpg", 8), ("sneakers-cross-emup-3.jpg", 8), ("sneakers-cross-emup-4.jpg", 8);

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
INSERT INTO lumina_db.product_sizes VALUES(9,1),(10,1),(11,1),(12,1),(13,1);
INSERT INTO lumina_db.product_sizes VALUES(1,5),(2,5),(3,5),(4,5);
INSERT INTO lumina_db.product_sizes VALUES(1,6),(2,6),(3,6),(4,6);
INSERT INTO lumina_db.product_sizes VALUES(9,7),(10,7),(11,7),(12,7),(13,7),(14,7),(15,7),(16,7),(17,7),(18,7),(19,7),(20,7);
INSERT INTO lumina_db.product_sizes VALUES(9,7),(10,7),(11,7),(12,7),(13,7),(14,7),(15,7),(16,7),(17,7),(18,7),(19,7),(20,7);
INSERT INTO lumina_db.product_sizes VALUES(9,8),(10,8),(11,8),(12,8),(13,8),(14,8),(15,8),(16,8),(17,8),(18,8),(19,8),(20,8);


INSERT INTO `lumina_db`.`installments` (`count`) VALUES ('1');
INSERT INTO `lumina_db`.`installments` (`count`) VALUES ('2');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('3', '10');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('4', '12');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('5', '15');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('6', '30');
INSERT INTO `lumina_db`.`installments` (`count`, `interest`) VALUES ('7', '50');
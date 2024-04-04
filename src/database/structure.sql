CREATE DATABASE lumina_db;

CREATE TABLE lumina_db.Roles(
	role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(50) NOT NULL
);

CREATE TABLE lumina_db.Users(
	user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birthdate DATE,
	email VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    url_image VARCHAR(200),
    user_password VARCHAR(200) NOT NULL,
    role_id INT UNSIGNED,
    FOREIGN KEY(role_id) REFERENCES Roles(role_id)
);

CREATE TABLE lumina_db.Carts(
	cart_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED,
	subtotal DECIMAL UNSIGNED NOT NULL,
    state BOOLEAN DEFAULT(1) NOT NULL,
    FOREIGN KEY(user_id) REFERENCES Users(user_id)
);

CREATE TABLE lumina_db.Orders(
	order_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cart_id INT UNSIGNED,
    sending_cost DECIMAL UNSIGNED,
    sending_address VARCHAR(100) NOT NULL,
    locality VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    total DECIMAL UNSIGNED NOT NULL
);

CREATE TABLE lumina_db.Products(
	product_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL UNSIGNED NOT NULL,
    overview TEXT NOT NULL,
    care_instructions TEXT NOT NULL,
    composition TEXT NOT NULL,
    stock INT UNSIGNED NOT NULL,
    category_id INT UNSIGNED,
    discount_id INT UNSIGNED
);

CREATE TABLE lumina_db.Discounts(
	discount_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    percent TINYINT UNSIGNED
);

CREATE TABLE lumina_db.Product_images(
    url VARCHAR(100) NOT NULL,
    product_id INT UNSIGNED,
    FOREIGN KEY(product_id) REFERENCES Products(product_id)
);

CREATE TABLE lumina_db.Categories(
	category_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL
);

CREATE TABLE lumina_db.Colors(
	color_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    color_name VARCHAR(50) NOT NULL
);

CREATE TABLE lumina_db.Product_Detail(
	cart_id INT UNSIGNED,
    product_id INT UNSIGNED,
    product_detail_count INT UNSIGNED NOT NULL,
    FOREIGN KEY(cart_id) REFERENCES Carts(cart_id),
    FOREIGN KEY(product_id) REFERENCES Products(product_id)
);

CREATE TABLE lumina_db.Product_Color(
    color_id INT UNSIGNED,
    product_id INT UNSIGNED,
    FOREIGN KEY(color_id) REFERENCES Colors(color_id),
    FOREIGN KEY(product_id) REFERENCES Products(product_id)
);

ALTER TABLE lumina_db.Orders ADD FOREIGN KEY(cart_id) REFERENCES Carts(cart_id);
ALTER TABLE lumina_db.Products ADD(FOREIGN KEY(category_id) REFERENCES Categories(category_id), 
                                  FOREIGN KEY(discount_id) REFERENCES Discounts(discount_id)
 );

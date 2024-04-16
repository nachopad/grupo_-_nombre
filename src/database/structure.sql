CREATE DATABASE lumina_db;

CREATE TABLE lumina_db.Roles(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE lumina_db.Users(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birthdate DATE,
	email VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    image VARCHAR(200),
    password VARCHAR(200) NOT NULL,
    role_id INT UNSIGNED DEFAULT(1),
    FOREIGN KEY(role_id) REFERENCES Roles(id)
);

CREATE TABLE lumina_db.Installments(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    count TINYINT UNSIGNED NOT NULL,
    interest INT UNSIGNED
);

CREATE TABLE lumina_db.Orders(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    sending_cost DECIMAL UNSIGNED,
    sending_address VARCHAR(100) NOT NULL,
    locality VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    user_id INT UNSIGNED, 
    installment_id INT UNSIGNED,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (installment_id) REFERENCES Installments(id),
    total DECIMAL UNSIGNED NOT NULL
);

CREATE TABLE lumina_db.Genders(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE lumina_db.Discounts(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    percent TINYINT UNSIGNED
);

CREATE TABLE lumina_db.Categories(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE lumina_db.Colors(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE lumina_db.Sizes(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    measurement VARCHAR(20)
);

CREATE TABLE lumina_db.Products(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    price DECIMAL UNSIGNED NOT NULL,
    overview TEXT NOT NULL,
    care_instructions TEXT NOT NULL,
    composition TEXT NOT NULL,
    stock INT UNSIGNED NOT NULL,
    category_id INT UNSIGNED,
    discount_id INT UNSIGNED,
    gender_id INT UNSIGNED,
    FOREIGN KEY(category_id) REFERENCES Categories(id),
    FOREIGN KEY(discount_id) REFERENCES Discounts(id),
    FOREIGN KEY(gender_id) REFERENCES Genders(id)
);

CREATE TABLE lumina_db.Product_images(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    url_image VARCHAR(100) NOT NULL,
    product_id INT UNSIGNED,
    FOREIGN KEY(product_id) REFERENCES Products(id)
);

CREATE TABLE lumina_db.Product_Colors(
    color_id INT UNSIGNED,
    product_id INT UNSIGNED,
    FOREIGN KEY(color_id) REFERENCES Colors(id),
    FOREIGN KEY(product_id) REFERENCES Products(id)
);

CREATE TABLE lumina_db.Product_Sizes(
    size_id INT UNSIGNED,
    product_id INT UNSIGNED,
    FOREIGN KEY(size_id) REFERENCES Sizes(id),
    FOREIGN KEY(product_id) REFERENCES Products(id)
);

CREATE TABLE lumina_db.Product_Details(
	order_id INT UNSIGNED,
    product_id INT UNSIGNED,
    count INT UNSIGNED NOT NULL,
    FOREIGN KEY(order_id) REFERENCES Orders(id),
    FOREIGN KEY(product_id) REFERENCES Products(id)
);

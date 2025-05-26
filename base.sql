CREATE DATABASE adopciones_mascotas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE adopciones_mascotas;


CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL
);

CREATE TABLE mascotas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    sexo ENUM('MACHO','HEMBRA'),
    raza VARCHAR(100) DEFAULT 'Desconocida',
    edad INT NULL,
    estado ENUM('DISPONIBLE', 'EN_ADOPCION', 'ADOPTADA') DEFAULT 'DISPONIBLE' NOT NULL,
    descripcion TEXT,
    imagen LONGBLOB
);


CREATE TABLE adoption_forms (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NULL,
    phone VARCHAR(30) NOT NULL,
    pet_id BIGINT NOT NULL,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pet_id) REFERENCES mascotas(id)
);


INSERT INTO users (username, password, role) VALUES (
    'valejo',
    '$2b$12$81vHzVfV1amKh/nZxsPdbuM9sPYk1bjVw8QNrySr0xsYtmOoqv0nG',
    'ROLE_ADMIN'
);

CREATE DATABASE adopciones_mascotas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE adopciones_mascotas;

CREATE TABLE usuarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    rol ENUM('ADMINISTRADOR', 'VOLUNTARIO', 'ADOPTANTE') NOT NULL
);


CREATE TABLE mascotas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especie VARCHAR(50),
    raza VARCHAR(100),
    estado ENUM('DISPONIBLE', 'EN_ADOPCION', 'ADOPTADA') DEFAULT 'DISPONIBLE',
    descripcion TEXT,
    imagen LONGBLOB
);


CREATE TABLE solicitudes_adopcion (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    fecha_solicitud DATE NOT NULL,
    estado ENUM('PENDIENTE', 'APROBADA', 'RECHAZADA') DEFAULT 'PENDIENTE',
    usuario_id BIGINT NOT NULL,
    mascota_id BIGINT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (mascota_id) REFERENCES mascotas(id)
);


CREATE TABLE seguimientos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    observaciones TEXT,
    mascota_id BIGINT NOT NULL,
    FOREIGN KEY (mascota_id) REFERENCES mascotas(id)
);

--- TO DO
/* CREATE TABLE notificaciones (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    mensaje TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_id BIGINT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
); */

CREATE SCHEMA IF NOT EXISTS little_tribu;
SET search_path TO little_tribu, public;

CREATE TABLE "USERS"(
	id_user serial PRIMARY KEY,
	name varchar(64),
	email varchar(320) unique not null,
	pwd varchar(256),
	rol int CHECK (rol in (1, 2, 3)), -- 1: administrador | 2: administrador parcial | 3: usuario,
	is_active BOOLEAN DEFAULT true,
	creation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "ARCA_SESSIONS"(
	id serial PRIMARY KEY,
	CUIT bigint,
	token varchar(2000),
	sign varchar(512),
	expiration TIMESTAMP NOT null
);

/* A futuro se pueden expandir con campos como:
 * dni
 * is_active (definir si la cuenta tiene que estar activa o no)
 *
 */

SET search_path TO little_tribu, public;

-- se incerta usuario de prueba
INSERT INTO "USERS" (name, email, pwd, rol)
VALUES (
    'Admin Test',
    'admin@test.com',
    '$2b$12$D0k7ipYq5TfGgDFN1fcwgeA1JbBac4lpPVMremyzwYLCEIIdxoi0a',
	1
);
-- la contraseña es admin1234

-- verificacion de insersion
select * from little_tribu."USERS";

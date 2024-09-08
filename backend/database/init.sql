-- Crear la tabla users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    gravatar VARCHAR(255)
);

-- Crear la tabla product
CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    price DECIMAL(10, 2),
    user_id INTEGER REFERENCES users(id)
);

-- Eliminar la restricción de unicidad de la columna title en la tabla product
ALTER TABLE product DROP CONSTRAINT IF EXISTS product_title_key;

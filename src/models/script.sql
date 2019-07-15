DROP DATABASE IF EXISTS propertyprotest;
CREATE DATABASE propertyprotest;
\c propertyprotest;
DROP TABLE IF EXISTS users;
CREATE TABLE users
(
    id SERIAL,
    email character varying,
    first_name character varying,
    last_name character varying,
    password character varying,
    phone_number character varying,
    address character varying,
    is_admin boolean DEFAULT false,
    created_on date DEFAULT CURRENT_DATE,
    image_url character varying,
    CONSTRAINT users_pkey PRIMARY KEY (id)
 );
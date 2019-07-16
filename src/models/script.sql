DROP DATABASE IF EXISTS propertyprotest;
CREATE DATABASE propertyprotest;
\c propertyprotest;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS property;
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
 CREATE TABLE property
(
    type character varying ,
    status character varying DEFAULT 'available'::character varying,
    state character varying,
    price numeric,
    owner integer,
    id SERIAL,
    created_on date DEFAULT CURRENT_DATE,
    city character varying,
    address character varying,
    image_url character varying,
    CONSTRAINT property_pkey PRIMARY KEY (id)
)
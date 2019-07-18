# PropertyPro-Lite
Andela Bootcamp Challenge for Cycle 46

[![Build Status](https://travis-ci.org/suzzybliss/PropertyPro-Lite.svg?branch=develop)](https://travis-ci.org/suzzybliss/PropertyPro-Lite) [![Coverage Status](https://coveralls.io/repos/github/suzzybliss/PropertyPro-Lite/badge.svg)](https://coveralls.io/github/suzzybliss/PropertyPro-Lite)  [![Test Coverage](https://api.codeclimate.com/v1/badges/f82076aacd50b1389ac9/test_coverage)](https://codeclimate.com/github/suzzybliss/PropertyPro-Lite/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/f82076aacd50b1389ac9/maintainability)](https://codeclimate.com/github/suzzybliss/PropertyPro-Lite/maintainability)

Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

Technologies Used
Node - Server Runtime Engine
Express - MVC Framework
Postgres - Database
Cloudinary - Image Server
Features
User can signup as just user or agent
User can sign in
Admin can make or remove other users from admin role
User can reset his/her password
User(agent) can post property advert with multiple images
User(agent) can mark advert as sold
User(agent) can update advert
user(admin) can activate or deactivate advert
API Endpoints
Method	endpoint	description
POST	/auth​/signup	Register user
POST	/auth​/signin	User login
POST	/property	Creating new property
GET	/property	Get all property adverts
GET ​	/property​/{property_id}	Get a specific property advert.
PATCH	​/property​/{property_id}	Update property
PATCH	/property​/{property_id}​/sold	Mark a property as sold
DELETE	/property​/{property_id}	Remove a specific property advert.
System Testing
Create a folder on your drive
Clone https://github.com/suzzybliss/PropertyPro-Lite.git from your terminal
Still from the terminal cd into root directory i.e propertyprolite
Run npm install from your to download all the required dependencies
Create a .env file on the root directorty
Setup the following environmental variables inside .env file
CLOUDINARY_CLOUD_NAME=cloud_name
CLOUDINARY_API_KEY=pi_key
CLOUDINARY_API_SECRET=api_secret
JWT_SECRET=jsonwebtokensecret
TEST_DB=test_database_url
DATABASE_URL=prod_database_url
Create a database with the following tables inside of models/travis.sql script file
Run npm run build to build the project for Production
Run npm start to start the server in Production
Run npm dev to start the server in Development
Using postman navigate to localhost:5008/api/v1/{endpoint} to test various endpoint
Note
The endpoints below requires you to send data to server with Form-Data 

Set file as the name for the file upload control for these endpoint to upload profile image

POST / localhost:5008/api/v1/auth​/signup
PATCH / localhost:5008/api/v1/​users 

Set files as the name for the file upload control for these endpoint to upload advert images

POST / localhost:5008/api/v1/property​ 
PATCH / localhost:5008/api/v1/property​/{property_id} 

User x-auth-token for sending valid token to protected endpoints

Default Admin User
Email: admin@gmail.com

Password: admin

Online Resources
Online API Documentation - https://suzzy-propertypro.herokuapp.com/docs/

Frontend - https://suzzybliss.github.io/PropertyPro-Lite/UI/index.html

Pivot Tracker - https://www.pivotaltracker.com/n/projects/2354366
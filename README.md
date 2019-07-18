# PropertyPro-Lite
Andela Bootcamp Challenge for Cycle 46

[![Build Status](https://travis-ci.org/suzzybliss/PropertyPro-Lite.svg?branch=develop)](https://travis-ci.org/suzzybliss/PropertyPro-Lite) [![Coverage Status](https://coveralls.io/repos/github/suzzybliss/PropertyPro-Lite/badge.svg)](https://coveralls.io/github/suzzybliss/PropertyPro-Lite)  [![Test Coverage](https://api.codeclimate.com/v1/badges/f82076aacd50b1389ac9/test_coverage)](https://codeclimate.com/github/suzzybliss/PropertyPro-Lite/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/f82076aacd50b1389ac9/maintainability)](https://codeclimate.com/github/suzzybliss/PropertyPro-Lite/maintainability)

Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

# Technologies Used
<u1>
<li><a href='https://nodejs.org/en/' target='_blank' noreferral >Node</a> - Server Runtime Engine</li>
<li><a href='https://expressjs.com/' target='_blank' noreferral >Express</a> - MVC Framework</li>
<li><a href='https://www.postgresql.org/' target='_blank' noreferral >Postgres</a> - Database </li> 
<li><a href='https://cloudinary.com/' target='_blank' noreferral >Cloudinary</a> - Image Server </li> 
</u1>

# Features
<u1>
<li>User can signup as just user or agent</li>
<li>User can sign in</li>
<li>Admin can make or remove other users from admin role</li>
<li>User can reset his/her password</li>
<li>User(agent) can post property advert with multiple images</li>
<li>User(agent) can mark advert as sold</li>
<li>User(agent) can update advert</li>
<li>user(admin) can activate or deactivate advert</li>
</u1>

# API Endpoints

| Method  | endpoint                       | description                        |
  -------    ------------------------------   ----------------------------------
| POST	  |/auth​/signup	                |Register user                       |
| POST	  |/auth​/signin	                |User login                          |
| POST	  |/property	                   |Creating new property               |  
| GET	  |/property	                   |Get all property adverts            |
| GET ​	   |/property​/{property_id}	     |Get a specific property advert.     |
| PATCH	  |​/property​/{property_id}	     |Update property                     |
| PATCH	  |/property​/{property_id}​/sold	 |Mark a property as sold             |
| DELETE  |/property​/{property_id}	        |Remove a specific property advert.  |

# System Testing
<u1>

<li>Create a folder on your drive</li>
<li>Clone https://github.com/suzzybliss/PropertyPro-Lite.git from your terminal</li>
<li>From the terminal, cd into root directory i.e propertyprolite</li>
<li>Run npm install from your to download all the required dependencies</li>
<li>Create a .env file on the root directorty</li>
<li>Setup the following environmental variables inside .env file
<pre><code>CLOUDINARY_CLOUD_NAME=cloud_name
CLOUDINARY_API_KEY=pi_key
CLOUDINARY_API_SECRET=api_secret
JWT_SECRET=jsonwebtokensecret
TEST_DB=test_database_url
DATABASE_URL=prod_database_url</pre></code>
</li>
<li>Create a database with the following tables inside of models/travis.sql script file</li>
<li>Run npm run build to build the project for Production</li>
<li>Run npm start to start the server in Production</li>
<li>Run npm dev to start the server in Development</li>
<li>Using postman navigate to localhost:5008/api/v1/{endpoint} to test various endpoint</li>

## Note
The endpoints below requires you to send data to server with Form-Data <br/> 

Set file as the name for the file upload control for these endpoint to upload profile image

POST / localhost:5008/api/v1/auth​/signup
PATCH / localhost:5008/api/v1/​users <br/>

Set files as the name for the file upload control for these endpoint to upload advert images

POST / localhost:5008/api/v1/property​ <br/>
PATCH / localhost:5008/api/v1/property​/{property_id} <br/>

User x-auth-token for sending valid token to protected endpoints

# Default Admin User

Email: admin@gmail.com

Password: admin

#Online Resources

Online API Documentation - https://suzzy-propertypro.herokuapp.com/docs/

Frontend - https://suzzybliss.github.io/PropertyPro-Lite/UI/index.html

Pivot Tracker - https://www.pivotaltracker.com/n/projects/2354366
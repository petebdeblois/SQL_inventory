# SQL_inventory

https://lucid.app/lucidchart/89bf834f-1a56-41da-a71d-64a2779d4b9f/view?page=0_0#
https://www.guru99.com/database-normalization.html

https://www.youtube.com/playlist?list=PLM_i0obccy3uJ876-W_BKBzjd9L2ZGB4B
Video 2 -> 1:26:56
## Model a SQL Database

Every Record will have:
Created At - datetime
Updated At - datetime
Deleted At - datetime

## What Libraries will be Needed

### dependencies
 - bcrypt
 - compression
 - dotenv
 - express
 - helmet
 - jsonwebtoken
 - knex
 - morgan
 - objection
 - papaparse
 - pg
 - yup
### Dev dependencies

 - eslint
 - eslint-config-airbnb-base
 - eslint-config-prettier
 - eslint-plugin-import
 - eslint-plugin-prettier
 - prettier 
 - nodemon -> Will be used to keep the app active
 - supertest -> Pass in an express app, define endpoint and test. Define expectation
 - jest      -> It is a Test Runner. Needed to run the test

### Create the docker 
`docker-compose up`

### Connect to the containe
`docker ps`
`docker exec -t -i backend_db_1 bash`

`createdb inventory_app_test`

`psql -Uadmin -padmin`
`psql -Uadmin inventory_app`
`CREATE DATABASE inventory_app_test`

### create the first DB

`npx knex migrate:make initial`
`npx knex migrate:latest` Look in the migration folder and run the files that hasnt been run

### Rollback the latest changes 
`knex migrate:rollback`

### Needed for the REST API


### Bump the version 
`npm version patch -m "Upgrade to %s for reasons"

### RUn test
First we init jest
`npx jest init`
`npm test` -> Script in package.json

![GitHub](https://img.shields.io/github/license/petebdeblois/SQL_inventory?style=plastic)
![GitHub branch checks state](https://img.shields.io/github/checks-status/petebdeblois/SQL_inventory_backend)
![GitHub package.json version](https://img.shields.io/github/package-json/v/petebdeblois/SQL_inventory_backend)

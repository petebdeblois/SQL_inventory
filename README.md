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

### Created the docker 
`docker-compose up`

### create the first DB

`npx knex migrate:make initial`
`npx knex migrate:latest` Look in the migration folder and run the files that hasnt been run

### Rollback the latest changes 
`knex migrate:rollback`

### Needed for the REST API


### Bump the version 
`npm version patch -m "Upgrade to %s for reasons"


## Entities in an Home Inventory System

* [x] User
* [x] Item
* [x] Item Type
* [x] Manufacturer
* [x] Item Location
* [ ] Item Purchase Location
* [ ] Comment
* [ ] Warranty

## Seed the Database

* [x] User
* [ ] Countries - Partial, more to do!
* [ ] US States - Partial, more to do!
* [ ] Item Types
* [ ] Location

## API Endpoints

* [ ] Addresses
  * [x] Create
  * [x] List
  * [ ] Get One
  * [ ] Update
  * [ ] Delete
* [ ] Companies
  * [x] List
  * [ ] Get One
  * [ ] Create
  * [ ] Update
  * [ ] Delete
* [ ] Items
  * [x] List
  * [x] Create
  * [ ] Get One
  * [ ] Update
  * [ ] Delete
* [ ] Item Info
  * [x] List
  * [x] Create
  * [ ] Get One
  * [x] Update
  * [ ] Delete
* [ ] States
  * [x] List
  * [x] Create
  * [x] Get One
  * [ ] Update
  * [ ] Delete
* [ ] Users
  * [x] List
  * [ ] Create
  * [ ] Get One
  * [ ] Update
  * [ ] Delete

* [ ] Pagination

Using environment: development
User created: { password: '4c9b6dea1c95c30337d6b3abac8918' } {
  id: 1,
  email: 'cj@null.computer',
  name: 'CJ',
  password: '$2b$12$h7tARqANYPa58MYx8vqhWehfxiFuyp0mZ36T5Eff4HgmayMxhG7fu',
  last_login: null,
  created_at: 2020-12-29T23:59:30.029Z,
  updated_at: 2020-12-29T23:59:30.029Z,
  deleted_at: null
}

![GitHub](https://img.shields.io/github/license/petebdeblois/SQL_inventory?style=plastic)
![GitHub branch checks state](https://img.shields.io/github/checks-status/petebdeblois/SQL_inventory/main)

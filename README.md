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


### Created the docker 
`docker-compose up`

### create the first DB

`npx knex migrate:make initial`
`npx knex migrate:latest` Look in the migration folder and run the files that hasnt been run

### Rollback the latest changes 
`knex migrate:rollback`

### Needed for the REST API




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

User created: { password: 'f3205a25f02184c116296b1734fe31' } {
  id: 1,
  email: 'cj@null.computer',
  name: 'CJ',
  password: '$2b$12$HEX7eU1Y2cdyzh81Ayqpl.CjwhPq0xRxnGmXzuNozG7yyLQ7wtHz.',
  last_login: null,
  created_at: 2020-12-24T20:11:20.272Z,
  updated_at: 2020-12-24T20:11:20.272Z,
  deleted_at: null

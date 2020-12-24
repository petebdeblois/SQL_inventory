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



## Entities in an Home Inventory System

* [ ] User
* [ ] Item
* [ ] Item Type
* [ ] Manufacturer
* [ ] Item Location
* [ ] Item Purchase Location
* [ ] Comment
* [ ] Warranty

## Seed the Database

* [ ] User
* [ ] Countries - Partial, more to do!
* [ ] US States - Partial, more to do!
* [ ] Item Types
* [ ] Location

## API Endpoints

* [ ] Addresses
  * [ ] Create
  * [ ] List
  * [ ] Get One
  * [ ] Update
  * [ ] Delete
* [ ] Companies
  * [ ] List
  * [ ] Get One
  * [ ] Create
  * [ ] Update
  * [ ] Delete
* [ ] Items
  * [ ] List
  * [ ] Create
  * [ ] Get One
  * [ ] Update
  * [ ] Delete
* [ ] Item Info
  * [ ] List
  * [ ] Create
  * [ ] Get One
  * [ ] Update
  * [ ] Delete
* [ ] Pagination

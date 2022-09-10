
# Smart Contract Event Listener

The Project listens to the events emitted by a contract when transactions are done, the event details are listened by the sever and stored into a database(MongoDB/PostgreSQL)
In the frontend, the data is fetched using the API making calls from the database and displayed



## Branches

- **master** - MongoDB Database (Relational database)

- **postgresql** - PostgreSQL Database (Non-Relational Database)


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express

**Databases:** MongoDB, PostgreSQL


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Inside ./smartcontracts folder
`ALCHEMY_API_KEY`

`ETHERSCAN_API_KEY`

`PRIVATE_KEY`

### Inside ./backend folder (only for MongoDB branch - master)
`DATABASE_URL`

## PostgreSQL Setup - Postgres branch

Create a server with the following details :

`server name` - epnsserver

`host name` - localhost

`Port` - 5432

`Username` - postgres

`Password` - Enter your choice

Then in ./backend/index.js

```javascript
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'epnsdb',
	password: 'PASSWORD',
	dialect: 'postgres',
	port: 5432
});
```


## Installation

- Run ```npm i``` inside all the folders `backend`,`frontend`,`server`,`smartcontracts`
- Inside the `backend` folder, run ```node index```
- Inside the `server` folder, run ```node index```
- Inside the `frontend` folder, run ```npm start```

    
## Working

- **Listener Server** - When a transaction is executed, the event emitted is listened by the server and POST API is called to add response to the database
- **Frontend** - GET API call is made from the frontend to fetch the data from the database server and displayed


## Demo

https://vimeo.com/748336177


## Screenshots
- Homepage
![img](https://i.ibb.co/njH1b12/Screenshot-2022-09-10-at-9-59-18-PM.png[)
- Listener Server
![img](https://i.ibb.co/jGWS7TH/Screenshot-2022-09-10-at-9-58-42-PM.png)
- Database Server
![img](https://i.ibb.co/0sfr8LT/Screenshot-2022-09-10-at-9-58-58-PM.png)

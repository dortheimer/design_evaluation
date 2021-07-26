

# Requirements

* Node version 14
* A database that is supported by [Sequelize](https://sequelize.org/master/index.html) 

# Installation

First, make sure you have node installed on your system
```bash
node -v
````

Clone the repository and install dependencies:
```bash
git clone https://github.com/dortheimer/design_evaluation.git
cd design_evaluation
npm i
```



Set up a database (on any Sequelize supported database). This is a SQL example for creating a new schema:

```sql
CREATE DATABASE designEvaluation;
```

Create local config file by duplicating the default configuration file:

```bash
cp config/default.json config/local.json
```

Edit the local config file. Make sure to provide the database connection configuration. 

```bash
vi config/local.json
```

Now you can build the database schema. Run migrations to build the DB:
```bash
npx sequelize-cli db:migrate
```
## Running production server

Run the build command to produce an optimized front-end application:

```bash
npm run build
```

Start the server. You may want to run the server using a process manager like PM2.
```bash
node server.js
```

## Running a development server

The development server does not use an optimized build and updates the front-end with every code change. To run the development server we have to run two separate node processes.

```bash
npm start #this runs react-create-app
node server.js #this runs the back-end (in another terminal window)
```

You may also add some mock content to the DB
```bash
npx sequelize-cli db:seed:all

```

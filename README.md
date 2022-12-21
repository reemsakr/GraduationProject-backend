#  Backend Project
___Table of Contents___

- [ Backend Project](#backend-project)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Setup environment](#setup-environment)
  - [Running the application](#running-the-application)
  - [Built With](#built-with)
  - [Endpoints](#endpoints)
  - [Database Schema](#database-schema)


A  backend API written in NodeJS . This application has APIs for Users, Nearest Cars with Location.
## Getting Started

TThese instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.
### Prerequisites

You need the following modules and dependencies installed to run this project:

```bash
node 16          # To run the application
npm              # For dependency management
```
### Installing

Simply, run the following command to install the project dependencies:

```bash
npm
```
### Setup environment

First, create a `.env` file with all the required environment variables:

```bash
# .env
PORT=5000
# Set your database connection information here
Mongo_DB=gradProject
USER=reem
PASSWORD=123
# user

```
Now, create the database


```bash





Now, check if Mongo Atlas has the database `gradProject`, if not create it:


## Running the application

Use the following command to run the application in using node:

```bash
npm run start
```

The application will run on <http://localhost:5000/>.
## Running the unit tests



You may also use the Postman collection present in the repository for testing.
## Built With

- [NodeJS](https://nodejs.org/) - The JavaScript runtime
- [npm](https://npm.com/) - The dependency manager
- [db-migrate](https://db-migrate.readthedocs.io/en/latest/) - The database migration tool
- [Express](https://expressjs.com) - The web framework
- [TypeScript](https://www.typescriptlang.org/) - Types JS extension
## Endpoints

- See [REQUIREMENTS.md](./REQUIREMENTS.md) file


## Database Schema

 - See [REQUIREMENTS.md](./REQUIREMENTS.md) file

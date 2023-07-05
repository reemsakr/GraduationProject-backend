#  Backend Project
___Table of Contents___

- [ Backend Project](#backend-project)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Setup environment](#setup-environment)
  - [Running the application](#running-the-application)
  - [Built With](#built-with)


A  backend API is written in NodeJS. This application has APIs for Users, Nearest Cars with Location, Bumps, and Street Speed.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
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
DB='mongodb+srv://reem:123@cluster0.l0ktfho.mongodb.net/gradProject?retryWrites=true&w=majority'
# user
TOKEN_SECRET='my_secret_key'
#pusher
appId='1558016'
key='8f885166fac44cd34323'
secret='4aba1f8309023e73bc5f'
cluster='mt1'
#redis
REDIS_URI='redis-15412.c226.eu-west-1-3.ec2.cloud.redislabs.com'
REDIS_PASSWORD='m3exszZ2CWpD84ZGwX1x1Oh3ZmeXbzUg'
REDIS_PORT='15412'

```
Now, create the database

Now, check if Mongo Atlas has the database `gradProject`, if not create it:


## Running the application

Use the following command to run the application using node:

```bash
npm run start
```

The application will run on <http://localhost:5000/>.

You may also use the Postman collection present in the repository for testing.
## Built With

- [NodeJS](https://nodejs.org/) - The JavaScript runtime
- [npm](https://npm.com/) - The dependency manager
- [Express](https://expressjs.com) - The web framework
- [TypeScript](https://www.typescriptlang.org/) - Types JS extension
- [Redis](https://redis.io/) -  Caching data
- [Pusher](https://pusher.com/) - WebSoket tool
- [MongoDB](https://www.mongodb.com/) - Database platform


## Endpoints

- See [REQUIREMENTS.md](./REQUIREMENTS.md) file

## Database Schema

 - See [REQUIREMENTS.md](./REQUIREMENTS.md) file

# Stoic Bot

# Description
Stoic Bot is a minimalistic, extensible twitter bot for posting stoic quotes


# Getting Started:
This project is run with docker using docker-compose. Therefore, you need to install docker to run it.
See how to install docker engine [HERE](https://docs.docker.com/compose/install/).
Since this is run in docker containers, you don't need any dependencies installed locally.
I created two deployment configs here. 

# Running the application in docker
- create a .env file in the project root and copy the contents of the .env.sample into it
- Replace the keys in the .env file with your twitter developer account keys
- From here, you can either chose to run the development or production build

## Running the development container
- Run docker-compose -f docker-compose.dev.yml build 
- Run docker-compose -f docker-compose.dev.yml up -d  

## Running the production container
- Run docker-compose -f docker-compose.dev.yml build 
- Run docker-compose -f docker-compose.dev.yml up -d  

# Running the application locally
- Run nodeJs installation instructions [HERE](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)
- Run `npm i typescript` to install typescript 
- Run `npm run dev` to start the app in dev mode and `npm start` to start the app in production

# Bot configs

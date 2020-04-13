# Brawl Stars Stats

A community run webapp made with Node.js Express Framework for tracking and comparing stats for Supercell's mobile game, Brawl Stars. 

Demo: https://chillhopoverflow.github.io/Brawl-Stars-Stats/

# Developer Documentation

First you will need Node/Express to run the server
- Clone the repository
- Install Node/Express framework
- If you are using MacOS you can use brew to install node:
``` 
brew install node
```
- Once you have node you can install all relevant dependencies (while in repository root):
``` 
npm install
```
- You will need to register for a [Brawl Stars developer account](https://developer.brawlstars.com/#/) 
- Go to your account and generate an AWS Access Key 
- Create a .env file in the main directory
- Copy the generated key and paste it in the .env variable
- Now you can run the server with node or nodemon 
``` 
nodemon server.js
```

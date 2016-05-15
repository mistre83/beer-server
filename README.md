# beer-server

This repository is based on BeerLocker V.4 found here: https://github.com/scottksmith95/beerlocker/tree/master/beerlocker-4
I've made a couple of change in order to use it on iPhone application as API Service.

What Beer Server Use:

1. MongoDB as Database
2. NodeJS as Application Server

Installation Prerequisites
-------------------------

1. NodeJS: you can find your version here: https://nodejs.org/en/
2. MongoDB: you can find installation instruction on MongoDB Website

Install MongoDB on OSX:
--------------------------

To install MongoDB on OSX follow this steps

1. Install Brew (very simple, just follow the single line instruction at: http://brew.sh/)
2. Run `brew install mongodb` on OSX Platform
3. Create data directory: `sudo mkdir -p /data/db` 
4. Change directory permission: `sudo chown -R $USER /data/db``
5. Test MongoDB installation running the command `mongod`

Generate SSH Key to handle HTTPS Requests:
--------------------------

Go into the directory where you have clone this repository and hit this commands

1. `openssl genrsa -des3 -out server.enc.key 1024``
2. `openssl req -new -key server.enc.key -out server.csr``
3. `openssl rsa -in server.enc.key -out server.key``
4. `openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt`
5. 

When the server start, will find `server.key`and `server.crt`, so is very important that the certificates are in the server directory.

Run the server:
--------------------------

When the previous steps are done, you can just type `node server.js`and if all was gone right you should see the message `Server started at port 5001`

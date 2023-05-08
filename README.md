# APIDesign-HelloWorld

This is a repository containing a basic API, inspired by the memorable HelloWorld example invented by Brian Kernighan, that offers two functions: 
- one to say hello to the world
- one to say hello to the user specified as path parameter

Students are invited to check the code and, based on other APIs, generate new services

## To generate the skeleton of the service

Run the following command which will download (the first time) and run the OAS tools. The code will be generated in the folder specified during the execution of the command

`npx @oas-tools/cli init`


## To run the service

Move to the folder created by the previous command and run the following command

`npm start`

## To develop the client-side

Several packages are available to develop the client side. Among them, without any specific reason, we suggest to use `node-rest-client`. Documentation is available [https://www.npmjs.com/package/node-rest-client]

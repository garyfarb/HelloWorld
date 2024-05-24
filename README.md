# HelloWorld
 Simple microservice built with Node.js and Express.

## 1. Prerequisites:
1. Node.js (v20.x.x or higher)
2. npm (v10.x.x or higher)

 
 ## 2. Install Dependencies
 First clone the repository, then to install dependencies, run:
 
 `npm install`


 ## 3. Run the Application
 To run the application, run:

 `node src/app.js`
 
 The server will start running on [http://localhost:3000](http://localhost:3000)


   ### Example Request
   **GET /hello/:world** Returns a JSON message with Hello \<world\>.
   
   Request: `curl http://localhost:3000/hello/world`

   Response: `{"message": "Hello world"}`


   ## 4. Run Unit Tests
   To run unit tests, run:

   `npm test`



   
 

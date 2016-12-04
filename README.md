# react-redux-es6-webpack-starter
A simple project that include react and redux built with webpack and code with es6 which take a little different approach about the ownership of actions and reducers.

This starter kit is based on the great starter kit from [***learncodeacademy***](https://github.com/learncodeacademy/react-js-tutorials)
And I recommend their great react tutorial in [***YouTube***](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)

**So why create another react-redux starter kit???** Because I wanted to try another approach in regards to ownership of actions and reducers.  
All the tutorials and example I found used a global actions and reducers folders/files which in my experience from similar approach in angular (e.g global services and controllers) it is a call for complexity when the project grows.  
So I wanted to create a starter kit that has as much isolated components as possible by relating the actions and reducers correspond to the component as part of the component it self.  
**Is it working?** Yes it is.  
**Is it better?** You'll decide :)  
## Installation
Clone it and run ``npm install``
## Running the example
 - Running the web client - ``npm run dev:web`` and open the browser in ``http://localhost:8080``
 - Running the electron client - ``npm run dev:electron``
 - Running the server - on different tab run ``npm run dev:server``

The clients runs against a simple API server built in node which you can replace with any api server you like.  
The electron solution is the simplest there is.
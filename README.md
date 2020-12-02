# Yet Another React Todo App

This repo is a playground and the results of following a LinkedIn tutorial. The 'app' that resulted is a simple Todo app that makes ajax calls to a seperate node server (also in this repo as a zip) using Redux and Reselect for state management, Thunk for the ajax calls, and Mocha and Chai for simple tests. It serves as a proof of concept for a more modern React environment and the possible use cases for Redux and Styled Components. 

My thoughts - 
1. Redux is fine, but so are components that manage their own state and make their own ajax calls (in this example). Thought needs to be put in if the app needs to have a global state. The debugging tools that Redux provides is nice, though. [You might not need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
2. Styled Components/CSS-in-JS works fine for what it is. Styled Components are capable of being passed props and having conditional styling, but in real applications, components probably aren't the place to put your styled components in (like they are in the components of this app). 
3. This is more like a 'no duh' statement than anything else... The React environment is changing quickly. Although I was already familiar with the basic concepts of React (see the Tic Tac Toe repo), implementing it in a more modern way was different than what I was used to. 

## Quick start

1. Use Git to clone this repo.
2. Make sure you have [Node](http://nodejs.org) and NPM installed.
3. Just the first time in the directory: `npm install`.
4. To start the dev server: `npm run dev`. If you want the /dist dir to actually be created, `npm run build`. 
5. Unzip the included Node server, `npm install`, and `npm run start`. It should serve at port 8080. (It serves as an example server to make ajax calls to with Redux using Thunk - the server returns dummy 'Todos' and has routes to get, add, delete, and 'complete' them)
6. To test: `http://localhost:3000`.


## Technologies

1. Instead of using create-react-app or the likes, I installed React/Babel manually and custom wrote the webpack and babel config. Also, for ease of development, I installed React Hot Loader that makes changes immediately available in the browser. 
1. Redux and Reselect are used for state management throughout. 
1. Styled Components are used for the basic and conditional styling. 
1. Thunk is used for the async ajax calls and state updating. 
1. Mocha, Chai, Fetch Mock, Node Fetch, and Sinon are used for the tests. To run the tests: `npm run test`

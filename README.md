# money-tracker

This is a MERN (MongoDB, Express, React, Node) money tracker project.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

https://github.com/sjsaug/money-tracker/assets/128629486/44396cb1-f9cd-40fb-83ad-6f56f94ce117


## Setup

There will be no info for the app unless you add some :

### `.env files`

- Create a .env in the project directory with your REACT_APP_API_URL(when running locally use [http://localhost:4000/api](http://localhost:4000/api)).
- Create a .env in the /api directory with your MONGO_URL (url used for accessing your db on mongodb, use drivers option).

## Running Locally

In the project directory you can run :

### `yarn start`

- This runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Then cd into /api and run :

### `node index.js`

- You need to reload this (ctrl+c, run command again) if you make a change in /api/index.js.
- I prefer to use nodemon over node because it reloads automatically for you.
  - You can install nodemon with npm install -g nodemon, then run nodemon index.js.


## Deploying App

In the project directory you can run :

### `yarn build`

- This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

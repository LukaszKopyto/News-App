# News App

> Application to display the latest news from "The Guardian"

## Live demo

[https://lukasz-kopyto-news-app.netlify.app/#/](https://lukasz-kopyto-news-app.netlify.app/#/)

## Feature

- fetching articles from API: [https://open-platform.theguardian.com/explore/](https://open-platform.theguardian.com/explore/)
- division of articles into sections:
  - Politics
  - Sport
  - Business
- adding articles to bookmark for reading later (and removing)

## Technologies

- React
- React-router
- Axios
- Firebase
- Styled-components
- Eslint (airbnb config)
- Prettier

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To do
- add pagination on home page
- correct pagination (dynamic pagination, add "go to first" and "go to last" button)
- filter saved news into categories

## Available Scripts

To run this app in the development mode, you have to add .env file in root directory, with API key, and keys to access  Firebase Realtime Database.
```
REACT_APP_API_KEY = "xxxxxxxxxxxxxx"
REACT_APP_FIREBASE_API_KEY = "xxxxxxxxxxxxxx"
REACT_APP_AUTH_DOMAIN = "xxxxxxxxxxxxxx"
REACT_APP_DATABASE_URL = "xxxxxxxxxxxxxx"
REACT_APP_PROJECT_ID = "xxxxxxxxxxxxxx"
REACT_APP_STORAGE_BUCKET = "xxxxxxxxxxxxxx"
REACT_APP_MESSAGING_SENDER_ID = "xxxxxxxxxxxxxx"
REACT_APP_APP_ID = "xxxxxxxxxxxxxx"
````

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

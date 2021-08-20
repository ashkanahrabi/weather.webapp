## Weather WebApp

#### Description

This is a simple Weather Web Application based on OpenWeatherMap API.

It is developed with React.Js (using [create-react-app](https://create-react-app.dev/))


## Installation and Setup Instructions


###### You need to add 2 environment variables in order to run this application:
- REACT_APP_API_ENDPOINT: Which is the URL of a weather web service (check .env.example for the sample endpoint)
- REACT_APP_API_KEY: Which is the app id of OpenWeatherMap service
  
*(check the OpenWeatherMap dashboard for you private app id or simply use the one provided in .env.example which is the sample app id provided by OpenWeatherMap)*

***Please create a `.env` file in the root of the project and add two environment variables mentioned above with their values***

#### How to run the project
Make sure you added the `.env` file with proper key values.
After that with `node` and `npm` installed, run below commands in the following order:

1. Installing Dependencies:

`npm install`

2. Run the app:

`npm start`

3. You can now view weather.webapp in the browser:

`http://localhost:3000`


To Build the app, run:

`npm run build`


## Testing

The app uses [react-testing-library](https://testing-library.com/) and [jest](https://jestjs.io/) packages to run tests.

You can run the following command to run the tests with a coverage table:

`npm run test`
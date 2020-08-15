# Dash
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/psu-oss-group-personalOrganizers/helpful-organizers/blob/master/LICENSE)

Copyright © 2020 Michael Change, Jacob Crisan, Trevor Hensel, Shengjia He

## Project Participants:

- [Jacob Crisan](mailto:jacob.crisan@gmail.com)
- [Michael Change](mailto:micchang@gmail.com)
- [Shengjia He](mailto:shengjia@pdx.edu)
- [Trevor Hensel](mailto:hensel@pdx.edu)

## Project Description
Dash is a online application that will allow users to build personal dashboards with various features. At the moment we feature Google calendar integration, Gmail integration, a news feed and a weather update.

## License

This program is licensed under the "MIT License", Please
see the file ['LICENSE'](https://github.com/psu-oss-group-personalOrganizers/helpful-organizers/blob/master/LICENSE) in the source distribution of this
software for license terms.

## Contributors and Users

All contributors and Users are expected to follow all applicable guidlines in place:
-[Code of Conduct](https://github.com/J8cob1/dash/blob/master/CODE_OF_CONDUCT.md)

## Features/Testing

The application has the following features confirmed (all or mostly) functional via manual testing:
- Customizable Background Color
- Google Sign In
- Google Calendar Widget - Allows users to see events on their Google Calendars. Not configurable
- Google Mail Widget - Allows users to view emails associated with your account. Configurable
- Quotes Widget - Displays a quote. Not configurable
- Weather Widget - Allows users to get basic weather details for certain cities. Not configurable
- News Widget - Displays news events. Not configurable

## Tech stack
Fronted: React.js

Demo Deployment: Vercel

## Project roadmap

In this project, we expect to build a web app of collecting some Google popular software into a website, which is easy for users to use Google software. 

You can open [demo](https://dash-dusky.vercel.app/) to look at the version of this project

You can open [MVP Version](https://dash-dusky.vercel.app/) to look at the Minimum Viable Product version of this project (Finish on the Week 6)

You can use the ['Githubpage'](https://github.com/J8cob1/dash) to look at the code

## Setup/Installing/Building
 
Firstly, clone the repository using "git clone https://github.com/J8cob1/dash.git" to a repository of your choice and cd into the "dash" directory that was created

Secondly, running the app, you must:
- Setup a Google project with an OAth Client and the Gmail and Google Calendar API's activated. You will need to create an API key for the Google Calendar and Gmail APIs in order to use them with the front-end react application
- Create a .env file containing the following information:
  ```
  REACT_APP_GOOGLE_CLIENT_ID="*google project client id*"
  REACT_APP_GOOGLE_API_KEY="*google project api key*"
  REACT_APP_WEATHER_API_KEY="*use the openweather to get the api key, the link is: https://openweathermap.org/api*"
  REACT_APP_NEWS_API_KEY="*use Gnews to get the api key, the link is: https://gnews.io/*"
  ```
- Find somewhere to host the application if you want to run it on more than just your local computer. Vercel, as we used, is a good option

Lastly, to run a local development server:
- Run "npm install" (if you haven't already or are missing a package). This installs the project dependencies
- Run "npm start". This starts the local development server
- (See the create-react-app commands below for more information, including on how to build an optimized production build. Deploying is something else that won't be covered here)

## Bootstrapping

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Note

If there seem to be a lot of comments in certain parts of the source code, one of the group members was paranoid about citing his sources...

## Acknowledgements

We want to give special thanks to the following People/Projects as they allowed this project to happen with their open-source contributions.

-[Ionicons](https://ionicons.com/)

# Return Safe

[![license](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Table of Contents
*  [Description](#description)
*  [User Story](#user-story)
*  [Features of the Application](#features-of-the-application)
*  [Preview of Return Safe](#preview-of-return-safe)
*  [Contributors](#contributors)
*  [Links](#links)
*  [Installation](#installation)
*  [Usage](#usage)
*  [Built Using](#built-using)
*  [License](#license)

## Description

In order to relax social-distancing measures - like school closures and "stay at home" orders - our public health officials need a way to intensify their contact-tracing efforts. Contact tracing, which entails identifying people who have an infectious disease (and the people they may have been exposed to) and working with them to interrupt disease transmission. For COVID-19, this includes asking cases to isolate and contacts to quarantine at home voluntarily. alert people when they may have been exposed to the infection, and thus reduce contagion rates.

Return Safe is a contact-tracing application that does just that: preventing the spread of disease and transmission through a user's self-report of symptoms, geolocation tracking to notify the user of their whereabouts (monitoring where/who the user has been in contact with, from what distance, and for how long), and estimating the probability of contagion based on their interaction in their community.

Return Safe is a MERN-stack, Single Page Application (SPA) that utilizes Passport and JWT for encrypted user authentication, Redux to manage the application state of the user interface, react-calendar as a form component to select and navigate between dates, and the Geolocation API to track and return the user's location based on cell phone towers and WiFi nodes.

## User Story
~~~
AS A user  
I WANT to track my symptoms and my whereabouts in my community  
SO THAT I can interrupt disease transmission and make a safe return home.  
~~~

## Features of the Application
~~~
GIVEN a contact tracing application
WHEN I sign in and load the page
THEN a dashboard will render with a check-in form and a dynamic calendar.

WHEN  
THEN
~~~

## Preview of Return Safe

![Return Safe Landing Page](assets/images/returnSafeLandingPage.png)

The following animation demonstrates the complete application functionality:

![Return Safe Functionality Preview]()

To download the above video file of the application functionality, you may do so [here]().

## Contributors

- [Romie Hecdivert](https://github.com/rh9891)

- [Susan Holland](https://github.com/SEGH)

- [Alex Reichard](https://github.com/alreichard)

- [Aakanksha Sharma](https://github.com/asharma1398)

## Links

- [Deployed Application](https://return-safe.herokuapp.com)

- [Github Repository](https://github.com/asharma1398/Return-Safe)

## Installation

The application requires the following dependencies and/or package managers:

~~~
$ npm install axios bcryptjs body-parser classnames concurrently dotenv express if-env is-empty google-map-react jsonwebtoken jwt-decode materialize-css mongoose nodemon passport passport-jwt react react-dom react-calendar react-materialize react-redux react-router-dom react-scripts redux redux-thunk validator  
~~~

When downloaded, the application requires the input of `npm install` into the command line interface in order to download the contents of the `package.json`.

## Usage

The application can be initiated by inputting `npm start` into the command line interface and running the application on `localhost: 3000`.

## Built Using

Listed below are the frameworks, libraries, and guides that made building this application possible:

* [Express.js](https://expressjs.com/)
* [Google-Maps-React](https://www.npmjs.com/package/google-maps-react)
* [HTML Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* [JSON Web Token](https://jwt.io/)
* [Material](https://material.io/)
* [Materialize](https://materializecss.com/)
* [MongoDB](https://www.mongodb.com/)
* [Node.js](https://nodejs.org/en/)
* [Passport](http://www.passportjs.org/)
* [React](https://reactjs.org/docs/getting-started.html)
* [React-Calendar](https://www.npmjs.com/package/react-calendar)
* [Redux](https://redux.js.org/)

## License

This application does not currently hold any licenses.
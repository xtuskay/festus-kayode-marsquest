# festus-kayode-marsquest

## Overview

MarsQuest is a place where spaceflight enthusiast can keep track of space launches and information on space crafts.

### Problem

When looking for information about your favourite rocket or details on the next space launch, you find yourself needing to use mulitple sites to gather the information needed. Moving from multiple sites to gather information becomes tedious, disorienting and hard to keep track of.

### User Profile

- Space fans:
    - to look for previous and upcoming launches.
    - to look for details of existing and past space vehicles.
    - to look for current news on spaceflight and activities.
    - to look for jobs relating to the space industry.

### Features
 
- This app will feature a homepage that displays a few upcoming and past launches with some news snippets. 
- The "launches" page will have two sections displaying upcoming and previous launches exhaustively. 
- The "vehicles" page will display all space vehicles with a section for reusable vehicles. 
- The jobs page will consolidate jobs from multiples sources and diplay them from most recent to least recent.

## Implementation

### Tech Stack

- React
- TypeScript
- MySQL
- Express
- node.js
- Client libraries: 
    - react
    - react-router
    - react-router-dom
    - axios
- Server libraries:
    - express

    
### APIs

- https://api.nasa.gov/
- https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=max&explaintext&titles=List_of_orbital_launch_systems

### Sitemap

- Home page
- Launches (past and upcoming)
- Vehicles (reusable and non-resuable)
- Jobs section

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.
### Loading Page
![](./home.jpg)

### Launches Page 
    (./launches.jpg)

### Vehicles Page
    (./vehicles.jpg)

### Home Page
    (./home.jpg)

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.


## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.
- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing

- Deploy client and server projects so all commits will be reflected in production.

- Feature: Home page
    - Create GET request to populate recent launches

- Feature: Launches Page
    - Create GET /launches

- Feature: Vehicles Page
    - Create two sections, one for previous launches and the other for upcoming launches
    - Fetch data from API to populate both fields.

- Feature: Jobs Page
    - Fetch data from multiple APIs to update job section
    - Add states for Date added

- Bug fixes

- DEMO DAY

## Nice-to-haves




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

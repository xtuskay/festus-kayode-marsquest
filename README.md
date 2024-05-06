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
    - to look current events and news relating to the space industry.

### Features
 
- This app will feature a homepage that displays a few upcoming and past launches with some news snippets. 
- The "launches" page will have two sections displaying upcoming and previous launches exhaustively. 
- The "vehicles" page will display all space vehicles with a section for reusable vehicles. 
- The events page will display events and new relevant to the space industry.

## Implementation

### Tech Stack

- React
- TypeScript
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
- https://thespacedevs.com/llapi
- https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&     exlimit=max&explaintext&titles=List_of_orbital_launch_systems

### Sitemap

- Home page
- Events page
- Launches (past and upcoming)
- Vehicles (reusable and non-resuable)


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

- GET /2.2.0/launch/
    - "id": "e3df2ecd-c239-472f-95e4-2b89b4f75800",
            "url": "https://ll.thespacedevs.com/2.2.0/launch/e3df2ecd-c239-472f-95e4-2b89b4f75800/",
            "slug": "sputnik-8k74ps-sputnik-1",
            "name": "Sputnik 8K74PS | Sputnik 1",
            "status": {
                "id": 3,
                "name": "Launch Successful",
                "abbrev": "Success",
                "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
            },

- GET /2.2.0/event/
    - {
            "id": 2,
            "url": "https://ll.thespacedevs.com/2.2.0/event/2/",
            "slug": "crew-dragon-docking-with-iss",
            "name": "Crew Dragon docking with ISS",
            "updates": [],
            "last_updated": "2024-03-06T20:01:20Z",
            "type": {
                "id": 2,
                "name": "Docking"
            },
            "description": "Crew Dragon 1, launched on March 2, will attempt to dock autonomously with the International Space Station for the first time.",
            "webcast_live": false,
            "location": "International Space Station",
            "news_url": null,
            "video_url": null,
            "info_urls": [],
            "vid_urls": [],
            "feature_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_dm-2_cre_image_20200504065311.jpeg",
            "date": "2019-03-03T08:30:00Z",
            "date_precision": null,
            "duration": null,
            "agencies": [],
            "launches": [],
            "expeditions": [],
            "spacestations": [],
            "program": []
        },
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

- Feature: Events Page

- Feature: Vehicles Page
    - Create two sections, one for previous launches and the other for upcoming launches
    - Fetch data from API to populate both fields.

    
    

- Bug fixes

- DEMO DAY

## Nice-to-haves
- User profiles
- A jobs page with user profiles with related jobs related to their preferences.
- User settings where users can choose prefered launch locations




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

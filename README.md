# [HalalPlates-Web](https://halal-plates.appspot.com) - Halal Plates Web Project
## Installation

After cloning the repository, install dependencies:
```sh
cd <project folder>/halalplates-web
npm install
```
If for some reason npm fails or don't give wanted results run the yarn to (you should install yarn globally, I found on my linux machine that npm wasn't enough to run build command on windows it worked without it.):
```sh
yarn
```

Now you can run your local server:
```sh
npm run local
```

Server is located at http://localhost:3000

To do a local production build, run:
```sh
npm run prod
```
This creates a "build" folder to be served.


To deploy to Google App Engine (GAE), run:
```sh
npm run deploy-prod
```
This will call `npm run prod` first to bundle the assets using webpack-production-config, and will then call the Google App Engine deploy command `gcloud app deploy`.
Note: You need to have gcloud installed and configured for this. (https://cloud.google.com/sdk/)

IMPORTANT:
GAE uses npm start to run node applications. To serve the static `build` folder we are using `serve` npm module.

```sh
npm start
```

Note: To allow external viewing of the demo, change the following value in `webpack-dev-server.config.js`

```
host: 'localhost'  //Change to '0.0.0.0' for external facing server
```

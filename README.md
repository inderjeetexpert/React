# Carderock - React Project
## Installation

After cloning the repository, install dependencies:
```sh
cd <project folder>/react
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


Note: To allow external viewing of the demo, change the following value in `webpack-dev-server.config.js`

```
host: 'localhost'  //Change to '0.0.0.0' for external facing server
```

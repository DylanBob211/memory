## Memory

Classic game for training your visual memory

In order to install this app:

- download the project: `git clone https://github.com/DylanBob211/memory.git`
- navigate into the folder and install the dependencies: `npm install`

This app makes use of the [Unsplash API](https://unsplash.com/developers) to get random images so you must first obtain your API key

When you got your API key (the 'Access Key', NOT the 'Secret Key')
- create a .env file in the root directory of your project: `touch .env`
- paste your API key after the 'REACT_APP_UNSPLASH_API_KEY=' in the .env file: `echo REACT_APP_UNSPLASH_API_KEY=YOUR_API_KEY >> ./.env`

Now you are ready to run the app locally for developement

- run local dev-server: `npm start`
- run tests: `npm test`
- build app for production: `npm build`

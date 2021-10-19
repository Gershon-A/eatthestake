This project was forked from [Eatthestake](https://github.com/facebook/create-react-app).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Important:
`client/src/contracts` properly created when running `backend` e.g `truffle migrate --reset --network development` step and exists.
## Docker
The docker image available at `docker pull ghcr.io/gershon-a/eatthestake/medooza-stake-client:sokol`
Client
```shell
docker build . -t medooza-stake-client
```
Run for development:
```
docker run --name medooza-stake-client --env NODE_ENV=development -d -p 8181:4000 medooza-stake-client
```
Run for production:
```shell
docker run --name medooza-stake-client --env NODE_ENV=production -d -p 8080:4000 medooza-stake-client
```
The application should be running at  [localhost:8080] (http://localhost:8080) for production [localhost:8181] (http://localhost:8181)  for development.

## CI/CD
### build.yaml
The ci/cd installing the client on different node versions and run basic coverage tests.  
The project should be compiled and all relevant artifacts should exists in the `client/src/contracts/` folder.  

## PM2 auto deploy
Install dotenv-cli globally
  ```
  npm install -g dotenv-cli pm2
  ```
Start script as following:
```
pm2 start ecosystem.config.js --env production
```
Reload with different environment
```
pm2 restart/reload ecosystem.config.js [--env production]
```
## Available Scripts
With process manager:
### `pm2 start ecosystem.config.js --env production`
### `pm2 start ecosystem.config.js --env development`
### `pm2 start ecosystem.config.js --env staging`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

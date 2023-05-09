# Testerloop Frontend

This is the frontend repository for Testerloop. The backend repository is [here](https://github.com/testerloop/testerloop-server).

## Prerequisites

Before getting started, make sure you have the following installed:

- [NVM](https://github.com/nvm-sh/nvm) 
- [Node.js](https://nodejs.org/en/download/) (with v.18 set as the active version using NVM)
- [npm](https://www.npmjs.com/get-npm)

## Setup

1. Ensure NVM is installed and set to use Node version 18:

```bash
nvm install 18
nvm use 18
```

2. Clone the repository:

```bash
git clone git@github.com:testerloop/testerloop-frontend
cd testerloop-frontend
```

3. Install dependencies:

```bash
npm install
```

## Running

To start the frontend in development mode, run:

```bash
npm start
```

This will open the application in your default web browser and reload the page automatically when you make changes to the source code.

You can also open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Linting and Code Formatting

This project uses Stylelint and ESLint for linting SCSS, JavaScript, and TypeScript files. It also uses Prettier for code formatting.

To check for linting issues and code formatting, run:

```bash
npm run lint
npm run prettier
```

To automatically fix issues, run:

```bash
npm run lint:fix
npm run prettier:fix
```

## Building for production

To build the frontend for production, run:

```bash
npm run build
```

This will create a build directory containing the production-ready static files that can be served by a web server.

## Other Available Scripts

In the project directory, you can run:

### `npm run gql:build`

Runs both gql:schema and gql:compile scripts to update and compile the GraphQL schema and queries.

### `npm run storybook`

Starts the Storybook server on port 6006 and serves the static files from the public folder.

### `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

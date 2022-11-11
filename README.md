# Web3 Warchain - Game Server

## Setup and running

To run this game server and databases on development environment, you'll need:

-   `Yarn` >= v1.22.5
-   lastest versions of `docker` and `docker compose`
-   `node` >= v18.

Before all, you'll need make an copy of the `.env.default` file in this dir,
fill in and renaming this to `env.development`. After that, you should be able
to run these commands listed below:

-   nvm

If you have installed Node Version Manager - nvm, you can run this command to
use the project current node version: `nvm use`

-   packages installation

`yarn` or `yarn install`

-   build

`yarn build`

-   start development server

Run the command below and the app should run on the port defined in
`.env.production` file.

`yarn dev`

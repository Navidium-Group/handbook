# Navidium Engineering & Product Handbook

The handbook is built using [Docusaurus 2](https://docusaurus.io/).

There is a live running version of the website served through github pages here - https://navidium-group.github.io/handbook/

### Pre Requisites

1. Nodejs Installed (https://nodejs.org/en/download)
2. Yarn installed through npm (In 'Node.js command prompt' type: npm install --global yarn)

### Installation

Clone this repository, browse to it in your terminal and run

```
$ yarn
```
### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Manual Deployment

You can trigger a deployment to github pages from your local machine using the following

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

### Automatic Github Actions Deployment Workflow

The main branch is protected and only a PR from a branch can be used to merge onto master. Once a PR is created a test deployment runs to make sure everything as it should be. Once the PR is merged into main then another github action runs to deploy the docs to a public github pages endpoint

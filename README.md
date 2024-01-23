# React App Starter Kit
This is a React App Starter Kit, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing all dependencies
To install all dependencies, run:
### `npm install`

## Pre Installed Configuration
This Starter Kit has been pre-configured with:
<ul>
    <li>UI Library - Boostrap version 4.6.2</li>
    <li>Icons Library - Font Awesome 6 (CDN) </li>
    <li>React Hot Toast </li>
    <li>Routing - React Router version 5</li>
    <li>Firebase</li>
    <li>Firebase CLI Tools</li>
    <li>Authentication - Firebase Auth</li>
</ul>

## Running Locally
There are setups to complete before getting your Starter Kit up and running.

### Firebase Setup
<ol>
    <li>Go to console.firebase.google.com and create a new project</li>
    <li>Setup a web app project</li>
    <li>In Firebase: Go to <b>Project settings</b> -> <b>General</b> -> <b>SDK setup and configuration</b> -> Config</li>
    <li>Copy paste the values in order(top to bottom) into the <code>.env</code> file</li>
    <li>In Firebase: Click <b>Build</b> -> <b>Authentication</b> -> <b>Sign-in method</b> -><b>Google</b> -> turn on (DO NOT configure any web SDK/ client SDK)</li>
</ol>

Once done, run:
### `npm run start`
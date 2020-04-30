# 🥁 Eastenders Database - Step into Tech exercise

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Instructions](#instructions)

## 🖥 Prerequisites

Before you start, you'll need to install [docker](https://docs.docker.com/get-docker/) and the [serverless](https://www.serverless.com/framework/docs/getting-started#install-via-npm) framework.

You can use a programme like [Sequel Pro](https://www.sequelpro.com/) to inspect your database.
The login details for the database can be found in the [serverless.yml](server/serverless.yml) file.

## 🏃‍♀️ Getting started

Clone this project and navigate to the directory

```
git clone https://github.com/bbc/step-into-tech-practice-exercise
cd step-into-tech-practice-exercise
```

You will need 2 terminal windows for the next part as you need to run commands in the client and server directories:

### Server

The server includes a docker container, that has a MySQL database.

```
cd server
npm install
npm start
```

This will fire up your server, you can check it's working by visiting [http://localhost:4000/dev/characters](http://localhost:4000/dev/characters)

### Client

The client is built on top of [Create React App](https://github.com/facebook/create-react-app).

```
cd client
npm install
npm start
```

THis will fire up your app at [http://localhost:3000](http://localhost:3000)

## 🏗 Instructions

So far, this is a simple single page app that lists the current Eastenders characters;

##### 🕵️‍♀️ Filter by character or actor

- When a user starts typing, the array of characters on the homepage should filter depending on the value in the search bar
- The character array should reset to it's original value, if the text in the search bar has been deleted
- There should be an error message displayed if no results could be matched

##### 💜 Favouriting a character

In the database, there's an empty boolean column called `favourite`, to get this working you'll need to;

- Create a `PUT` endpoint that updates the value of the `favourite` column
- Add button for each character that's attached to a click handler. This handler should make a request to your new `PUT` endpoint
- Make characters that have been favourited appear in the `<Favourites />` component on the app

##### 💔 Unfavouriting a character

- Make sure the `PUT` endpoint can also update the value of the `favourite` column to be false
- These changes should then remove any characters from the `<Favourites />` component

##### 📝 Update a characters bio

There's also an empty text column in the database called `bio`

- Adapt your `PUT` endpoint so it can also update the bio column
- Create a component in your app that will allow you to enter some text (this could be a Modal, or a new page), and make a request to the `PUT` endpoint
- Display the `bio` text underneath each character (You don't have to have a bio for **every** character)

##### ↕️ Sorting

There are 2 buttons to sort the characters that currently aren't hooked up to anything

- Create a click handler for each button, that sorts the characters by their character name, or their actor's name

##### 🎨 CSS

- Make the images fade in when the characters first render
- Have a CSS animation trigger when you hover over a character (check out [animate.css](https://daneden.github.io/animate.css/) for some inspiration)
- The app is pretty basic at the moment, you can style it however you'd like!

##### 🟢 Accessibility

- The app should get a score of **100** when run through Chrome's [Lighthouse tool](https://developers.google.com/web/tools/lighthouse)
- All interactable elements (buttons, text inputs) should be able to be accessed using the keyboard only (you can test this by tabbing around the app)

##### 🧪 Testing

- Create unit tests for all the components. The app already includes one simple test which uses [React's testing library](https://github.com/testing-library/react-testing-library)

##### ⭐️ Extra features

If you have any ideas for new features, feel free to add them in!

> The [Movie Database](https://developers.themoviedb.org/3) is an Open API that allows you to search against TV shows and Actors. One idea could be to display the number of episodes each actor has been in?

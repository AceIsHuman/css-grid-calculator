# CSS Grid Calculator

A calculator built using the CSS grid property in a single page React application. This calculator performs the 4 basic operations (add, subtract, multiply, divide). Components are styled using styled-components 

## Motivation

CSS grid can be a really useful property. This project showcases it's use along the entire calculator by styling the display along with each button.

![css-grid-calculator-screenshot](https://user-images.githubusercontent.com/47653241/93497989-c92bc480-f8d6-11ea-92f8-d4b3fe43a319.png)

## Getting Started

To view this application, simply clone this repo to your local machine and `cd` into the `css-grid-calulator` directory.

Once in the proper directory run `yarn` to install dependencies, followed by `yarn start` to start the **devlopment environment**.

## Features

The calculator can perform *addition*, *subtraction*, *multiplication*, and *division* on numbers less than 12 digits in length due to the display being limited. A number longer than 12 digits will either result in an error or, in the case of a rational number, be reduced to fit the screen.

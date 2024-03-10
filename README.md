# eCom - an ecommerce project
[![image](https://i.gyazo.com/240457d6b5c19729ca4b6810349bc38c.jpg)](https://lighthearted-frangipane-039922.netlify.app)
## A simple website for finding and purchasing goods.
[![Netlify Status](https://api.netlify.com/api/v1/badges/293a5253-497a-411d-8332-289043ad976e/deploy-status)](https://app.netlify.com/sites/lighthearted-frangipane-039922/deploys)


# Summary

This project focuses on the primary needs for a ecommerce website.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the eCom website github.
This was a project assignment for Noroff university.

## Features

### Sleek design

- **Minimal, material design**: eCom is provided with a clean look and minimal style, highlighting each feature without compromise.

### Lookahead search bar

- **MUI Lookahead search**: Utilizing MUI's look-ahead search component, the user experience is streamlined for them - Allowing for quick access to the items available for purchase.

### Checkout and cart components

- **Reactive cart icon**:  The cart will display the amount of items added to it, allowing the user to keep track of their cart before checkout.
- **Checkout page**: The checkout page will display each item, with its price, image and control's to allow the user the option to increase or decrease the number of purchases of each item. Upon checkout, the user will receive confirmation of the purchase.
- **Real-time pricing**: If the user increases/decreases the quantity of an item, the price will be calculated and displayed in real-time.

### Products

- **Tags**: Products have tags related to what kind of product it is displayed, they provide no real functionality - but are a visual aid in knowing what kind of product is shown.
- **Reviews**: Some products have reviews, if multiple reviews exist - the average score of the reviews are displayed.

## Getting Started

To get started with eCom, follow these steps:

1. **Clone the repository to your local machine:**

   ```bash
   git clone https://github.com/skyfalir/eCom.git
   ```

2. **Install the necessary dependencies:**

    ```bash
    npm install
    ```

3. **start sass and live server:**

    ```bash
    npm run start
    ```

## Usage

Once the application is up and running, you can use eCom for the following purposes:

- **search bar**: To use the search bar simply start typing in a product name, the look-ahead will be displayed as soon as you select the search bar and will narrow its options depening on the input.
- **Cart**: To open the cart, click the cart icon. This will lead you to the checkout page.
- **Goods**: To add a product to cart, click the "add to cart" button.
- **Item quantity**: use the arrows in the cart to increase or decrease the quantity of goods purchased, this will update the price as well.

## Contributing

Contributions to eCome are welcomed! If you want to contribute to the project, please follow these guidelines:

1. **Fork the repository.**

2. **Create a new branch for your feature or bug fix:**

   ```bash
   git checkout -b feature/new-feature
   ```

2. **make your changes and commit them:**

    ```bash
    git commit -m "My new feature"
    ```

4. **push your changes to your fork:**

    ```bash
    git push origin feature/new-feature
    ```

5. **Create a pull request ont he main repository, describe your changes and why they should be merged with the project**

## License
This project is licensed under the MIT License.

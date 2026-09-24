# Online Shopping Project

A responsive product catalog built with **React**, **React Router**, **Axios** and **Bootstrap**. The application fetches product data from the Fake Store API, supports category filtering and provides dedicated product detail pages.

## Live demo

https://osb-online-shopping-project.netlify.app/

## Features

- Fetches product data from the Fake Store API
- Displays product cards with image, title and price
- Filters products by category
- Dedicated product detail pages
- Client-side routing with React Router
- Responsive Bootstrap-based layout
- Product ratings and descriptions
- Back navigation from product detail pages

## Tech stack

- React 18
- React Router
- Axios
- Bootstrap 5
- Font Awesome
- Fake Store API

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with hero section and product listing |
| `/products` | Product catalog |
| `/products/:id` | Product detail page |

## Product categories

The catalog can be filtered by:

- Men's clothing
- Women's clothing
- Jewellery
- Electronics

## Data source

Product data is loaded from:

```text
https://fakestoreapi.com/products
```

Individual product details are loaded from:

```text
https://fakestoreapi.com/products/:id
```

## Local setup

### 1. Clone the repository

```bash
git clone https://github.com/omersb/Online_Shopping_Project.git
cd Online_Shopping_Project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000/
```

## Preview

![Online Shopping Project](online-shopping-project.gif)

## Notes

This project focuses on frontend product browsing and product-detail flows. The navigation contains UI links for login, registration and cart, but those flows are not implemented as application routes in the current version.

## Author

**Ömer Said Bulduk**

- Portfolio: https://omersb.dev/
- GitHub: https://github.com/omersb
- LinkedIn: https://www.linkedin.com/in/omersaidbulduk/

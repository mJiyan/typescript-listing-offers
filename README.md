# Listing and Paginating the Car list - Sixt Code Challenge

This is a list application and it is created for the Sixt company in order to show coding skills. Client-side is built using React.js, and the backend-side is created with Node.js (Express.js). 

I put the Express.js between the client and the API server because the API server is not accepting requests from the browser.

Created the project using Typescript and Redux(Thunk). 

Wrote unit tests for the project components using Jest and Enzyme libraries.

Used the Tailwind, in order to, create responsive designs. I used Tailwind because it is really easy to use and it increases the readability of the codes.

Also added Webpack and Babel, in order to increase the appliction performance.

Added Eslint, and Prettier. Also, added Husky in order to prevent pushing badly formatted codes.

Also Dockerized all applications.

## Table of Contents
- [Project Overview](#projectoverview)
- [Installation](#installation)
- [Test](#test)
- [Structure](#structure)
- [Support](#support)
- [Contributing](#contributing)


### ProjectOverview

A short overview of the project

![GIF](./sixtOffer.gif)

## Installation
### with Docker
```sh
git clone https://github.com/mJiyan/typescript-listing-offers.git
cd typescript-listing-offers
docker-compose up --build
-> Open your browser at http://0.0.0.0:8080 
```

### manually
```sh
git clone https://github.com/mJiyan/typescript-listing-offers.git
cd typescript-listing-offers/server
yarn
yarn start

cd typescript-listing-offers/client
yarn
yarn start
Open your browser at http://0.0.0.0:8080 
```


## Test
```sh
git clone https://github.com/mJiyan/typescript-listing-offers.git
cd typescript-listing-offers/server
yarn
yarn test

cd typescript-listing-offers/client
yarn
yarn test
```


## Structure
```
├─ client
│   ├─ __test__
│   │  ├─ setup
│   │  │  └─ setupTest.js
│   │  ├─ Components
│   │  │  ├─__snapshots__
│   │  │  │  ├─ Card.test.js.snap
│   │  │  │  ├─ CardList.test.js.snap
│   │  │  │  ├─ ErrorCard.test.js.snap
│   │  │  │  ├─ Header.test.js.snap
│   │  │  │  ├─ Loading.test.js.snap
│   │  │  │  └─ Pagination.test.js.snap
│   │  │  │
│   │  │  ├─ Card.test.js
│   │  │  ├─ CardList.test.js
│   │  │  ├─ ErrorCard.test.js
│   │  │  ├─ Header.test.js
│   │  │  ├─ Loading.test.js
│   │  │  └─ Pagination.js
│   │  └─ Mock
│   │     └─ defaultState.js
│   ├─ .huksy
│   │  ├─ pre-commit
│   │  └─ pre-push
│   ├─ public
│   │  └─ index.html
│   │
│   ├─ src
│   │  ├─ assets
│   │  │  ├─ images
│   │  │  │  ├─ exclamation.png
│   │  │  │  ├─ fallbackImage.png
│   │  │  │  └─ sixt-logo.png
│   │  │  └─ style
│   │  │     └─ tailwind.css
│   │  │
│   │  ├─ components
│   │  │  ├─ Card
│   │  │  │  └─ index.tsx
│   │  │  ├─ CardList
│   │  │  │  └─ index.tsx
│   │  │  ├─ ErrorCard
│   │  │  │  └─ index.tsx
│   │  │  ├─ Header
│   │  │  │  └─ index.tsx
│   │  │  ├─ Loading
│   │  │  │  └─ index.tsx
│   │  │  ├─ Pagination
│   │  │  │  └─ index.tsx
│   │  │  └─ index.tsx
│   │  │
│   │  ├─ redux
│   │  │  ├─ actions
│   │  │  │  └─ Offer
│   │  │  │     ├─ index.ts
│   │  │  │     └─ types.ts
│   │  │  └─ reducers     
│   │  │     ├─ Offer
│   │  │     │   └─ index.ts
│   │  │     └─ index.ts
│   │  ├─ services
│   │  │  ├─ api.js
│   │  │  └─ constants.js
│   │  │
│   │  ├─ views
│   │  │  ├─ Error
│   │  │  │  └─ index.tsx
│   │  │  ├─ Offers
│   │  │  │  └─ index.tsx
│   │  │  └─ index.tsx
│   │  │
│   │  ├─ customd.d.ts
│   │  ├─ index.tsx
│   │  └─ Store.ts
│   │
│   ├─ .dockerignore
│   ├─ .eslintrc
│   ├─ .gitignore
│   ├─ .prettierrc
│   ├─ babel.config.js
│   ├─ Dockerfile
│   ├─ jest.config.js
│   ├─ LICENSE
│   ├─ postcss.config.js
│   ├─ tailwind.config.js
│   ├─ tsconfig.json
│   ├─ package.json
│   └─ webpack.config.js
├─ server
│   ├─ src
│   │  ├─ api
│   │  │  ├─ controllers
│   │  │  │  └─ offersController.js
│   │  │  └─ routes
│   │  │     ├─ offersRoutes.js
│   │  │     └─ routeManager.js
│   │  ├─ config
│   │  │  └─ index.js
│   │  ├─ loaders
│   │  │  ├─ express.js
│   │  │  └─ index.js
│   │  └─ app.js
│   ├─ __test__
│   │  └─ api
│   │     ├─ controllers
│   │     │  ├─ offers.test.js
│   │     │  └─ index.test.js
│   │     └─ helpers
│   │        └─ test.model.json
│   ├─ .dockerignore
│   ├─ .env
│   ├─ .gitignore
│   ├─ Dockerfile
│   ├─ LICENSE
│   └─ package.json
├─ docker-compose.yml
└─ README.md
```

## Support

Please [open an issue](https://github.com/mJiyan/typescript-listing-offers/issues) for support & suggestions.


## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/mJiyan/typescript-listing-offers/compare).
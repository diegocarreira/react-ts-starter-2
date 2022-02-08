# React TS Starter 2 (Material Design)

A crud of customers + login to be a base for new projects (using React + TS + Material UI)


## Tech

- React
- Typescript
- MUI (for Material Design)[https://mui.com/]

- SCSS
- Context

- ESlint
- Prettier

- Axios
- Formik
- Yup
- Testing-library (For Unit tests)
- Cypress (For Integration and e2e tests)

## Installation

`git clone https://github.com/diegocarreira/react-ts-starter-2.git`

`yarn` OR `npm install`


## Run fake backend api with json-server

`npm install -g json-server`

`json-server --watch db.json --port 3004`
or
`npx json-server --watch db.json --port 3004`


## Run project dev

`yarn start` OR `npm start`

---

### To execute unit test checking
`yarn test`

### To execute cypress integration test checking (on terminal)
`yarn cy:run`

### To execute cypress integration test checking with screen (browser)
`yarn cy:open`
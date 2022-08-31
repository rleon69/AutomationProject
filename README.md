### Postman Collection and Test Cases
- #### Make sure the backend server is running when testing the postman collection, the files for the test cases and the collection can be found [Here](https://drive.google.com/drive/folders/1uoFPsRXI-Kt-8vIUXeoyOA9md9YiaG9Y?usp=sharing)

> 🚩 **Note**
> This application is not of my property, I only used it for testing purposes.

## Getting Started

> **Note**
> You can login to the app with any of the [example app users](./data/database.json#L2). The default password for all users is `s3cret`.  
> Example users can be seen by running `yarn list:dev:users`.

### Prerequisites

The only requirement for this project is to have [Node.js](https://nodejs.org/en/) **version 14** installed on your machine. Refer to the [.node-version](./.node-version) file for the exact version.

### Installation

```shell
yarn install
```

#### Mac M1 chip users will need to prepend `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true`.

```shell
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
```

### Run the app

```shell
yarn dev
```

### Start Cypress

- Run the next command to avoid time out errors

```shell
npx cypress verify
```

- Open Cypress


```shell
yarn cypress:open
```

> **Note**
> The username and password are defined globally in [cypress.env.json](./cypress.env.json). As this is a testing user, their values weren't removed, please be aware of the data you leave in the application code.

## Tests

| Type | Location                               |
| ---- | -------------------------------------- |
| ui   | [cypress/tests/ui](./cypress/tests/ui) |

## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

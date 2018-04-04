# Enterprise React Boilerplate

This is going to design monorepo architecture for complicated/huge modern web application with react.js tech stack such as create-react-app, next.js and universal components

## Features

* Monorepo Approaching
* Design Ops & Design System Language
* Pre-configuration, -configurable
* Guaranteed Consistency
* Thorough Commit Validating and Code Cleaning

## Structure

```bash
|-- services
  |-- components
  |-- styleguide
  |-- web-spa
  `-- web-ssr
```

## How to use

```bash
mkdir my-web-workspace
cd my-web-workspace
curl https://codeload.github.com/rhiokim/monorepo-sample/tar.gz/master | tar -xz --strip=1

lerna bootstrap

# run all services which are web-spa, web-ssr and styleguide
# web-ssr 3000 port
# web-spa 3001 port
# styleguide 3009 port
npm run dev
```

## TODO

* [ ] Sass-based styleguide
* [ ] Theme with React.js context api
* [ ] Test environment with Jest

## LICENSE

UNLICENSED
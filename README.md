# Simple online store with Angular

A simple online store with basic functionality based on the [official Angular tutorial](https://angular.io/start).

You can [view a Demo here](https://angular-simple-online-store.web.app).

## Table of contents
- [First steps](#First-steps)
- [Open app on a development server](#Open-app-on-a-development-server)
- [Code scaffolding](#Code-scaffolding)
- [Build](#Build)
- [Running unit tests](#Running-unit-tests)
- [Running end-to-end tests](#Running-end-to-end-tests)
- [Further help](#Further-help)

---

## First steps
You want run this app on your local machine? Then ...

- Install the latest Node.js LTS version.
- Open a shell and navigate to the project folder where you git-cloned or downloaded this source code.
- Now run `npm install -g @angular/cli` to install Angular.
- At last run `npm install` to download and install all dependencies.
- You now can start the app on your local development server which you already setup with these steps.

## Open app on a development server
Run `npm start` for a dev server. It will then execute `ng serve --open` and opens the web browser to navigate to `http://localhost:4200/`.

OR:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artefacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

~~~
ng build --prod
~~~

This production build which you can find in the `dist/` directory is ready for deployment. The files in the `dist/my-project-name` folder are static. This means you can host them on any web server capable of serving files (such as Node.js, Java, .NET), or any backend (such as Firebase, Google Cloud, or App Engine).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# MovieApp

## Docker Instructions

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Docker**: Install Docker on your local machine.

### Getting Started with Docker

These instructions will help you set up and run the Angular application in a Docker container.

1. Install project dependencies by running:

   `npm install`

2. Build the project by running:

   `ng build`

3. Build the Docker image for the Angular app:

   `docker build -t movie-app .`

4. Run the Docker container, mapping port 8080 on your host to port 80 in the container:

   `docker run -p 8080:80 movie-app`

5. Access the Angular app in your web browser by navigating to `http://localhost:8080`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

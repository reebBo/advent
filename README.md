# Advent


## ng add ngx-bootstrap
## ng add ngx-bootstrap  --component collapse
## ng add ngx-bootstrap  --component modals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
# advent
 
 ## warnings

 WARNING in budgets, maximum exceeded for initial
https://stackoverflow.com/questions/53995948/warning-in-budgets-maximum-exceeded-for-initial

angular.json file and find budgets keyword. 

    "budgets": [
       {
          "type": "initial",
          "maximumWarning": "2mb",
          "maximumError": "5mb"
       }
    ]

  increase the maximumWarning value to prevent this warning, i.e.:

    "budgets": [
       {
          "type": "initial",
          "maximumWarning": "4mb", <===
          "maximumError": "5mb"
       }
    ]

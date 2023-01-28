## Advent

======================================================
## ng add ngx-bootstrap
## ng add ngx-bootstrap  --component collapse
## ng add ngx-bootstrap  --component modals

======================================================
## This version of CLI is only compatible with Angular versions ^15.0.0 but Angular version 12.1.13 was found instead.
to upgrade angular:
after trying every trick in the book, from ng update, to npm uninstall and install, to --legacy-peer-dep,
what really finaly helped is:
- remove node_modules
- remove package-lock.json
- run the following commands (dependencies in package.json are automatically updated):
npm i -g npm-check-updates
ncu -u
npm install

npm i bootstrap@4.6.0
 "build": {
    "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.css",
              "src/styles.scss"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]
         }
======================================================

## TO USE TOOLTIPS FROM  ngx-bootstrap (after adding ngx-bootstrap to project)
# https://www.npmjs.com/package/ngx-bootstrap
# https://valor-software.com/ngx-bootstrap/#/components/tooltip?tab=overview
1. import { TooltipModule } from 'ngx-bootstrap/tooltip';
2. imports: [TooltipModule.forRoot(),...]
3. <button type="button" class="btn btn-primary"
        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Simple demo
   </button>

======================================================

## font awesome 
https://fontawesome.com/docs/web/style/size 
# Literal Sizing
  <i class="fa-solid fa-camera fa-1x"></i>
  <i class="fa-solid fa-camera fa-2x"></i>
  <i class="fa-solid fa-camera fa-3x"></i>
  <i class="fa-solid fa-camera fa-4x"></i>
  <i class="fa-solid fa-camera fa-5x"></i>
  <i class="fa-solid fa-camera fa-6x"></i>
  <i class="fa-solid fa-camera fa-7x"></i>
  <i class="fa-solid fa-camera fa-8x"></i>
  <i class="fa-solid fa-camera fa-9x"></i>
  <i class="fa-solid fa-camera fa-10x"></i>

# Relative Sizing
fa-2xs 	0.625em 	10px
fa-xs 	0.75em 	12px
fa-sm 	0.875em 	14px
fa-lg 	1.25em 	20px
fa-xl 	1.5em 	24px
fa-2xl 	2em 	32px

======================================================

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
 
======================================================

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
======================================================

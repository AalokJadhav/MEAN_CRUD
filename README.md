# MEAN Stack CRUD Operations

****
This is the Project about CRUD Operations using Angular, NodeJs, MongoDB, ExpressJs etc...

A single page application with full CRUD functionality, developed using Angular 9, MongoDB, ExpressJS, NodeJs.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.1.

**Please support this project by simply putting a Github star ⭐. 🙏 Thanks**

## Development environment

    1. Angular CLI
    2. Angular 9
    3. MongoDB, MongoDB Compass
    4. ExpressJS
    5. Mongoose
    6. Postman
    7. VS Code Editor

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

    ##  Steps for NodeJs

		1. Download NodeJs installation file from official website then install it.
		2. Download MongoDB and Install.
		3. In cd command open the bin folder path where mongod.exe file place.
		4. Create db path for our Database. it start the MongoDB Server.
		5. Install default Management tools MongoDB Compass.
		6. Create Database and Collection in Compass.
		7. Install Angular using npm install -g @angular-cli
		8. in VS Code Editor create NodeJs Folder and open in VS Code.
		9. Open NodeJs in cmd and npm init for creating package.json file.
	       10. install npm i express mongoose body-parser --save
             11. Create db.js file for conneting mongodb database.
  
			In db.js file require mongoose for connecting database and shows error or success message.
  
             12. craete root file ie. index.js for listeing port 3000
             13. create models folder with employee.js file for required schema to implement.
             14. create controller folder with employeeController.js file for Create, Read, Edit, Delete Operations 
		   using router.get, router.post, router.delete, router.put


    ##  Steps for Angular 
	
		1. Cteate new project using ng new projectname command.
		2. Open the Angular project and run usng ng serve --open with default port 4200.
		3. For Designing the Application I use Materialize.
		4. I also use material icons.
		5. Created employee component, model class and service.
		6. After Completed Code we have to connect NodeJs And Angular Project.
		7. We need cors package for connect.
		
			CORS : CORS is a node.js package for providing a Connect/Express middleware that can be used to enable
				   CORS with various options.
				   command : npm i cors
				   
		8. Require the cors in index.js
		9. use middleware app.use for request PORT number.
		
			ie. app.use(cors({ origin: 'http://localhost:4200' }));
		10. Complte the code for employee component, employee.service, etc...

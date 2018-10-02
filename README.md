# Node Job
**project description**: This was a test for a job using GraphQL and Apollo Server

## Project Setup

 1. clone or download the repository
 2. install required dependencies by running: `npm install`
 3. launch MySQL server and create your database ( note: tables will be created automatically by sequelize )
 4. Override project configuration inside config/server.config.js:



	    development: {
			database: {
				host:  'localhost',
				name:  'node-job',
				username:  'root',
				password:  '',
			}
		},

		production: {
			database: {
				host:  env.DATABASE_HOST,
				name:  env.DATABASE_NAME,
				username:  env.DATABASE_USER,
				password:  env.DATABASE_PASSWORD,
			}
		}

5. Launch the development server by running `npm run dev`
6. navigate to `localhost:4000` in your browser to use the GraphQL interface


## Project Build
 1. build the source files from es6 to es5 by running the `npm run build` command
 2. run `npm start` to start the project using the built files
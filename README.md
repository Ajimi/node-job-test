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
    
5. Launch the development server by running `npm start`
6. navigate to `localhost:4000` in your browser to use the GraphQL interface

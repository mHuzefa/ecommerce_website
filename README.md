
# Vendor Shop Management

This project consists of separate directories for the backend (Node.js and MySQL) and frontend (NextJS 14).

## Backend Setup

### Prerequisites
- Node.js installed on your machine
- MySQL installed and running locally or accessible remotely


### Installation
1. Navigate to the `backend` directory: `cd backend`
2. Install dependencies: `npm install`
3. Configure the database connection in `db/database.js`
4. Run the database migrations: `npm run db:migrate`
5. Seed data of Locations and Shops: `npm run db:seed`
6. Start the backend server: `npm start`

Note: Undo the seeding by `npm run db:seed:undo`
## Frontend Setup

### Prerequisites
- Node.js installed on your machine

### Installation
1. Navigate to the `frontend` directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the frontend development server: `npm start`

### Usage
- Access the frontend application by navigating to `http://localhost:3000` in your web browser. And Backend server will be running at `http://localhost:8080`

## Folder Structure

### Backend
- `config`: Configuration file of Sequilize.
- `migrations`: Database migration scripts (Currently Empty).
- `seeders`: Seeding files
- `models`: Database models.
- `routes`: API routes.
- `controllers`: Request handlers.
- `index.js`: Entry point for the backend server.

Here's an overview of the main libraries used in the `package.json` for the backend:

##### Dependencies:
1. **express**: A web application framework for Node.js, providing a robust set of features for building APIs and web applications.
2. **body-parser**: Middleware for parsing incoming request bodies in Express applications.
3. **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications, allowing controlled access to resources from different origins.
4. **mysql2**: MySQL client for Node.js, allowing the application to interact with MySQL databases.
5. **sequelize**: An ORM (Object-Relational Mapping) library for Node.js, providing a powerful interface for interacting with SQL databases using JavaScript objects and functions.

### Development Dependencies:
1. **nodemon**: Utility for automatically restarting the Node.js application when changes are detected, enhancing the development workflow by eliminating the need for manual server restarts.
2. **sequelize-cli**: Command-line interface for Sequelize, providing commands for generating migrations, models, and seeds, as well as other database-related tasks.

### Frontend
- `public`: Public assets and HTML template.
 - `components`: Reusable React components.
 - `pages`: Individual pages or views.
 - `services`: Backend API service functions.
 - `context`: Handling Global States
 - `App.js`: Main component.
 - `index.js`: Entry point for the frontend application.

Here's an overview of the main libraries used in the `package.json` for the frontend:
##### Dependencies:
1. **@emotion/react**: Enables styled components with CSS-in-JS.
2. **@emotion/styled**: Provides styled components for Emotion.
3. **@mui/material**: Material-UI library for building UI components following Material Design guidelines.
4. **@tanstack/react-query**: React Query library for managing asynchronous data fetching.


**Note: A lot can be improved in this code but due to shortage of time, this is what I have done. Please share the feedback of any improvements you suggest. Thanks**

Made By: Huzaifa

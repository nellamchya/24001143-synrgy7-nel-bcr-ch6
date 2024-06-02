# README.md

## Description
This is a simple REST API for a cars management system with authentication & authorization features. The API has three roles: superadmin, admin and customer.
- Users can register for themself
- Superadmin and admins can create, view, update, and delete cars.
- Users can only view available cars.
- Superadmin can register new admin.
- Superadmin, admins and users can login & get info current user.

## Installation
To install this API, you need to have Node.js installed on your machine. You can download it [here](https://nodejs.org/en/). After installing Node.js, you can clone this repository by running the following command in your terminal:

```bash
git clone https://github.com/nellamchya/24001143-synrgy7-nel-bcr-ch6
```

After cloning the repository, navigate to the project directory and run the following command to install the dependencies:

```bash
npm install
```

After installing the dependencies, you need to copy the `.env.example` file to `.env` and fill in the necessary environment variables.

```bash
cp .env.example .env
```

## Usage
To start the API, run the following command in your terminal:

```bash
npm start
```

The API will be running on `http://localhost:8000`.

### Auth
#### Auth Superadmin
- POST `/api/v1/superadmin/auth/register` - Register a new admin

#### Auth For Admin & User
- POST `/api/v1/auth/login` - Login an superadmin, admin & user
- POST `/api/v1/auth/register` - Register a new user
- GET `/api/v1/auth/me` - Get info current user

### Admin & Superadmin
#### Cars
- GET `/api/v1/cars` - Get all cars
- POST `/api/v1/cars` - Create a new car
- GET `/api/v1/cars/:id` - Get a car by ID
- PUT `/api/v1/cars/status/:id` - Update a car by ID
- DELETE `/api/v1/cars/:id` - Delete a car by ID

### Users
#### Cars
- GET `/api/v1/cars` - Get all available cars

## Authors
- Nellam Cahyaningrum

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Knex.js](http://knexjs.org/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Typescript](https://typescriptlang.org/)

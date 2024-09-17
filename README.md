# Project Name

Wentzel Design AWS Boilerplate

## Introduction

This project is a boilerplate for AWS applications that utilize Amazon RDS SQL database. It provides a starting point for setting up the backend environment and includes necessary dependencies for building a web service.

## No database

If you only need a Vite + React boilerplate with a password-protected admin, you can delete the `backend` folder and create a new `.env` file in the root directory. In the `.env` file, set the `ADMIN_PASSWORD` variable to your desired password. This will allow you to secure the admin section of your application.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

```bash
npm install axios cors dotenv express mysql2 react react-dom react-router-dom tailwindcss vite concurrently
```

```bash
npm install
cd backend
npm install
```

## Configuration

1. Open the `.env` file located in the `/backend` directory.
2. Replace the example data with your own backend environment configuration.
3. in the controllers is there is a example where you need to change to your table

## Usage

To run the project, from the WD-Boilerplate and the node server execute the following command:

```bash
npm run dev
```

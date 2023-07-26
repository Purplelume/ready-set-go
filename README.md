# Ready Set Go - Crowdfunding Platform

Welcome to Ready Set Go, a crowdfunding platform that allows users to create and back projects in various categories. This application is built with React, Express.js, GraphQL, Apollo Client, Node.js, and MongoDB.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication: Users can sign up and log in to create and back projects.
- Project creation: Logged-in users can create new projects with details like title, description, category, goal, start date, and end date.
- Project backing: Users can back projects by providing financial support to help the creators reach their goals.
- Project viewing: Users can browse and view existing projects with details such as title, description, funding progress, start date, and end date.
- User profile: Users can view their profile with details of their created projects and backed projects.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ready-set-go.git
```

2. Install dependencies for both the server and the client:

```bash
cd ready-set-go
npm install
cd client
npm install
```

3. Create a **.env** file in the root directory and set the following environment variables:

```bash
MONGODB_URI=your_mongodb_uri
SECRET_KEY=your_secret_key_for_jwt
```

4. Run the development server:

```bash
npm run dev
```

5. The application should now be running on "http://localhost:3000".

## Usage

1. Visit the application in your web browser by navigating to **http://localhost:3000**.
2. Sign up or log in to your account.
3. Create a new project by providing all the necessary details.
4. Browse and view existing projects to back projects created by other users.
5. View your profile to see your created projects and backed projects.

## Technologies Used

- React: Front-end library for building user interfaces.
- GraphQL: Query language for APIs and a runtime for executing those queries.
- Apollo Client: Fully-featured, production-ready GraphQL client for React.
- Node.js: JavaScript runtime for server-side development.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing application data.
- Bootstrap: CSS framework for building responsive and modern designs.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

1. Fork the repository from the `main` branch.

2. Create a new branch with a descriptive name:

```bash
git checkout -b feature/new-feature
```

3. Make your changes and commit them:

```bash
git commit -m "Add new feature"
```

4. Push your changes to your forked repository:

```bash
git push origin feature/new-feature
```

5. Create a pull request into the main branch of the original repository.

## Deployed Applicaion

Visit [Live Page]().

## Do you have any questions

Don't esitate to reach me at my GitHub [Purplelume](https://github.com/Purplelume) or reach out at my email address: simone.monari23.gmail.com

## License

![License Badge](https://shields.io/badge/license-MIT-blue)

This project is licensed under the MIT License.
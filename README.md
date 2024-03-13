# Blog App

- Blog App is a dynamic web application that allows users to explore blog posts, comments, and interact with the content. Utilizing React for the frontend.

### Features
- Dynamic Posts and Comments: Users can view a list of posts and their associated comments fetched from an external API, and single post on a separate route as well.
- Search Functionality: Filter posts by user names using a search input.
- Error Handling: Implements React Error Boundary to handle unexpected errors gracefully.
- Responsive Design: Ensures a consistent experience across different devices and screen sizes.
- Logging with HOC: Utilizes a higher-order component for logging component mounts.

### Tech Stack
- Built with Vite, Yarn, React, TypeScript, CSS Modules, Axios, ESLint, Prettier.

## Getting Started

### Environment variables
- Copy `.env.example` and rename the copy to `.env` and fill the required values (heads-up, in production - following values should not be contained by a public repository)
- Set the `REACT_APP_CLIENT_URL` to your local development host and port (Vite default is `http://localhost:5173`)
- Set the `REACT_APP_API_URL` to JSONPlaceholder url (which is `https://jsonplaceholder.typicode.com`)
- Pay attention that on both values there SHOULD NOT be a trailing forward slash `/`

### Installation
- Ensure you have Node.js installed. 
- Recommended version: >=20.00.0.

```bash
yarn install
yarn dev
```
OR

```bash
npm install
npm run dev
```

- For production build use: `yarn build` or `npm run build`

### Key Directories and Files
- `/api`: Contains functions to fetch data from the API.
- `/components`: Reusable components like Button, Input, and Layouts.
- `/features`: Feature-specific components like Posts and PostId views.
- `/hoc`: Higher-order components for functionality enhancements like logging.
- `/hooks`: Custom React hooks for fetching data and search functionality.
- `/providers`: Providers for the whole app.
- `/routes`: App routing setup using React Router.
- `/models`: Type definitions for User, Post, and Comment.
- `/lib`: folder for 3rd-party setups, holding Axios instance with interceptors for request and response processing and basic error handling.
- `/styles`: general css setup.

### Future Enhancements
The application is a work in progress and is not yet polished for production use.

- More sophisticated error handling and user notifications.
- Improved layout for better UX.
- Performance optimizations (maybe inspect profiling and usage of React.memo on Post and Comment components) and more extensive use of React best practices.
- Implementing unit tests.

Search for `TODO` prefix across the codebase to find inline comments for future work.

Approximate time needed to implement this task was around `20 hours`.

Author: Miloš Milojević
Version: 0.1.0
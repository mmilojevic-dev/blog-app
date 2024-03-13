export const APP_DEFAULT = {
  TITLE: 'Blog App',
  CLIENT_URL: process.env.REACT_APP_CLIENT_URL as string,
  API_URL: process.env.REACT_APP_API_URL as string,
  LOG_MESSAGE_PREFIX: 'Hello from',
  LOG_MESSAGE_SUFIX: 'Component.',
  SEARCH_FILTER_PLACEHOLDER: 'Search posts by user name'
}

export const API = {
  USERS: {
    PATH: 'users'
  },
  POSTS: {
    PATH: 'posts'
  },
  COMMENTS: {
    PATH: 'comments'
  }
}

export const ROUTES = {
  POSTS: {
    PATH: 'posts'
  },
  POST: {
    PATH: 'post',
    PARAM_NAME: 'postId'
  },
  NOT_FOUND: {
    PATH: '404'
  },
  INTERNAL_SERVER: {
    PATH: '500'
  }
}

export const ERRORS = {
  NOT_FOUND_MESSAGE: '404 - Not Found.',
  INTERNAL_SERVER_MESSAGE: '500 - Internal Server Error.'
}

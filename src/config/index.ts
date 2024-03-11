export const APP_DEFAULT = {
  TITLE: 'Blog App',
  API_URL: process.env.REACT_APP_API_URL as string
}

export const ROUTES = {
  HOME: {
    LABEL: '',
    PATH: '/'
  },
  POSTS: {
    LABEL: 'Posts',
    PATH: '/posts'
  },
  POST_ID: {
    LABEL: '',
    PATH: '/post'
  }
}

export const POSTS = {
  TITLE: `List Of Posts:`
}

export const POST_ID = {
  TITLE: `Post Details:`
}

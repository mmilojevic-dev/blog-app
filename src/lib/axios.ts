import Axios, { InternalAxiosRequestConfig } from 'axios'

import { APP_DEFAULT } from '@/config'

export const axiosInstance = Axios.create({
  baseURL: APP_DEFAULT.API_URL
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers.Accept = 'application/json'
    return config
  },
  (error) => {
    console.log(getErrorMessage('request', error))
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(getErrorMessage('response', error))
    return Promise.reject(error)
  }
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getErrorMessage = (type: 'request' | 'response', error: any) => {
  let message = ''
  if (error[type] && error[type].data) {
    message = error[type].data.message
  } else {
    message =
      error.message ||
      error.cause?.message ||
      `An unexpected ${type} error occurred`
  }

  return message
}

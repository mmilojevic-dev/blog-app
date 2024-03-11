import { axiosInstance } from '@/lib/axios'
import { User } from '@/models'

export const getUsers = (): Promise<User[]> => {
  return axiosInstance.get('/users')
}

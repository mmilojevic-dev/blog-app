import { axiosInstance } from '@/lib/axios'
import { Comment } from '@/models'

export const getComments = (): Promise<Comment[]> => {
  return axiosInstance.get('/comments')
}

import { axiosInstance } from '@/lib/axios'
import { Post } from '@/models'

export const getPosts = (): Promise<Post[]> => {
  return axiosInstance.get('/posts')
}

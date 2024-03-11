import { axiosInstance } from '@/lib/axios'

export const getEntities = <T>(entity: string): Promise<T[]> => {
  return axiosInstance.get(`/${entity}`)
}

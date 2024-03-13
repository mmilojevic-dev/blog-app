import { axiosInstance } from '@/lib/axios'

export const getData = <T>(url: string): Promise<T> => {
  return axiosInstance.get(url)
}

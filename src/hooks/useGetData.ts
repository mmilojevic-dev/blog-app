import React from 'react'

import { getData } from '@/api'
import { getErrorMessage } from '@/utils'

interface UseGetData<T> {
  data: T
  isLoading: boolean
}

export const useGetData = <T>(url: string): UseGetData<T> => {
  const [data, setData] = React.useState<T>()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const fetchData = React.useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await getData<T>(url)

      setData(response)
    } catch (error) {
      setIsLoading(false)
      console.log(getErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }, [url])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data: data as T, isLoading }
}

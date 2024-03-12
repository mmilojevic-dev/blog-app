import React from 'react'

import { getData } from '@/api/getData'
import { getErrorMessage } from '@/utils'

interface UseData<T> {
  data: T
  isLoading: boolean
}

export const useData = <T>(url: string): UseData<T> => {
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

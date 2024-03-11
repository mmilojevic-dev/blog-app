import React from 'react'

import { getEntities } from '@/api/getEntities'
import { getErrorMessage } from '@/utils'

interface UseSearch<T> {
  isLoading: boolean
  data: T[]
  total: number
}

const useSearch = <T>(entity: string): UseSearch<T> => {
  const [data, setData] = React.useState<T[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [total, setTotal] = React.useState<number>(0)

  const fetchData = React.useCallback(async () => {
    try {
      const result = await getEntities<T>(entity)

      setData(result)

      setTotal(result.length)
    } catch (error) {
      console.error(getErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }, [entity])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, isLoading, total }
}

export default useSearch

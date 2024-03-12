import React from 'react'

import { getEntities } from '@/api/getEntities'
import { getErrorMessage } from '@/utils'

interface UseEntities<T> {
  entities: T[]
  total: number
  isLoading: boolean
}

export const useEntities = <T>(entity: string): UseEntities<T> => {
  const [entities, setEntities] = React.useState<T[]>([])
  const [total, setTotal] = React.useState<number>(0)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const fetchData = React.useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await getEntities<T>(entity)
      setEntities(response)
      setTotal(response.length)
    } catch (error) {
      setIsLoading(false)
      console.log(getErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }, [entity])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return { entities, total, isLoading }
}

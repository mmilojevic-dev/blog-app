import React from 'react'

import { APP_DEFAULT } from '@/config'

import styles from './Results.module.css'

type ItemType<T> = {
  isLoading?: boolean
  item?: T
}

type ResultsProps<T> = {
  data?: T[]
  isLoading?: boolean
  renderItem: ({ item, isLoading }: ItemType<T>) => React.ReactElement
}
export const Results = <T,>({
  data,
  isLoading,
  renderItem
}: ResultsProps<T>) => {
  // TODO: here an exception was made because of inabillity to find a feasible way to pass the generic type through the withLogMessage HOC
  React.useEffect(() => {
    const componentName = 'Results'
    console.log(`${APP_DEFAULT.LOG_MESSAGE_PREFIX} ${componentName}`)
  }, [])

  if (!isLoading && !data?.length) {
    return <p>No results found</p>
  }

  const items = data?.map((item) => renderItem({ item, isLoading }))

  return <div className={styles.results}>{items}</div>
}

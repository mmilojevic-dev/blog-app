import { ItemsLayout } from '@/components'

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
  if (!isLoading && !data?.length) {
    return <p>No results found</p>
  }

  const items = data?.map((item) => renderItem({ item, isLoading }))

  return (
    <div className={styles.results}>
      <ItemsLayout>{items}</ItemsLayout>
    </div>
  )
}

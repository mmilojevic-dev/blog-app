import styles from './ItemsLayout.module.css'

type ItemsLayout = {
  children: React.ReactNode
}

export const ItemsLayout: React.FC<ItemsLayout> = ({ children }) => {
  return <div className={styles.itemsLayout}>{children}</div>
}

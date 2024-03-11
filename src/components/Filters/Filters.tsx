import styles from './Filters.module.css'

export const Filters: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.filters}>{children}</div>
}

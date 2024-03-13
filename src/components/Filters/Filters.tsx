import styles from './Filters.module.css'

export const Filters: React.FC<React.PropsWithChildren> = ({ children }) => {
  // TODO: filters should be fixed by the left side on desktop, and on mobile it should be fixed at the top for bettr UX
  return <div className={styles.filters}>{children}</div>
}

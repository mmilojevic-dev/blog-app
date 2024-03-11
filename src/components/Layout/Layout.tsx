import styles from './Layout.module.css'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.filters}>{children}</div>
}

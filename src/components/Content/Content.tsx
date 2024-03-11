import styles from './Content.module.css'

export const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.content}>{children}</div>
}

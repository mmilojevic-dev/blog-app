import styles from './Counter.module.css'

type CounterProps = {
  count?: number
}
export const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <div className={styles.counter}>
      <div className={styles.result}>{count || 0} found</div>
    </div>
  )
}

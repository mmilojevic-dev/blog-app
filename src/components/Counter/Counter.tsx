import styles from './Counter.module.css'

type CounterProps = {}
export const Counter: React.FC<CounterProps> = ({}) => {
  return <div className={styles.counter}>Counter CONTENT</div>
}

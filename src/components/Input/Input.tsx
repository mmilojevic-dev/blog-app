import styles from './Input.module.css'

type InputProps = React.HTMLProps<HTMLInputElement>

export const Input: React.FC<InputProps> = (props) => {
  return <input className={styles.input} {...props} />
}

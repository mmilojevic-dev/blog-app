import styles from './Button.module.css'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary'
  size?: 'sm' | 'md' | 'lg'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

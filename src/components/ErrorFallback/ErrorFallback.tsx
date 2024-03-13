import { Button } from '@/components'

import styles from './ErrorFallback.module.css'

type ErrorFallbackProps = {
  error?: Error
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div className={styles.errorFallback} role="alert">
      <h2 className={styles.message}>Ooops, something went wrong :</h2>
      <pre className={styles.message}>{error?.message}</pre>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  )
}

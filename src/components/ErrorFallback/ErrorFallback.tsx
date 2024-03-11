import { Button } from '@/components'

import styles from './ErrorFallback.module.css'

type ErrorFallbackProps = {
  error: Error
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div className={styles.errorFallback} role="alert">
      <h2 className={styles.errorMessage}>Ooops, something went wrong :</h2>
      <pre className={styles.errorMessage}>{error.message}</pre>
      <Button
        className={styles.refreshButton}
        variant="danger"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  )
}

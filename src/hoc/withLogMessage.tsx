import React from 'react'

import { APP_DEFAULT } from '@/config'

export function withLogMessage<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  componentName: string
): React.ComponentType<T> {
  const ComponentWithLog: React.FC<T> = (props) => {
    React.useEffect(() => {
      console.log(
        `${APP_DEFAULT.LOG_MESSAGE_PREFIX} ${componentName} ${APP_DEFAULT.LOG_MESSAGE_SUFIX}`
      )
    }, [])

    return <WrappedComponent {...props} />
  }

  return ComponentWithLog
}

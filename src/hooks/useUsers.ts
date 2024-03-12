import React from 'react'

import { UserType } from '@/models'

import { useEntities } from './useEntities'

export const useUsers = () => {
  const { entities } = useEntities<UserType>('users')

  const getUserName = React.useCallback(
    (userId: number): string | undefined => {
      return entities.find((user) => user.id === userId)?.name
    },
    [entities]
  )

  return { getUserName }
}

import React from 'react'

import { PostType, UserType } from '@/models'

import { useDebounce } from './useDebounce'
import { useEntities } from './useEntities'

export const usePosts = (searchTerm: string) => {
  const { entities: users } = useEntities<UserType>('users')
  const { entities: posts, isLoading } = useEntities<PostType>('posts')
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500)

  const filteredPosts = React.useMemo(() => {
    return posts
      .map((post) => ({
        ...post,
        userName:
          users.find((user) => user.id === post.userId)?.name || 'Unknown User'
      }))
      .filter((post) =>
        post.userName.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
  }, [posts, users, debouncedSearchTerm])

  return { filteredPosts, isLoading }
}

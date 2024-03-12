import React from 'react'

import { CommentType, PostType, UserType } from '@/models'

import { useDebounce } from './useDebounce'
import { useEntities } from './useEntities'

export const usePosts = (searchTerm: string) => {
  const { entities: users } = useEntities<UserType>('users')
  const { entities: posts, isLoading } = useEntities<PostType>('posts')
  const { entities: comments } = useEntities<CommentType>('comments')
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500)

  const filteredPosts = React.useMemo(() => {
    return posts
      .map((post) => ({
        ...post,
        userName:
          users.find((user) => user.id === post.userId)?.name || 'Unknown User',
        commentsNumber: comments.filter((comment) => comment.postId === post.id)
          .length
      }))
      .filter((post) =>
        post.userName.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
  }, [users, posts, comments, debouncedSearchTerm])

  return { filteredPosts, isLoading }
}

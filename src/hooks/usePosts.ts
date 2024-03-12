import React from 'react'

import { CommentType, PostType, UserType } from '@/models'

import { useData } from './useData'
import { useDebounce } from './useDebounce'

export const usePosts = (searchTerm: string) => {
  const { data: users } = useData<UserType[]>('/users')
  const { data: posts, isLoading } = useData<PostType[]>('/posts')
  const { data: comments } = useData<CommentType[]>('/comments')
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500)

  const filteredPosts = React.useMemo(() => {
    return posts
      ?.map((post) => ({
        ...post,
        userName:
          users?.find((user) => user.id === post.userId)?.name ||
          'Unknown User',
        commentsNumber: comments?.filter(
          (comment) => comment.postId === post.id
        )?.length
      }))
      .filter((post) =>
        post.userName.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
  }, [users, posts, comments, debouncedSearchTerm])

  return { filteredPosts, isLoading }
}

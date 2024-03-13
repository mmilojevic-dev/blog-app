import React, { useCallback } from 'react'

import { CommentType, PostType, UserType } from '@/models'
import { enhancePostData } from '@/utils'

import { useDebounce } from './useDebounce'

export const usePosts = (
  searchTerm: string,
  users: UserType[],
  posts: PostType[],
  comments: CommentType[]
) => {
  const debouncedSearchTerm = useDebounce<string>(searchTerm)

  const filterPostsByUserName = useCallback(
    (posts: PostType[]) =>
      posts?.filter((post) =>
        post?.userName
          ?.toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      ),
    [debouncedSearchTerm]
  )

  const filteredPosts = React.useMemo(
    () =>
      filterPostsByUserName(
        posts?.map((post) => enhancePostData(post, users, comments))
      ),
    [posts, users, comments, filterPostsByUserName]
  )

  return { filteredPosts }
}

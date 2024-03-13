import React from 'react'

import { CommentType, PostType, UserType } from '@/models'
import { enhancePostData } from '@/utils'

export const usePost = (
  post: PostType,
  users: UserType[],
  comments: CommentType[]
) => {
  const [enhancedPost, setEnhancedPost] = React.useState<PostType>()

  React.useEffect(() => {
    const postData = enhancePostData(post, users, comments)
    setEnhancedPost(postData)
  }, [post, users, comments])

  return { enhancedPost }
}

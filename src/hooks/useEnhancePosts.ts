import React from 'react'

import { PostType } from '@/models'

export const useEnhancePosts = (
  posts: PostType[],
  getUserName: (id: number) => string | undefined
) => {
  const [enhancedPosts, setEnhancedPosts] = React.useState<PostType[]>([])

  const enhanceData = React.useCallback(() => {
    const newEnhancedPosts = posts.map((post) => {
      const userName = getUserName(post.userId) || ''
      return { ...post, userName }
    })
    setEnhancedPosts(newEnhancedPosts)
  }, [posts, getUserName])

  React.useEffect(() => {
    enhanceData()
  }, [enhanceData])

  return enhancedPosts
}

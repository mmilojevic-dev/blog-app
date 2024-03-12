import React from 'react'

import { PostType } from '@/models'

export const useFilterPosts = (posts: PostType[], searchFilter: string) => {
  const [filteredPosts, setFilteredPosts] = React.useState<PostType[]>([])

  React.useEffect(() => {
    const newFilteredPosts = posts.filter((post) =>
      post.userName?.toLowerCase().includes(searchFilter.toLowerCase())
    )
    setFilteredPosts(newFilteredPosts)
  }, [posts, searchFilter])

  return filteredPosts
}

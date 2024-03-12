import React from 'react'

import { Content, Counter, Filters, Input, Layout, Results } from '@/components'
import { useEnhancePosts } from '@/hooks/useEnhancePosts'
import { useEntities } from '@/hooks/useEntities'
import { useFilterPosts } from '@/hooks/useFilterPosts'
import useSearch from '@/hooks/useSearch'
import { useUsers } from '@/hooks/useUsers'
import { PostType } from '@/models'

export const Posts: React.FC = () => {
  const { searchTerm, handleSearchChange } = useSearch()
  const { getUserName } = useUsers()
  const { entities } = useEntities<PostType>('posts')
  const enhancedPosts = useEnhancePosts(entities, getUserName)
  const filteredPosts = useFilterPosts(enhancedPosts, searchTerm)

  React.useEffect(() => {
    console.log(filteredPosts)
  }, [filteredPosts])
  return (
    <Layout>
      <Filters>
        <Input
          placeholder="Search posts by user name"
          onChange={handleSearchChange}
        />
      </Filters>
      <Content>
        <Counter />
        <Results />
      </Content>
    </Layout>
  )
}

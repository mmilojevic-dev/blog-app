import React from 'react'

import { Content, Counter, Filters, Input, Layout, Results } from '@/components'
import { usePosts } from '@/hooks/usePosts'
import { useSearch } from '@/hooks/useSearch'

export const Posts: React.FC = () => {
  const { searchTerm, handleSearchChange } = useSearch()
  const { filteredPosts } = usePosts(searchTerm)

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

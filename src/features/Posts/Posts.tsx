import React from 'react'

import {
  Content,
  Counter,
  Filters,
  Input,
  Layout,
  Post,
  Results
} from '@/components'
import { usePosts } from '@/hooks/usePosts'
import { useSearch } from '@/hooks/useSearch'
import { PostType } from '@/models'

export const Posts: React.FC = () => {
  const { searchTerm, handleSearchChange } = useSearch()
  const { filteredPosts, isLoading } = usePosts(searchTerm)

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
        <Counter count={filteredPosts.length} />
        <Results<PostType>
          data={filteredPosts}
          isLoading={isLoading}
          renderItem={({ item, isLoading }) => (
            <Post isLoading={isLoading} post={item} key={item?.id} />
          )}
        />
      </Content>
    </Layout>
  )
}

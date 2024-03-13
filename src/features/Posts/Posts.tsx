import React from 'react'

import { Content, Counter, Filters, Input, Layout, Post } from '@/components'
import { Results } from '@/components/Results'
import { APP_DEFAULT } from '@/config'
import { useGetData } from '@/hooks/useGetData'
import { usePosts } from '@/hooks/usePosts'
import { useSearch } from '@/hooks/useSearch'
import { CommentType, PostType, UserType } from '@/models'

export const Posts: React.FC = () => {
  const { searchTerm, handleSearchChange } = useSearch()
  const { data: users } = useGetData<UserType[]>('/users')
  const { data: posts } = useGetData<PostType[]>('/posts')
  const { data: comments } = useGetData<CommentType[]>('/comments')
  const { filteredPosts } = usePosts(searchTerm, users, posts, comments)

  return (
    <Layout>
      <Filters>
        <Input
          placeholder={APP_DEFAULT.SEARCH_FILTER_PLACEHOLDER}
          onChange={handleSearchChange}
        />
      </Filters>
      <Content>
        <Counter count={filteredPosts?.length} />
        <Results<PostType>
          data={filteredPosts}
          renderItem={({ item }) => <Post key={item?.id} post={item} />}
        />
      </Content>
    </Layout>
  )
}

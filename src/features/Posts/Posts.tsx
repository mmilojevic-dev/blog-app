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
import { useData } from '@/hooks/useData'
import { usePosts } from '@/hooks/usePosts'
import { useSearch } from '@/hooks/useSearch'
import { CommentType, PostType, UserType } from '@/models'

export const Posts: React.FC = () => {
  const { searchTerm, handleSearchChange } = useSearch()
  const { data: users } = useData<UserType[]>('/users')
  const { data: posts } = useData<PostType[]>('/posts')
  const { data: comments } = useData<CommentType[]>('/comments')
  const { filteredPosts } = usePosts(searchTerm, users, posts, comments)

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
        <Counter count={filteredPosts?.length} />
        <Results<PostType>
          data={filteredPosts}
          renderItem={({ item }) => <Post key={item?.id} post={item} />}
        />
      </Content>
    </Layout>
  )
}

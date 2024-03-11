import React from 'react'

import { Content, Counter, Filters, Layout, Results } from '@/components'
import useSearch from '@/hooks/useSearch'
import { PostType } from '@/models'

export const Posts: React.FC = () => {
  const { data } = useSearch<PostType[]>('posts')

  React.useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <Layout>
      <Filters></Filters>
      <Content>
        <Counter />
        <Results />
      </Content>
    </Layout>
  )
}

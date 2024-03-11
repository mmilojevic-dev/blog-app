import { Content, Counter, Filters, Layout, Results } from '@/components'

export const Posts: React.FC = () => {
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

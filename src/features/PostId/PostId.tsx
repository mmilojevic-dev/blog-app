import { useParams } from 'react-router-dom'

import { Comment, Content, Layout, PostDetails, Results } from '@/components'
import { useData } from '@/hooks/useData'
import { usePost } from '@/hooks/usePost'
import { CommentType, PostType, UserType } from '@/models'

import styles from './PostId.module.css'

export const PostId: React.FC = () => {
  const { postId } = useParams()
  const { data: users } = useData<UserType[]>('/users')
  const { data: post } = useData<PostType>(`/posts/${postId}`)
  const { data: comments } = useData<CommentType[]>(`/posts/${postId}/comments`)
  const { enhancedPost } = usePost(post, users, comments)
  return (
    <div className={styles.postId}>
      <Layout>
        <Content>
          <PostDetails post={enhancedPost} />
          <Results<CommentType>
            data={comments}
            renderItem={({ item }) => <Comment key={item?.id} comment={item} />}
          />
        </Content>
      </Layout>
    </div>
  )
}

import { useParams } from 'react-router-dom'

import { Comment, Content, Layout, PostDetails } from '@/components'
import { Results } from '@/components/Results'
import { API } from '@/config'
import { useGetData } from '@/hooks/useGetData'
import { usePost } from '@/hooks/usePost'
import { CommentType, PostType, UserType } from '@/models'

import styles from './PostId.module.css'

export const PostId: React.FC = () => {
  const { postId } = useParams()
  const { data: users } = useGetData<UserType[]>(`/${API.USERS.PATH}`)
  const { data: post } = useGetData<PostType>(`/${API.POSTS.PATH}/${postId}`)
  const { data: comments } = useGetData<CommentType[]>(
    `/${API.POSTS.PATH}/${postId}/${API.COMMENTS.PATH}`
  )
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

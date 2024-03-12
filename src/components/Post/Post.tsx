import { FaUser } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'

import { PostType } from '@/models'

import styles from './Post.module.css'

type PostProps = {
  isLoading?: boolean
  post?: PostType
}
export const Post: React.FC<PostProps> = ({ isLoading, post }) => {
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <a className={styles.post} href={`/post/${post?.id}`}>
      <h3 className={styles.title}>{post?.title}</h3>
      <div className={styles.body}>{post?.body}</div>
      <div className={styles.additionalInfo}>
        <div className={styles.comments}>
          <FaComments />
          {post?.commentsNumber}
        </div>
        <div className={styles.user}>
          <FaUser />
          {post?.userName}
        </div>
      </div>
    </a>
  )
}

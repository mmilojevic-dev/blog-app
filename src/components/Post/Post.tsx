import { FaUser } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'

import { Card, CardBody, CardFooter, CardHeader } from '@/components'
import { PostType } from '@/models'

import styles from './Post.module.css'

type PostProps = {
  post?: PostType
}
export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <a className={styles.post} href={`/post/${post?.id}`}>
      <Card>
        <CardHeader>
          <h3 className={styles.title}>{post?.title}</h3>
          <div className={styles.user}>
            <FaUser />
            {post?.userName}
          </div>
        </CardHeader>
        <CardBody>
          <div className={styles.text}>{post?.body}</div>
        </CardBody>
        <CardFooter>
          <div className={styles.comments}>
            <FaComments />
            {post?.commentsNumber}
          </div>
        </CardFooter>
      </Card>
    </a>
  )
}

import { FaUser } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'

import { Card, CardBody, CardFooter, CardHeader } from '@/components'
import { PostType } from '@/models'

import styles from './PostDetails.module.css'

type PostDetailsProps = {
  post?: PostType
}
export const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  return (
    <div className={styles.postDetails}>
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
    </div>
  )
}

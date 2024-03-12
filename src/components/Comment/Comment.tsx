import { MdEmail } from 'react-icons/md'

import { Card, CardBody, CardHeader } from '@/components'
import { CommentType } from '@/models'

import styles from './Comment.module.css'

type CommentProps = {
  comment?: CommentType
}
export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Card>
        <CardHeader>
          <h3>{comment?.name}</h3>
          <div className={styles.email}>
            <MdEmail />
            <span>{comment?.email}</span>
          </div>
        </CardHeader>
        <CardBody>
          <div className={styles.text}>{comment?.body}</div>
        </CardBody>
      </Card>
    </div>
  )
}

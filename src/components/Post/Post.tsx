import styles from './Post.module.css'

type PostProps = {}
export const Post: React.FC<PostProps> = ({}) => {
  return <div className={styles.post}>POST CONTENT</div>
}

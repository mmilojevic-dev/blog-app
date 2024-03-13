import { withLogMessage } from '@/hoc/withLogMessage'

import { PostId as OriginalPostId } from './PostId'
import { Posts as OriginalPosts } from './Posts'

export const PostId = withLogMessage(OriginalPostId, 'PostId')
export const Posts = withLogMessage(OriginalPosts, 'Posts')

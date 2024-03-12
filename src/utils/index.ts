import { CommentType, PostType, UserType } from '@/models'

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message
  return String(error)
}

export const enhancePostData = (
  post: PostType,
  users: UserType[],
  comments: CommentType[]
) => ({
  ...post,
  userName:
    users?.find((user) => user?.id === post?.userId)?.name || 'Unknown User',
  commentsNumber: comments?.filter((comment) => comment?.postId === post?.id)
    .length
})

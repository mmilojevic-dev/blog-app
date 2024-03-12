import { Navigate, Route, Routes } from 'react-router-dom'

import { ROUTES } from '@/config'
import { PostId } from '@/features'
import { Posts } from '@/features'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.POSTS.PATH} />} />
      <Route path={ROUTES.POSTS.PATH} element={<Posts />} />
      <Route path={`${ROUTES.POST_ID.PATH}/:postId`} element={<PostId />} />
    </Routes>
  )
}

import { Navigate, Route, Routes } from 'react-router-dom'

import { ErrorFallback } from '@/components/ErrorFallback'
import { ERRORS, ROUTES } from '@/config'
import { PostId } from '@/features'
import { Posts } from '@/features'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={`/${ROUTES.POSTS.PATH}`} />} />
      <Route path="/" element={<Navigate to={`/${ROUTES.POSTS.PATH}`} />} />
      <Route path={`/${ROUTES.POSTS.PATH}`} element={<Posts />} />
      <Route
        path={`/${ROUTES.POST.PATH}/:${ROUTES.POST.PARAM_NAME}`}
        element={<PostId />}
      />
      <Route
        path={`/${ROUTES.NOT_FOUND.PATH}`}
        element={<ErrorFallback error={new Error(ERRORS.NOT_FOUND_MESSAGE)} />}
      />
      <Route
        path={`/${ROUTES.INTERNAL_SERVER.PATH}`}
        element={
          <ErrorFallback error={new Error(ERRORS.INTERNAL_SERVER_MESSAGE)} />
        }
      />
    </Routes>
  )
}

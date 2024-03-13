import 'styles/index.css'

import { AppProvider } from './providers/app'
import { AppRoutes } from './routes'

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

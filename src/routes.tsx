import { useRoutes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

export const Routes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/detail/:country', element: <Detail /> }
    ])
}

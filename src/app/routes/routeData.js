import {VisibilityOutlined, HomeOutlined} from '@mui/icons-material'

import HomePage from './HomePage'
import WatchLater from './Watchlater'
import PageNotFound from './404Page'

export const routes = [
  { text: 'Home', icon: <HomeOutlined/>, component: HomePage, path: '/', exact: true },
  { text: 'Watchlater', icon: <VisibilityOutlined/>, component: WatchLater, path: '/watchlater', exact: true },
  { text: 'PageNotFound', icon: <VisibilityOutlined/>, component: PageNotFound, path: '*', exact: true, },
]
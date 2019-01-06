import Search from '@/components/Search'
import About from '@/components/About'
import TrackDetail from '@/components/TrackDetail'

const routes = [
  { path: '/MusicApp/', component: Search, name: 'search' },
  { path: '/MusicApp/about', component: About, name: 'about' },
  { path: '/MusicApp/track/:id', component: TrackDetail, name: 'track' }
]

export default routes

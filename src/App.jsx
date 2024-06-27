import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AdminPanel from '@components/admin-panel/admin-panel'
import EventsRegistration from '@components/event-registration/event-registration'
import EventSettings from '@components/judgment/event-settings/event-settings'
import Events from '@components/events/events'
import UserSettings from '@components/user-settings/user-settings'
import UsersControl from '@components/users-control/users-control'
import Participants from '@components/participants/participants'
import NotFound from '@components/notfound/notfound'
import Auth from '@components/auth/auth'
import Logout from '@components/logout/logout'
import Judgment from '@components/judgment/events/judgment-events'
import Unauthorized from '@components/unauthorized/unauthorized'

const ROUTES = {
  NOT_FOUND: '*',
  UNAUTHORIZED: '/401',
  ROOT: '/',
  LOGOUT: '/logout',
  ADMIN_PANEL: '',
  PARTICIPANTS: '/participants',
  USERS_CONTROL: '/users',
  USER_SETTINGS: '/settings',
  EVENTS: '/events',
  EVENTS_REGISTRATION: '/events/:eventID/registration',
  JUDGMENT: '/judgment/events',
  JUDGMENT_CREATE: '/judgment/events/create',
  JUDGMENT_EVENT_SETTINGS: '/judgment/events/:eventID/settings',
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTES.UNAUTHORIZED} element={<Unauthorized />} />
        <Route path={ROUTES.ROOT}>
          <Route index element={<Auth />} />
          <Route path={ROUTES.LOGOUT} element={<Logout />} />
          <Route path={ROUTES.ADMIN_PANEL} element = {<AdminPanel/>}>
            <Route path={ROUTES.PARTICIPANTS} element={<Participants />} />
            <Route path={ROUTES.USERS_CONTROL} element={<UsersControl />} />
            <Route path={ROUTES.USER_SETTINGS} element={<UserSettings />} />
            <Route path={ROUTES.EVENTS}>
              <Route index element={<Events />} />
              <Route path={ROUTES.EVENTS_REGISTRATION} element={<EventsRegistration />} />
            </Route>
            <Route path={ROUTES.JUDGMENT}>
              <Route index element={<Judgment />} />
              <Route path={ROUTES.JUDGMENT_CREATE} element={<EventSettings />} />
              <Route path={ROUTES.JUDGMENT_EVENT_SETTINGS} element={<EventSettings />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App

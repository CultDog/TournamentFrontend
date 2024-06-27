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
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/401" element={<Unauthorized />} />
        <Route path="/">
          <Route index element={<Auth />} />
          <Route path="logout" element={<Logout />} />
          <Route path="" element={<AdminPanel />}>
            <Route path="participants" element={<Participants />} />
            <Route path="users" element={<UsersControl />} />
            <Route path="settings" element={<UserSettings />} />
            <Route path="events">
              <Route index element={<Events />} />
              <Route path=":eventID/registration" element={<EventsRegistration />} />
            </Route>
            <Route path="judgment/events">
              <Route index element={<Judgment />} />
              <Route path="create" element={<EventSettings />} />
              <Route path=":eventID/settings" element={<EventSettings />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

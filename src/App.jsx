import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersControlPage from './pages/users-control-page.jsx';
import UserSettingsPage from './pages/user-settings-page.jsx';
import EventsPage from './pages/events-page.jsx';
import EventSettingsPage from './pages/event-settings-page.jsx';
import NotFoundPage from './pages/notfoud-page.jsx';
import AuthPage from './pages/auth-page.jsx';
import ParticipantsPage from "@src/pages/participants-page.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin/auth" element={<AuthPage />} />
				<Route path={"/admin/participants"} element={<ParticipantsPage />} />
				<Route path="/admin/users" element={<UsersControlPage />} />
				<Route path="/admin/settings" element={<UserSettingsPage />} />
				<Route path="/admin/events" element={<EventsPage />} />
				<Route path="/admin/events/settings" element={<EventSettingsPage/>}/>
				<Route path="*" element={<NotFoundPage/>} />
			</Routes>	
		</BrowserRouter>
	)
}

export default App;
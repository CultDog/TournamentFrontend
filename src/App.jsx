import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersControlPage from './pages/users-control-page.jsx';
import UserSettingsPage from './pages/user-settings-page.jsx';
import EventsPage from './pages/events-page.jsx';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin/users" element={<UsersControlPage />} />
				<Route path="/admin/settings" element={<UserSettingsPage />} />
				<Route path="/admin/events" element = {<EventsPage />} />
			</Routes>	
		</BrowserRouter>
	)
}

export default App;
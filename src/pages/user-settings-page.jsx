import AdminPanel from "@components/admin-panel/admin-panel.jsx";
import UserSettings from "@components/user-settings/user-settings.jsx";

function UserSettingsPage() {
	return (
		<AdminPanel>
			<UserSettings/>
		</AdminPanel>
	);
}

export default UserSettingsPage;
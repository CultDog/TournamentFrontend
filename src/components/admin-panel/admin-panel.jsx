import AdminPanelLogo from './admin-panel-logo.jsx';
import AdminPanelNav from './admin-panel-nav.jsx';
import './sass/admin-panel.scss';

function AdminPanel(props) {
	return (
		<div className="admin-panel">
			<div className="admin-panel__menu">
				<AdminPanelLogo />
				<AdminPanelNav />
			</div>
			<div className="admin-panel__content">
				{props.children}
			</div>
		</div>
	);
}

export default AdminPanel;
import { Link } from "react-router-dom";

function AdminPanelNav() {
	return (
		<nav className="admin-panel__nav">
			<ul className="admin-panel__menu-list">
				<li>
					<a href="#" className="admin-panel__menu-link admin-panel__menu-link--event"></a>
				</li>
				<li>
					<a href="#" className="admin-panel__menu-link admin-panel__menu-link--judgment"></a>
				</li>
				<li>
					<Link to="/admin/users" className="admin-panel__menu-link admin-panel__menu-link--users"></Link>
				</li>
				<li>
					<Link to="/admin/settings" className="admin-panel__menu-link admin-panel__menu-link--settings"></Link>
				</li>
			</ul>
			<ul className="admin-panel__menu-list">
				<li>
					<a href="#" className="admin-panel__menu-link admin-panel__menu-link--logout"></a>
				</li>
			</ul>
		</nav>
	);
}

export default AdminPanelNav;
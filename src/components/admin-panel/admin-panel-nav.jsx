import { NavLink } from "react-router-dom";

function AdminPanelNav() {
	return (
		<nav className="admin-panel__nav">
			<ul className="admin-panel__menu-list">
				<li>
					<NavLink to='/admin/events' className="admin-panel__menu-link admin-panel__menu-link--event"></NavLink>
				</li>
				<li>
					<NavLink to="/admin/judgment" className="admin-panel__menu-link admin-panel__menu-link--judgment"></NavLink>
				</li>
				<li>
					<NavLink to="/admin/participants" className="admin-panel__menu-link admin-panel__menu-link--add-participants"></NavLink>
				</li>
				<li>
					<NavLink to="/admin/users" className="admin-panel__menu-link admin-panel__menu-link--users"></NavLink>
				</li>
				<li>
					<NavLink to="/admin/settings" className="admin-panel__menu-link admin-panel__menu-link--settings"></NavLink>
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
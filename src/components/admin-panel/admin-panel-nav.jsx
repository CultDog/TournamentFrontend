import { NavLink } from "react-router-dom";

function AdminPanelNav({role}) {
	return (
		<nav className="admin-panel__nav">
			<ul className="admin-panel__menu-list">
				{
					role === 'admin' && (
						<li>
							<NavLink
								to='/admin/events'
								className="admin-panel__menu-link admin-panel__menu-link--event"
							/>
						</li>
					)
				}
				{
					role === 'admin' && (
						<li>
							<NavLink
								to="/admin/judgment"
								className="admin-panel__menu-link admin-panel__menu-link--judgment"
							/>
						</li>
					)
				}
				{
					role === 'admin' && (
						<li>
							<NavLink
								to="/admin/participants"
								className="admin-panel__menu-link admin-panel__menu-link--add-participants"
							/>
						</li>
					)
				}
				{
					role === 'admin' && (
						<li>
							<NavLink
								to="/admin/users"
								className="admin-panel__menu-link admin-panel__menu-link--users"
							/>
						</li>
					)
				}
				<li>
					<NavLink
						to="/admin/settings"
						className="admin-panel__menu-link admin-panel__menu-link--settings"
					/>
				</li>
			</ul>
			<ul className="admin-panel__menu-list">
				<li>
					<NavLink
						to="/admin/logout"
						className="admin-panel__menu-link admin-panel__menu-link--logout"
					/>
				</li>
			</ul>
		</nav>
	);
}

export default AdminPanelNav;
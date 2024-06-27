import { NavLink } from 'react-router-dom'
import { Tooltip } from 'antd'

function AdminPanelNav({ role }) {
  return (
    <nav className="admin-panel__nav">
      <ul className="admin-panel__menu-list">
        {(role === 'admin' || role === 'judge') && (
          <Tooltip title="Мероприятия">
            <li>
              <NavLink
                to="/events"
                className="admin-panel__menu-link admin-panel__menu-link--event"
              />
            </li>
          </Tooltip>
        )}
        {(role === 'admin' || role === 'judge') && (
          <Tooltip title="Судейство">
            <li>
              <NavLink
                to="/judgment/events"
                className="admin-panel__menu-link admin-panel__menu-link--judgment"
              />
            </li>
          </Tooltip>
        )}
        {(role === 'admin' || role === 'specialist') && (
          <li>
            <Tooltip title="Управление участниками">
              <NavLink
                to="/participants"
                className="admin-panel__menu-link admin-panel__menu-link--add-participants"
              />
            </Tooltip>
          </li>
        )}
        {role === 'admin' && (
          <li>
            <Tooltip title="Управление пользователями">
              <NavLink
                to="/users"
                className="admin-panel__menu-link admin-panel__menu-link--users"
              />
            </Tooltip>
          </li>
        )}
        <li>
          <Tooltip title="Настройки аккаунта">
            <NavLink
              to="/settings"
              className="admin-panel__menu-link admin-panel__menu-link--settings"
            />
          </Tooltip>
        </li>
      </ul>
      <ul className="admin-panel__menu-list">
        <li>
          <Tooltip title="Выход">
            <NavLink
              to="/logout"
              className="admin-panel__menu-link admin-panel__menu-link--logout"
            />
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}

export default AdminPanelNav

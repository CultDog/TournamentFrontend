import AdminPanelLogo from './admin-panel-logo.jsx'
import AdminPanelNav from './admin-panel-nav.jsx'
import './sass/admin-panel.scss'
import { useState } from 'react'
import { message } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import Loader from '@components/loader/loader'
import ApiPath from '@components/enums.js'

function AdminPanel() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [role, setRole] = useState('unauthorized')

  if (isLoading) {
    try {
      fetch(`${ApiPath}/user/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        credentials: 'include',
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            navigate('/admin/auth')
          }
        })
        .then((user) => {
          setRole(user.role)
          setTimeout(() => setIsLoading(false), 1000)
        })
    } catch (error) {
      message.error(
        'Ошибка: Невозможно получить данные. Обратитесь к администратору...'
      )
    }
  }

  return (
    <>
      <Loader
        show={isLoading}
        style={{
          zIndex: 9999,
        }}
      />
      <div className="admin-panel">
        <div className="admin-panel__menu">
          <AdminPanelLogo />
          <AdminPanelNav role={role} />
        </div>
        <div className="admin-panel__content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AdminPanel

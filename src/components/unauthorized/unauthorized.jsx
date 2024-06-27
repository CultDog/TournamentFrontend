import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom'

const LOGIN_ROUTE = '/';

const Forbidden = () => (
  <Result
    status="403"
    title="401"
    subTitle="Извините, для входа на эту страницу надо авторизоваться"
    extra={
        <NavLink to={LOGIN_ROUTE}>
          <Button type="primary">Вернуться к авторизации</Button>
        </NavLink>
      }
  />
);
export default Forbidden;
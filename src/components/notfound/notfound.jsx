import { Button, Result } from 'antd';

function NotFound(){
    return(
        <Result
            status="404"
            title="404"
            subTitle="Извините, страница, которую вы посетили, не существует."
            extra={<Button type="primary" href='/admin/users'>Вернуться на главную</Button>}
        />
    );
}

export default NotFound;
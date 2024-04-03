import {useNavigate} from "react-router-dom";
import Loader from "@components/loader/loader";

const Logout = () => {
    const navigate = useNavigate();
    fetch('http://127.0.0.1:8000/api/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: "follow",
        credentials: 'include'
    }).then(
        response => {
            navigate('/admin/auth');
        }
    )

    return (
        <Loader show={true} />
    )
};

export default Logout;
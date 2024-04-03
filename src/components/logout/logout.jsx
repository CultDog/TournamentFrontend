import {useNavigate} from "react-router-dom";
import Loader from "@components/loader/loader";
import ApiPath from "@components/enums.js"

const Logout = () => {
    const navigate = useNavigate();
    fetch(`${ApiPath}/auth/logout`, {
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
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <h1>Loading contents.......</h1>
    }

    if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;
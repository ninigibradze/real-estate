import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({user}) => {
    if(!user.isSignedIn) {
        return <Navigate to='/real-estate' replace />
    }
    return <Outlet />
}

export default ProtectedRoute;
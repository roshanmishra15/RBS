import {Navigate, Route, Routes} from "react-router-dom";
import AuthRoutes from "./Auth/AuthRoutes";
import Login from "../Pages/Auth/Login";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="*" element={<Navigate to={
                <Login />
            } replace />} />
        </Routes>
    )
}
export default AppRoutes;
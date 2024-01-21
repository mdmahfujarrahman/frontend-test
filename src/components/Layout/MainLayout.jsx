import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
    console.log(children);
    return (
        <div>
            <Navbar />
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default RootLayout;

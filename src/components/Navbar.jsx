import "./styles/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo">
                <img src="src\assets\Logo.svg" alt="little-lemon" />
            </div>

            <div className="navbar">
                <ul className="nav-list">
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="#about">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="#menu">
                        <li>Menu</li>
                    </NavLink>
                    <NavLink to="/reservations">
                        <li>Reservations</li>
                    </NavLink>
                    <NavLink to="/order-online">
                        <li>Order Online</li>
                    </NavLink>
                    <NavLink to="/login">
                        <button
                            onClick={() =>
                                navigate("/login", { replace: true })
                            }
                        >
                            Login
                        </button>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

import "./styles/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuToggle = () => setShowMenu(!showMenu);

    return (
        <nav>
            <div className="logo">
                <NavLink to="/">
                    <img src="src\assets\Logo.svg" alt="little-lemon" />
                </NavLink>
            </div>

            <div className={showMenu ? "mobile-menu" : "web-menu"}>
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

            <div className="mobile-menu">
                <button onClick={handleMenuToggle}>
                    <GiHamburgerMenu />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

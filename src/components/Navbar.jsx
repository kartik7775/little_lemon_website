import './styles/navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="src\assets\Logo.svg" alt="little-lemon" />
            </div>
            <div className="navbar">
                <ul className="nav-list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <a href="#reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="#order-online">Order Online</a>
                    </li>
                    <li>
                        <a href="#login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

import "./styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-section_wrapper">
                <div className="footer-image">
                    <img src="src\assets\Mario and Adrian A.jpg" alt="Chefs" />
                </div>

                <div className="footer-navigation">
                    <ul className="">
                        <li>
                            <h3 className="links-head">Doormat Navigation</h3>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Menu</a>
                        </li>
                        <li>
                            <a href="">Reservations</a>
                        </li>
                        <li>
                            <a href="">Order Online</a>
                        </li>
                        <li>
                            <a href="">Login</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <ul className="">
                        <li>
                            <h3 className="links-head">Contact</h3>
                        </li>
                        <li>
                            <a href="">3H, Shanon Road, Chicago, USA.</a>
                        </li>
                        <li>
                            <a href="">+231 5684524</a>
                        </li>
                        <li>
                            <a href="">littlelemon@resto.com</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-socials">
                    <ul className="">
                        <li>
                            <h3 className="links-head">Social Media Links</h3>
                        </li>
                        <li>
                            <a href="">Instagram</a>
                        </li>
                        <li>
                            <a href="">Facebook</a>
                        </li>
                        <li>
                            <a href="">Food Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="copyright">All rights reserved | Little Lemon &copy; 2024</p>
        </footer>
    );
};

export default Footer;

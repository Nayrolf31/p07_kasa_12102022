import logo from '../../assets/logo-blanc.png';
import '../../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div className="footer-logo">
                    <img src={logo} alt="logo-kasa" />
                </div>
                <div className="footer-allRights">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

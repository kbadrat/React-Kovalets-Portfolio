import "./style.css";

import instagram from "./../../img/icons/instagram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a
                                href="https://github.com/kbadrat"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={gitHub} alt="GitHub" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a
                                href="https://www.linkedin.com/in/kovalets/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedIn} alt="LinkedIn" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a
                                href="https://www.instagram.com/vlad_x6m/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                    {/* <div className="copyright">
                        <p>© 2024 vkovalets.com</p>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

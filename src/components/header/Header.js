import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        Hi, my name is <em>Vlad</em>,
                    </strong>
                    <br />a frontend developer
                </h1>
                <div className="header__text">
                    <p>crafting interactive UIs with React.</p>
                </div>
                <a
                    href="./Vladyslav_Kovalets_CV.pdf"
                    className="btn"
                    download
                >
                    Download CV
                </a>
            </div>
        </header>
    );
};

export default Header;

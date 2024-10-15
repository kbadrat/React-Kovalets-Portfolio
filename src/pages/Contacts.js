import telegram from "./../img/contacts/telegram.png";

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Prague, Czech Republic</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <a
                            href="https://t.me/vladx6m"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={telegram}
                                alt="Telegram"
                                style={{ width: "200px", height: "200px" }}
                            />
                        </a>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:vkovalets@icloud.com">
                                vkovalets@icloud.com
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;

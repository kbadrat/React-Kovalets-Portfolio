import "./style.css";
import VUTIcon from "./logoVUT.png"


const BtnVUT = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btnVUT-outline">
            <img src={VUTIcon} alt="VUTLink" />
            Bachelor's thesis
        </a>
    );
};

export default BtnVUT;

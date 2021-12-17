import React, {useState} from "react";
import "./navStyle.css";
import {Link as Links} from 'react-scroll';
import logo from "../../Img/labline_logo.png"
import Select from "react-select";
import {useTranslation} from "react-i18next";
import "../../i18n/index";
import PuffLoader from "react-spinners/PuffLoader";

const options = [
    {value: 'ru', label: 'Ru'},
    {value: 'en', label: 'Eng'}
]
const Nav = () => {
    const {t, i18n} = useTranslation();
    const [selectedOption, setSelectedOption] = useState([options[0]]);
    const [menuOpen, setMenuOpen] = useState(false)
    let color = "#715b3e";
    let [loading, setLoading] = useState(false);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        i18n.changeLanguage(selectedOption.value);
        setLoading(true)
        setMenuOpen(false)
    };

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    const toTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <header>
                <div className="main_header">
                    <img src={logo} alt="log" onClick={toTop}/>
                    <div className={"hamburger " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                <div className={"right_menu " + (menuOpen && "open_menu")}>
                    <nav>
                        <div className="navItem">
                            <Links activeClass='active_tab' to="home" spy={true} smooth={true} offset={0} duration={500}
                                   onClick={() => setMenuOpen(false)}
                                   className="nav_link">
                                {t("Home")}
                                <div className="border border_activ"></div>
                            </Links>
                        </div>
                        <div className="navItem">
                            <Links activeClass='active_tab' to="portfolio" spy={true} smooth={true} offset={0}
                                   onClick={() => setMenuOpen(false)}
                                   duration={500} className="nav_link">

                                {t("Gallery")}
                                <div className="border border_activ"></div>
                            </Links>
                        </div>
                        <div className="navItem">
                            <Links activeClass='active_tab' to="about" spy={true} smooth={true} offset={0}
                                   onClick={() => setMenuOpen(false)}
                                   duration={500} className="nav_link">
                                {t("About")}
                                <div className="border border_activ"></div>
                            </Links>
                        </div>
                        <div className="navItem">
                            <Links activeClass='active_tab' to="contact" spy={true} smooth={true} offset={0}
                                   onClick={() => setMenuOpen(false)}
                                   duration={500}>
                                {t("Contact")}
                                <div className="border border_activ"></div>
                            </Links>
                        </div>
                    </nav>
                    <div className="lung">
                        <Select
                            options={options}
                            className='lang_select'
                            value={selectedOption}
                            isSearchable={false}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </header>
            <div
                className={`${menuOpen ? "modal-backdrop" : ""}`}
                onClick={() => setMenuOpen(false)}
            >
            </div>
            {
                loading &&
                <div className="spiner_block">
                    <PuffLoader color={color} loading={loading} size={150}/>
                </div>
            }
        </>
    );
};

export default Nav;
import "./portfolioStyle.css"
import g2 from '../../../Img/g2.jpeg'
import g1 from '../../../Img/g1.jpg'
import g3 from '../../../Img/g3.jpg'
import g4 from '../../../Img/g4.jpg'
import {Link, useHistory} from "react-router-dom";
import {Element} from 'react-scroll'
import React from "react";
import {useTranslation} from "react-i18next";

export default function Portfolio() {
    const {t} = useTranslation();
    const history = useHistory();

    const handleClick = ()=> {
        history.push("/portfolio");
    }

    return (
        <Element className="portfolioBlock" name="portfolio">
            <div className="container">
                <div className="portfolio_title">
                    <p className="main_title">
                        {t("Gallery")}
                    </p>
                </div>
                <div className='portfolio_content'>
                    <div className="content_box" onClick={handleClick}>
                        <div className="box_img">
                            <img className='imggg' src={g1} alt=""/>
                        </div>
                        <div className="hover_box">
                            <Link to="/portfolio">
                                <button>{t("More")}</button>
                            </Link>
                        </div>
                        <div className="box_text">
                            <p>{t("Type1")}</p>
                        </div>
                    </div>
                    <div className="content_box" onClick={handleClick}>
                        <div className="box_img">
                            <img className='imggg' src={g2} alt=""/>
                        </div>
                        <div className="hover_box">
                            <Link to="/portfolio">
                                <button>{t("More")}</button>
                            </Link>
                        </div>
                        <div className="box_text">
                            <p>{t("Type2")}</p>
                        </div>
                    </div>
                    <div className="content_box" onClick={handleClick}>
                        <div className="box_img">
                            <img className='imggg' src={g3} alt=""/>
                        </div>
                        <div className="hover_box">
                            <Link to="/portfolio">
                                <button>{t("More")}</button>
                            </Link>
                        </div>
                        <div className="box_text">
                            <p>{t("Type3")}</p>
                        </div>
                    </div>
                    <div className="content_box" onClick={handleClick}>
                        <div className="box_img">
                            <img className='imggg' src={g4} alt=""/>
                        </div>
                        <div className="hover_box">
                            <Link to="/portfolio">
                                <button>{t("More")}</button>
                            </Link>
                        </div>
                        <div className="box_text">
                            <p>{t("Type4")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
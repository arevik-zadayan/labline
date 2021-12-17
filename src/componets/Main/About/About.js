import "./aboutStyle.css"
import {Element} from 'react-scroll'
import {useTranslation} from "react-i18next";

export default function About() {

    const {t} = useTranslation();

    return (
        <Element className="aboutUs" name="about">
            <div className="container">
                <div className="aboutUs_block">
                    <div className="aboutUs_title">
                        <p className="main_title">
                            {t("About")}
                        </p>
                    </div>
                    <div className="aboutUs_subTitle2">
                        <p className="aboutUs_title2_text">
                            {t("AboutText")}
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    )
}
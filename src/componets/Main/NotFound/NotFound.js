import React from 'react';
import "./notFoundStyle.css"
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";

export default function NotFound() {
    const {t} = useTranslation();

    return (
        <div className="errorpage">
            <h1>Error 404</h1>
            <p>{t("NotFound")}</p>
            <div className="links">
                <Link to="/">
                    <button className="openmodal btn_style">{t("BackHome")}</button>
                </Link>
                <Link to="/portfolio">
                    <button className="openmodal btn_style">{t("BackGallery")}</button>
                </Link>
            </div>
        </div>
    )
}
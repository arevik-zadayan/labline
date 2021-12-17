import "./footerStyle.css"
import {LogoSvg} from "../Main/helpers/helpers";

export default function Footer(){
    return(
        <footer>
            <div className="copywrite">
                <div className="container copywriteContainer">
                    <div className=" copywriteText">
                        <span> © 2021 all rights reserved |
                              Developed by
                            <a href="https://interma.am/" target="blank"><LogoSvg /> </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
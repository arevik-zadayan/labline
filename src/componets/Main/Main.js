import {useEffect, useState} from "react";
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';
import Nav from '../Nav/Nav';
import {Helpers} from './helpers/helpers';
import PuffLoader from "react-spinners/PuffLoader";
import Sliders from "./Slider/Slider";

export default function Main() {
    let color = "#715b3e";
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <div className="App">
            <Nav/>
            <Sliders/>
            <Portfolio/>
            <About/>
            <ContactUs/>
            <Helpers/>
            {
                loading &&
                <div className="spiner_block">
                    <PuffLoader color={color} loading={loading} size={150}/>
                </div>
            }
        </div>
    );
}

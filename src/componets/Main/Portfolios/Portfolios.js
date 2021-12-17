import React, {useEffect, useState} from "react";
import {LightgalleryItem, LightgalleryProvider} from "react-lightgallery";
import {animated, useTransition} from "react-spring";
import {NavLink} from 'react-router-dom';
import logo from "../../../Img/labline-07.png"
import "./portfoliosStyle.css"
import "lightgallery.js/dist/css/lightgallery.css";
import ReactPaginate from 'react-paginate';
import PuffLoader from "react-spinners/PuffLoader";
import {useTranslation} from "react-i18next";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Portfolios() {
    const color = "#715b3e";
    const [loading, setLoading] = useState(false);
    const [loader, setLoader] = useState(false);
    const [filter, setFilter] = useState("");
    const [allImg, setallImg] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 15;
    const pagesVisited = pageNumber * usersPerPage;
    const {t} = useTranslation();

    useEffect(() => {
        setLoader(true)
        fetch(`${apiUrl}/api/v1/get-all-images?type=${filter}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then(response => {
                if (response.error) {
                    throw response.error;
                }
                setallImg(response.data)
                setTimeout(() => {
                    setLoader(false)
                }, 1000);
            })
            .catch((error) => {
                setTimeout(() => {
                    setLoader(false)
                }, 1000);
            })
    }, [filter])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    const sliceImg = allImg.slice(pagesVisited, pagesVisited + usersPerPage)

    const transition = useTransition(sliceImg, {
        from: {opacity: 0},
        enter: {opacity: 1}
    });

    const PhotoItem = ({image, group}) => (
        <LightgalleryItem src={image} group="galery">
            <img src={image} alt='img'/>
        </LightgalleryItem>
    );

    const fadeInListItems = transition((style, item) => {
        return (
            <animated.div style={style}>
                <div className="avatar">
                    <PhotoItem key={item._id} image={`${apiUrl}/${item.image}`}/>
                </div>
            </animated.div>
        );
    });

    const handleSearchBarChange = (target) => {
        setFilter(target)
        setPageNumber(0)
    };

    const pageCount = Math.ceil(allImg.length / usersPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return (
        <div className="portfolios">
            <div className="container">
                <div className="portfolio_title">
                    <NavLink to='/'
                             exact
                    >
                        <img src={logo} alt=""/>
                    </NavLink>
                    <p className="main_title portfolio_title_text">
                        {t("Gallery")}
                    </p>
                </div>
                <div className="portfolio__labels">
                    <span
                        onClick={() => handleSearchBarChange("")}
                        className={filter === "" ? "active_label" : " "}
                    >
                        {t("ALL")}
                    </span>
                    <span
                        onClick={() => handleSearchBarChange("type1")}
                        className={filter === "type1" ? "active_label" : " "}
                    >
                    {t("Type1")}
                    </span>
                    <span
                        onClick={() => handleSearchBarChange("type2")}
                        className={filter === "type2" ? "active_label" : " "}
                    >
                    {t("Type2")}
                    </span>
                    <span
                        onClick={() => handleSearchBarChange("type3")}
                        className={filter === "type3" ? "active_label" : " "}
                    >
                     {t("Type3")}
                    </span>
                    <span
                        onClick={() => handleSearchBarChange("type4")}
                        className={filter === "type4" ? "active_label" : " "}
                    >
                    {t("Type4")}
                    </span>
                    <span
                        onClick={() => handleSearchBarChange("type5")}
                        className={filter === "type5" ? "active_label" : " "}
                    >
                    {t("Type5")}
                    </span>
                </div>
                <div className="portfolio__container">
                    {loader ? <PuffLoader color={color} loading={loader} size={150}/> :
                        <LightgalleryProvider>
                            {fadeInListItems}
                        </LightgalleryProvider>
                    }
                </div>
                <div className="page">
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        forcePage={pageNumber}
                        onPageChange={changePage}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                </div>
            </div>
            {
                loading &&
                <div className="spiner_block">
                    <PuffLoader color={color} loading={loading} size={150}/>
                </div>
            }
        </div>
    )
}
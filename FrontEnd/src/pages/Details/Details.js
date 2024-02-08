import React from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import data from "../../assets/data/data.json"
import Carousel from "../../components/Carousel/Carousel";
//import Rating from "../../components/Rating/Rating";
import NotFound from "../../pages/NotFound/NotFound";

function Details() {
    const { id } = useParams();

    const appart = data.find((appart) => appart.id === id);
    if (appart === undefined) {
        return <NotFound />;
    } else {
        return (
            <section className="detailsContainer">
                <div className="carouselContainer">
                    <Carousel pictures={appart.pictures} />
                </div>
                <div className="basicInfos">
                    <div className="leftBasicInfos">
                        <h2 className="detailsTitle">{appart.title}</h2>
                        <p className="detailsLocation">{appart.location}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Details;
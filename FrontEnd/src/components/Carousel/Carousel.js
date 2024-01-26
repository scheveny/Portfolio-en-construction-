import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";
import image1 from "../../assets/Images/Carousel/image1.jpg";
import image2 from "../../assets/Images/Carousel/image2.jpg";
import image3 from "../../assets/Images/Carousel/image3.jpg";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = [image1, image2, image3];

    const NextImg = () => {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const PrevImg = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } else {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleClickIndicator = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            {pictures.length > 1 && (
                <div className="prev" onClick={PrevImg}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            )}

            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

            {pictures.length > 1 && (
                <div className="positionIndicator">
                    {Array.from({ length: pictures.length }, (_, index) => (
                        <span
                            key={index}
                            onClick={() => handleClickIndicator(index)}
                            className={index === currentIndex ? "active" : ""}
                        ></span>
                    ))}
                </div>
            )}

            {pictures.length > 1 && (
                <div className="next" onClick={NextImg}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            )}
        </div>
    );
}

export default Carousel;

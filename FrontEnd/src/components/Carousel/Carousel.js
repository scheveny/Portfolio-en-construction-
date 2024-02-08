import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";
import image1 from "../../assets/images/Carousel/image1.png";
import image2 from "../../assets/images/Carousel/image2.png";
import image3 from "../../assets/images/Carousel/image3.png";
import image4 from "../../assets/images/Carousel/image4.png";
import image5 from "../../assets/images/Carousel/image5.png";
import image6 from "../../assets/images/Carousel/image6.png";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Utilisation de useMemo pour éviter que le tableau pictures ne change à chaque rendu
    const pictures = useMemo(() => [image1, image2, image3, image4, image5, image6], []);

    const NextImg = useCallback(() => {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    }, [currentIndex, pictures]);

    const PrevImg = useCallback(() => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } else {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    }, [currentIndex, pictures]);

    const handleClickIndicator = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            NextImg();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex, NextImg]);

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

import Carousel from "../../components/Carousel/Carousel";
import "./Service.css"

function Service() {
    return (
        <div className="service-page">
            <Carousel />
            <div><h1>Mes Services</h1></div>
            <div className="servive-banner">
                <div className="front">
                    <h2>Développement FrontEnd</h2>
                    <div>Développement d'application web FrontEnd</div>
                    <h3>Technologies utilisées</h3>
                    <div className="techs">
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>SASS</div>
                        <div>Node</div>
                        <div>JavaScript</div>
                        <div>React</div>
                    </div>
                </div>
                <div className="back">
                    <h2>Développement BackEnd</h2>
                    <div>Développement d'application web BackEnd avec une configuration API Restful</div>
                    <h3>Technologies utilisées</h3>
                    <div className="techs">
                        <div>JavaScript</div>
                        <div>Node</div>
                        <div>Express</div>
                        <div>MongoDB</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;
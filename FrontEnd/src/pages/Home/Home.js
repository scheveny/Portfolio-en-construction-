import Carousel from "../../components/Carousel/Carousel";
import profil from "../../assets/Images/Home/photo_profil.jpg"
import "./Home.css"

function Home() {
    return (
        <div>
            <Carousel />
            <div className="intro-banner">
                <h1>Bonjour, Je suis Sylvain Chéveny, développeur fullstack ReactJs</h1>
                <img src={profil}></img>
            </div>
            <div className="intro-text">
                <div>Après plusieurs années dans l'agrolimentaire, j'ai décidé de me reconvertir dans le développement web ayant toujours été intéressé par la technologie, même si mes compétences étaient plus centrées du côté matériel (montage pc, etc...).
                    Un ami m'a introduit dans cet univers en faisant un stage en entreprise, et j'ai beaucoup aimé le côté résolution de problèmes et de tests des solutions pour arriver aux résultats demandés, et aussi la bonne ambiance de travail.
                    Et à partir de là, je me suis demandé : "pourquoi pas moi ?!!"
                </div>
            </div>
        </div>
    )
}

export default Home;
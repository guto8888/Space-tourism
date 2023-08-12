import Menu from "../menu/Menu"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./styles.module.css"
import "../../styles/carousel.styles.css"
import imgAnousheh from "../../assets/crew/image-anousheh-ansari.png"
import imgDouglas from "../../assets/crew/image-douglas-hurley.png"
import imgMark from "../../assets/crew/image-mark-shuttleworth.png"
import imgVictor from "../../assets/crew/image-victor-glover.png"

import database from "../../data.json"
const crew = database.crew

interface CrewType {
    "name": string,
    "role": string,
    "bio": string
}

const Crew = () =>  {
    return (
        <div className={styles.bgImg}>
            <Menu />
            <div>
                <h1 className={styles.title}><span className={styles.spanTitle}>02</span> Meet your crew</h1>
            </div>
            <div>
                <Carousel className={styles.bgCrl}>
                    {crew.map((item: CrewType, index: number) => {
                        let img = ""
                        switch(item.name) {
                            case "Douglas Hurley":
                                img = imgDouglas
                            break
                            case "Mark Shuttleworth":
                                img = imgMark
                            break
                            case "Victor Glover":
                                img = imgVictor
                            break
                            case "Anousheh Ansari":
                                img = imgAnousheh
                            break
                            default:
                                img = "Error"
                        }

                        return(
                            <Carousel.Item key={index}>
                                <div className={styles.description}>
                                    <div className={styles.descriptionCarousel}>
                                        <h3 className={styles.h3Text}>{item.role}</h3>
                                        <h1 className={styles.h1Text}>
                                            {item.name}
                                        </h1>
                                        <p className={styles.descText}>
                                            {item.bio}
                                        </p>
                                    </div>
                                    <div className={styles.divImgCarousel}>
                                        <img className={styles.carouselImg} src={img} alt={item.role} />
                                    </div>
                                </div>
                            </Carousel.Item>

                    )})}
                </Carousel>
            </div>
        </div>
    )
}

export default Crew
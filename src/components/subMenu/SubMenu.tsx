import styles from "./style.module.css"
import { useState } from "react"
import imgMoon from "../../assets/destination/image-moon.png"
import imgMars from "../../assets/destination/image-mars.png"
import imgEuropa from "../../assets/destination/image-europa.png"
import imgTitan from "../../assets/destination/image-titan.png"
import database from "../../data.json"

interface DestinyType {
    "name": string,
    "images": string
}

const destiny = database.destinations.reduce((acc: {[item: string]: DestinyType}, item: DestinyType) => {
    let img = ""
    switch(item.name) {
        case "Moon":
            img = imgMoon
        break;
        case "Mars":
            img = imgMars
        break;
        case "Europa":
            img = imgEuropa
        break;
        case "Titan":
            img = imgTitan
        break;
        default:
            img = "Erro"
    }
    item.images = img
    acc[item.name] = item
    
    return acc;
},{})


const SubMenu = () => {
    const [destination, setDestination] = useState(destiny["Moon"])

    return (
        <div className={styles.subMenu}>
            <div className={styles.imgPlanet}>
                <img src={destination.images} alt={destination.name} />
            </div>
            <div className={styles.destinationNav}>
                <ul className={styles.subMenuUl}>
                    {Object.keys(destiny).map((element, index) => {
                      const planet = destiny[element]
                      return (
                        <li key={index} className={styles.subLi}>
                            <div className={styles.btnSubmenu} onClick={() => setDestination(planet)}>
                                {planet.name}
                                {destination.name === `${planet.name}` && <span className={styles.spanIcon}></span>}
                            </div>
                        </li> 
                        )
                    })} 
                </ul>
                <div className={styles.divPlanet}>
                    <h1 className={styles.destinationTitle}>{destination.name}</h1>
                    <p className={styles.destinationDescrip}>
                        {destination.description}
                    </p>
                    <hr />
                    <div className={styles.destinationTravel}>
                        <div className={styles.destinationDistance}>
                            <p className={styles.destinationDistanceText}>Avg. distance</p>
                            <p className={styles.destTravel}>{destination.distance}</p>
                        </div>
                        <div className={styles.travelTime}>
                            <p className={styles.travelText}>Est. travel time</p>
                            <p className={styles.destTravel}>{destination.travel}</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )

}

export default SubMenu
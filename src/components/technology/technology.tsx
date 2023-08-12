import { useState } from "react"
import Menu from "../menu/Menu"
import styles from "./styles.module.css"
import database from "../../data.json"

import imgLaunch from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import imgSpace from "../../assets/technology/image-spaceport-portrait.jpg"
import imgCapsule from "../../assets/technology/image-space-capsule-portrait.jpg"

import imgLaunchMobile from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import imgSpaceMobile from "../../assets/technology/image-spaceport-landscape.jpg"
import imgCapsuleMobile from "../../assets/technology/image-space-capsule-landscape.jpg"

interface TechType {
    "name": string,
    "id": number,
    "images": string[]
}

const tech = database.technology.reduce((acc:  {[item: string]: TechType}, item: TechType, index: number) => {
    let img: string[] = [] 

    switch(item.name) {
        case "Launch vehicle":
                img = [imgLaunch, imgLaunchMobile]
            break
        case "Space capsule":
                img = [imgCapsule, imgCapsuleMobile]
            break
        case "Spaceport":
                img = [imgSpace, imgSpaceMobile]
            break
        default: 
            img = []
    }

    item.id = index + 1
    item.images = img
    acc[item.name] = item 
    return acc
}, {})

const Technology = () => {
    const [select, setSelect] = useState(tech["Launch vehicle"])

    const handleInfo = (handleObj: TechType) => {
        setSelect(handleObj)
    }

    return (
        <div className={styles.mainDiv}>
            <Menu />
            <h2 className={styles.titlePage}>
            <span className={styles.spanTitle}>03</span> Space launch 101
            </h2>
            <div className={styles.subDiv}>
                <div className={styles.btnDiv}>
                    {Object.keys(tech).map(item => {
                        const tec = tech[item]
                        return (
                            <button key={tec.id} className={select.id === tec.id ? styles.btnSelect : styles.buttonSelect} onClick={() => handleInfo(tec)}>
                                {tec.id}
                            </button>
                        )
                    })}  
                </div>
                <div className={styles.descriptionItem}>
                    <div className={styles.textDescription}>
                        <h3>The terminology...</h3>
                        <h1>{select.name}</h1>
                        <p className={styles.details}> {select.description}</p>
                    </div>
                    <div>
                        <img className={styles.imgDescription} src={select.images[0]} alt={select.title} />
                        <img className={styles.imgMobile} src={select.images[1]} alt={select.title} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
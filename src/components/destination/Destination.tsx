import Menu from "../menu/Menu"
import styles from "./style.module.css"
import SubMenu from "../subMenu/SubMenu"

const Destination = () => {
    return (
        <div className={styles.backgroundImg}>
            <Menu />
            <div className={styles.destination}>
                <h1 className={styles.titleText}>
                    <span className={styles.span01}>01</span> Pick your destination
                </h1>
                <SubMenu />
            </div>
        </div>
    )
}

export default Destination
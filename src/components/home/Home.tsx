import Menu from "../menu/Menu"
import styles from "../home/style.module.css"

const Home = () => {


    return (
        <div className={styles.backgroundImg}>
            <Menu />
            <div className={styles.home}>
                <div className={styles.text}>
                    <p className={styles.firstP}>
                        So, you want to travel to
                    </p>
                    <h1 className={styles.h1}>
                        Space
                    </h1>
                    <p className={styles.secondP}>
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className={styles.button}>
                    <button className={styles.btn}>
                         Explore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
import styles from "../styles/HeroSection.module.scss"

function HeroSection() {
    return (
        <div className={styles.container}>
             <h1>So, you want to travel to <br />
            </h1>
            <div> Space</div>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!</p>
            <div className={styles.buttonWrapper}>
                <div className={styles.ctaButton}>Explore</div>
            </div>
        </div>
    )
}

export default HeroSection

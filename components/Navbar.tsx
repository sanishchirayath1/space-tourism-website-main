import Image from "next/image"
import styles from "../styles/Navbar.module.scss"
import { useState } from "react"
import { DEFAULT_MAX_VERSION } from "tls"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.container}>
            <Image 
            src="/assets/shared/logo.svg" 
            alt="logo" 
            width={40} 
            height={40}
            onClick={() => {console.log("clicked")}}
            />
            {isOpen ? 
                <Image 
                src="/assets/shared/icon-close.svg" 
                alt="close icon"
                width={24}
                height={24}
                onClick={() => {setIsOpen(!isOpen)}}
                className={isOpen ? styles.active : styles.inactive}
                /> 
            :
                <Image 
                src="/assets/shared/icon-hamburger.svg" 
                alt="hamburger icon"
                width={24}
                height={24}
                onClick={() => {setIsOpen(!isOpen)}}
                className={isOpen ? styles.inactive : styles.active}
                />
            }
            <nav className={isOpen ? "navOverlayActive" : "navOverlayInactive"}>     
                <ul>
                    <li><span>00 </span> Home</li>
                    <li><span>01</span> Destination</li>
                    <li><span>02</span> Crew</li>
                    <li><span>03</span> Technology</li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar

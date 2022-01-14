import Image from "next/image"
import styles from "../styles/Navbar.module.scss"
import { useState } from "react"
import Link from "next/link"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        console.log("clicked")
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.container}>
            <Link href="/" passHref>
                <Image 
                src="/assets/shared/logo.svg" 
                alt="logo" 
                width={40} 
                height={40}
                onClick={handleClick}
                />
            </Link>
            
            {isOpen ? 
                <Image 
                src="/assets/shared/icon-close.svg" 
                alt="close icon"
                width={24}
                height={24}
                onClick={handleClick}
                className={isOpen ? styles.active : styles.inactive}
                /> 
            :
                <Image 
                src="/assets/shared/icon-hamburger.svg" 
                alt="hamburger icon"
                width={24}
                height={24}
                onClick={handleClick}
                className={isOpen ? styles.inactive : styles.active}
                />
            }
            <nav className={isOpen ? "navOverlayActive" : "navOverlayInactive"}>     
                <ul>
                    <Link href="/" passHref  >
                        <li onClick={handleClick}><span>00 </span> Home</li>
                    </Link>
                    
                    <Link href="/destination" passHref>
                        <li onClick={handleClick}><span>01</span> Destination</li>
                    </Link>
                    
                    <Link href="/crew" passHref>
                        <li onClick={handleClick}><span>02</span> Crew</li>
                    </Link>
                    
                    <Link href="/technology" passHref>
                        <li onClick={handleClick}><span>03</span> Technology</li>
                    </Link>
                    

                </ul>
            </nav>
        </div>
    )
}

export default Navbar

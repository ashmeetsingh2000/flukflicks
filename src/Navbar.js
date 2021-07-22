import React, { useState, useEffect } from 'react'
import "./Navbar.css"

function Navbar() {

    const [show, handleshow] = useState(false)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true);
            } else handleshow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    return (
        <div className={`Nav ${show && "nav_black"}`}>
            <img className="nav_logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netlix Logo"
            />
            <img className="nav_avtar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Netlix Logo"
            />
        </div>
    );
}

export default Navbar

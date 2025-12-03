// Navbar.jsx
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "../../features/theme/ThemeToggle.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import profilePic from '../../assets/shibsundarChakraborty.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.logo} animate__animated animate__backInDown`}>
        <img className={styles.logoimg} src={profilePic} alt="SHIB" />
      </div>
      
      {/* Desktop Navigation */}
      <div className={`${styles.navlinkDiv} animate__animated animate__backInDown`}>
        <Link className={styles.navlink} to="/">
          Home
        </Link>
        <Link className={styles.navlink} to="/Creations">
          Creations
        </Link>
        <Link className={styles.navlink} to="/about">
          About
        </Link>
        <Link className={styles.navlink} to="/contact">
          Contact
        </Link>
      </div>
      
      {/* Desktop Theme Toggle */}
      <div className={`${styles.themeButton} animate__animated animate__backInDown`}>
        <ThemeToggle />
      </div>
      
      {/* Hamburger Menu Button */}
      <button className={`${styles.hamburger} animate__animated animate__backInDown`} onClick={toggleMenu} aria-label="Toggle menu">
        <GiHamburgerMenu size={30} />
      </button>
      
      {/* Mobile Dropdown Menu */}
      <div className={`${styles.dropDownMenu} ${isMenuOpen ? styles.active : ""}`}>
        <div className={styles.dropDownHeader}>
          <button
            className={styles.closeButton}
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <IoClose size={35} />
          </button>
        </div>
        
        <div className={styles.dropDownContent}>
          <Link className={styles.dropdownNavlink} to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className={styles.dropdownNavlink} to="/Creations" onClick={closeMenu}>
            Creations
          </Link>
          <Link className={styles.dropdownNavlink} to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link className={styles.dropdownNavlink} to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          
          <div className={styles.dropDownThemeButton}>
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;

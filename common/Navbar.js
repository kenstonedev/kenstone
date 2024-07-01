import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoWrapper}>
                <Image
                    src="/images/kenstone-logo.png"
                    alt="image"
                    width={50}
                    height={50}
                />
            </div>
            <div className={styles.navContent}>
                <div className={styles.adminText}>Admin</div>
                <div className={styles.searchIcon}>
                    <IoSearch size={30} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import Image from "next/image";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import styles from "./Sidebar.module.css"; // Import the CSS module

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Image
                src="/images/dashboard.svg"
                alt="image"
                width={40}
                height={40}
            />
            <div className={styles.iconWrapper}>
                <VscBellDot size={30} />
            </div>
            <div className={styles.iconWrapper}>
                <IoSettingsOutline size={30} />
            </div>
        </div>
    );
};

export default Sidebar;

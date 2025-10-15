import React from "react";

import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import { NavigationData } from "@/types";

import styles from "./DesktopMenu.module.css";

interface DesktopMenuProps {
  navigationData?: NavigationData | null;
  className?: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  navigationData,
  className = "",
}) => {
  if (!navigationData) {
    return null;
  }

  return (
    <div className={`${styles.menuContainer} ${className}`}>
      {/* SVG градиент для иконок */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BDFFF4" />
            <stop offset="100%" stopColor="#D93497" />
          </linearGradient>
        </defs>
      </svg>

      <nav className={styles.desktopMenu}>
        {navigationData.menu.map((item, index) => (
          <a key={item.id} href={item.link} className={styles.menuItem}>
            {index === 0 && <ArrowLeftIcon className={styles.arrowIcon} />}
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default DesktopMenu;

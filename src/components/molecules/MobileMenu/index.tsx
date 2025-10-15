import React from "react";

import MenuIcon from "@/assets/icons/menu.svg";
import { NavigationData } from "@/types";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  navigationData?: NavigationData | null;
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navigationData,
  className = "",
}) => {
  if (!navigationData) {
    return null;
  }

  return (
    <div className={`${styles.menuContainer} ${className}`}>
      <nav className={styles.mobileNav}>
        <details className={styles.drawer}>
          <summary className={styles.burger} aria-label="Открыть меню">
            <MenuIcon />
          </summary>
          <div className={styles.panel} role="menu">
            {navigationData.menu.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={styles.mobileMenuItem}
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </div>
  );
};

export default MobileMenu;

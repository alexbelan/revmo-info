import React from "react";

import DownloadIcon from "@/assets/icons/download.svg";
import GradientButton from "@/atoms/GradientButton";
import DesktopMenu from "@/molecules/DesktopMenu";
import Logo from "@/molecules/Logo";
import MobileMenu from "@/molecules/MobileMenu";
import { NavigationData, MainData } from "@/types";

import styles from "./Header.module.css";

interface HeaderProps {
  navigationData?: NavigationData | null;
  mainData?: MainData | null;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  navigationData,
  mainData,
  className = "",
}) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.headerContent}>
        <div className={styles.headerContentLeft}>
          <MobileMenu navigationData={navigationData} />
          <div className={styles.logoContainer}>
            <Logo navigationData={navigationData} />
          </div>
        </div>

        <DesktopMenu navigationData={navigationData} />
        {mainData?.sidebar.download_app.enabled && (
          <div className={styles.downloadButtonContainer}>
            <GradientButton
              text={mainData.sidebar.download_app.label}
              iconComponent={<DownloadIcon />}
              className={styles.downloadButton}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from "react";

import Logo from "@/molecules/Logo";
import SocialLinks from "@/molecules/SocialLinks";
import { MainData, NavigationData } from "@/types";

import styles from "./Footer.module.css";

interface FooterProps {
  mainData?: MainData | null;
  navigationData?: NavigationData | null;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  mainData,
  navigationData,
  className = "",
}) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.content}>
        <Logo navigationData={navigationData} />

        <SocialLinks mainData={mainData} />
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

import LogoIcon from "@/assets/icons/logo.svg";
import IconButton from "@/atoms/IconButton";
import { NavigationData } from "@/types";

import styles from "./Logo.module.css";


interface LogoProps {
  navigationData?: NavigationData | null;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ navigationData, className = "" }) => {
  // Fallback данные если API недоступен
  const fallbackData = {
    text: "Revmo.info app",
    link: "/",
  };

  const logoData = navigationData?.logo || fallbackData;
  return (
    <IconButton
      href={logoData.link}
      variant="ghost"
      size="medium"
      icon={<LogoIcon className={styles.logoIcon} />}
      iconPosition="left"
      className={`${styles.logo} ${className}`}
    >
      <span className={styles.logoText}>{logoData.text}</span>
    </IconButton>
  );
};

export default Logo;

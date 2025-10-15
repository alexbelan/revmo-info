import Image from "next/image";
import React from "react";

import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

import styles from "./GradientButton.module.css";

interface GradientButtonProps {
  text: string;
  iconUrl?: string;
  iconComponent?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  iconUrl,
  iconComponent,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.gradientButton} ${className}`}
      disabled={disabled}
    >
      {/* SVG градиент для иконок */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BDFFF4" />
            <stop offset="100%" stopColor="#D93497" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.iconContainer}>
        {iconComponent ? (
          <div className={styles.iconSvg}>{iconComponent}</div>
        ) : iconUrl ? (
          <Image
            src={iconUrl}
            alt="icon"
            width={24}
            height={24}
            className={styles.iconImage}
          />
        ) : (
          <ArrowRightIcon className={styles.iconSvg} />
        )}
      </div>
      <div className={styles.buttonContent}>
        <span className={styles.text}>{text}</span>

        {/* Контейнер стрелочек справа */}
        <div className={styles.arrowsContainer}>
          <div className={styles.arrow}>
            <ArrowRightIcon className={styles.arrowIcon} />
          </div>
          <div className={styles.arrow}>
            <ArrowRightIcon className={styles.arrowIcon} />
          </div>
          <div className={styles.arrow}>
            <ArrowRightIcon className={styles.arrowIcon} />
          </div>
        </div>
      </div>
    </button>
  );
};

export default GradientButton;

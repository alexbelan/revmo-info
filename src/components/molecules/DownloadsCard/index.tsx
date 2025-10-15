import React from "react";

import AppleIcon from "@/assets/icons/apple.svg";
import DownloadIcon from "@/assets/icons/download.svg";
import GooglePlayIcon from "@/assets/icons/google-play.svg";
import BackgroundBlurIcon from "@/atoms/BackgroundBlurIcon";
import Card from "@/atoms/Card";
import IconButton from "@/atoms/IconButton";
import { MainData } from "@/types";

import styles from "./DownloadsCard.module.css";

interface DownloadsCardProps {
  mainData?: MainData | null;
}

const DownloadsCard: React.FC<DownloadsCardProps> = ({ mainData }) => {
  if (!mainData) {
    return null;
  }

  return (
    <Card size="medium" className={styles.card}>
      <div className={styles.backgroundIcon}>
        <BackgroundBlurIcon />
      </div>

      <div className={styles.content}>
        {/* APK кнопка для планшетов - сверху */}
        {mainData.buttons.apk.enabled && (
          <div className={styles.apkLinkTop}>
            <IconButton
              icon={<DownloadIcon />}
              iconPosition="right"
              variant="ghost"
              size="small"
              className={styles.apkButton}
            >
              {mainData.buttons.apk.label}
            </IconButton>
          </div>
        )}

        <div className={styles.textBlock}>
          <h1>{mainData.title}</h1>
          <h2>{mainData.subtitle}</h2>
        </div>

        <div className={styles.buttonsBlock}>
          <div className={styles.downloadButtons}>
            {mainData.buttons.ios.enabled && (
              <IconButton
                icon={<AppleIcon />}
                iconPosition="left"
                variant="primary"
                size="large"
              >
                {mainData.buttons.ios.label}
              </IconButton>
            )}

            {mainData.buttons.android.enabled && (
              <IconButton
                icon={<GooglePlayIcon />}
                iconPosition="left"
                variant="primary"
                size="large"
              >
                {mainData.buttons.android.label}
              </IconButton>
            )}
          </div>

          {/* APK кнопка для мобилок - снизу */}
          {mainData.buttons.apk.enabled && (
            <div className={styles.apkLinkBottom}>
              <IconButton
                icon={<DownloadIcon />}
                iconPosition="right"
                variant="ghost"
                size="small"
                className={styles.apkButton}
              >
                {mainData.buttons.apk.label}
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default DownloadsCard;

import React from "react";

import DownloadsCard from "@/molecules/DownloadsCard";
import QRButton from "@/molecules/QRButton";
import VideoButton from "@/molecules/VideoButton";
import VideoPlayer from "@/molecules/VideoPlayer";
import { MainData } from "@/types";

import styles from "./MainSection.module.css";

interface MainSectionProps {
  mainData?: MainData | null;
  className?: string;
}

const MainSection: React.FC<MainSectionProps> = ({
  mainData,
  className = "",
}) => {
  return (
    <div className={`${styles.mainSection} ${className}`}>
      <div className={styles.grid}>
        <div className={styles.header}>
          <DownloadsCard mainData={mainData} />
        </div>
        <div className={styles.video}>
          <VideoPlayer mainData={mainData} />
        </div>
        <div className={styles.buttonsContainer}>
          {/* Watch video кнопка */}
          {mainData?.sidebar.watch_video.enabled && (
            <div className={styles.videoBtn}>
              <VideoButton
                label={mainData.sidebar.watch_video.label}
                videoUrl={mainData.sidebar.watch_video.url}
              />
            </div>
          )}

          {/* QR code кнопка */}
          {mainData?.sidebar.qr_code.enabled && (
            <div className={styles.qrBtn}>
              <QRButton
                label={mainData.sidebar.qr_code.label}
                qrUrl={mainData.sidebar.qr_code.url}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;

"use client";

import React from "react";

import Card from "@/atoms/Card";
import IconButton from "@/atoms/IconButton";

import styles from "./VideoButton.module.css";

interface VideoCardProps {
  label?: string;
  videoUrl?: string;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  label = "смотреть видео о приложении",
  videoUrl,
  className = "",
}) => {
  const PlayIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.60001 12V10.52C9.60001 8.60999 10.95 7.83999 12.6 8.78999L13.88 9.52999L15.16 10.27C16.81 11.22 16.81 12.78 15.16 13.73L13.88 14.47L12.6 15.21C10.95 16.16 9.60001 15.38 9.60001 13.48V12Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const handleClick = () => {
    if (videoUrl) {
      window.open(videoUrl, "_blank");
    }
  };

  return (
    <div className={`${styles.videoCard} ${className}`}>
      <Card size="small" className={styles.card}>
        <div className={styles.content}>
          <IconButton
            icon={<PlayIcon />}
            className={styles.playButton}
            onClick={handleClick}
          ></IconButton>

          <div className={styles.textBlock}>
            <div className={styles.textLine}>{label}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VideoCard;

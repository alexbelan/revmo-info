import React from "react";

import Card from "@/atoms/Card";
import { MainData } from "@/types";

import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  mainData?: MainData | null;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  mainData,
  className = "",
}) => {
  const videoUrl = mainData?.videoUrl || "/video/video-app.mp4";

  return (
    <Card size="large" className={`${styles.videoBlock} ${className}`}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src={videoUrl} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </Card>
  );
};

export default VideoPlayer;

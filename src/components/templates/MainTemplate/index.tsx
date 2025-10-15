import React from "react";

import Header from "@/organisms/Header";
import MainSection from "@/organisms/MainSection";
import { NavigationData, MainData } from "@/types";

import styles from "./MainTemplate.module.css";

interface MainTemplateProps {
  navigationData?: NavigationData | null;
  mainData?: MainData | null;
  className?: string;
}

const MainTemplate: React.FC<MainTemplateProps> = ({
  navigationData,
  mainData,
  className = "",
}) => {
  return (
    <div className={`${styles.mainTemplate} ${className}`}>
      <Header navigationData={navigationData} mainData={mainData} />
      <MainSection mainData={mainData} />
    </div>
  );
};

export default MainTemplate;

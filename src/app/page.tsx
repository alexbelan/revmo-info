import { api } from "@/lib/api";
import Footer from "@/organisms/Footer";
import Header from "@/organisms/Header";
import MainSection from "@/organisms/MainSection";
import ReviewsSection from "@/organisms/ReviewsSection";

// Функция для получения данных на сервере
async function getPageData() {
  try {
    const [navigationData, sliderData, mainData] = await Promise.all([
      api.getNavigationData(),
      api.getSliderData(),
      api.getMainData(),
    ]);
    return { navigationData, sliderData, mainData };
  } catch {
    // console.error("Error fetching page data:", error);
    return { navigationData: null, sliderData: null, mainData: null };
  }
}

export default async function Home() {
  const { navigationData, sliderData, mainData } = await getPageData();

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header navigationData={navigationData} mainData={mainData} />
        <MainSection mainData={mainData} />
      </div>
      <ReviewsSection sliderData={sliderData} />

      <Footer mainData={mainData} navigationData={navigationData} />
    </>
  );
}

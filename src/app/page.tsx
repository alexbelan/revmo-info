import { api } from "@/lib/api";
import Footer from "@/organisms/Footer";
import MainTemplate from "@/templates/MainTemplate";
import ReviewsTemplate from "@/templates/ReviewsTemplate";

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
      <MainTemplate navigationData={navigationData} mainData={mainData} />
      <ReviewsTemplate
        navigationData={navigationData}
        sliderData={sliderData}
      />
      <Footer mainData={mainData} navigationData={navigationData} />
    </>
  );
}

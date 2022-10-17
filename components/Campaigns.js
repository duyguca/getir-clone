import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bannersData from "./api/banners.json";
import Banner from "./Banner";

function Campaigns() {
  const [banners, setBanners] = React.useState([]);

  React.useEffect(() => {
    setBanners(bannersData);
  }, []);

  console.log("bannersData", banners);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide>
            <Banner key={index} banner={banner} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Campaigns;

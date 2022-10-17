import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Image = ({ src }) => {
  return (
    <div className="w-full absolute min-h-[80vh] -z-1">
      <img
        className="absolute object-cover top-0 left-0 w-full h-full"
        src={src}
      />
    </div>
  );
};

function HeroSection() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="relative w-full min-h-[80vh] flex items-center justify-end">
          <Image src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/04/119504.jpg" />
          <div className="container mx-auto z-50">
            <div className="w-full flex justify-end">
              <div className="w-[250px] h-[250px] bg-white">Test</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://i.guim.co.uk/img/media/3b00f2961f3e2e9a5386e2bd1b09b9f38c707b91/0_1679_5437_3261/master/5437.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=05e20545b7534fcdce7afb24e3057b5d" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOE1JNLDLIEI/v1/-1x-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://cdne-totv8-prod.azureedge.net/media/40505/clubannouncement_getir_1.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSection;

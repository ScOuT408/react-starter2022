import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Service from "../components/Service";
import LatestProducts from "../components/LatestProducts";
import Banner from "../components/Banner";

function Home() {
  return (
    <div className="home">
      <section>
        <Swiper
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="img__div">
              <img src="./images/home-1.jpg" alt="img-1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img__div">
              <img src="./images/home-2.jpg" alt="img-2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img__div">
              <img src="./images/home-3.jpg" alt="img-2" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Service />
      <LatestProducts />
      <Banner />
    </div>
  );
}

export default Home;

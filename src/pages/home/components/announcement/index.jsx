import React, { useEffect } from "react";
import useFetch from "../../../../hooks/get";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const Announcement = () => {
  const { data, error } = useFetch("announcement");

  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    if (data) {
      console.log("Announcement Data:", data);
    }
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [data, error]);

  if (!data) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Veri alınırken bir hata oluştu.</div>;
  }

  return data && data.announcement ? (
    <div className="w-full relative px-4 py-16 sm:px-6 lg:px-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black sm:text-4xl">Duyurular</h1>
      </div>

      <div className="relative rounded-3xl overflow-hidden bg-transparent p-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="swiper-wrapper"
        >
          {data.announcement.map((announcement, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="flex flex-col items-center justify-center gap-6">
                {isSmallScreen && announcement.phone_image ? (
                  <div className="flex justify-center items-center w-full rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={announcement.phone_image}
                      alt="Phone Announcement"
                      className="object-cover w-full h-[400px] sm:h-[500px] md:h-auto rounded-2xl transition-transform duration-500"
                    />
                  </div>
                ) : announcement.image && announcement.link ? (
                  <a
                    href={announcement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-4/5 rounded-2xl overflow-hidden shadow-md transition-transform duration-500 hover:scale-105"
                  >
                    <img
                      src={announcement.image}
                      alt="Announcement"
                      className="object-cover w-full h-[400px] sm:h-[500px] md:h-[450px] rounded-2xl"
                    />
                  </a>
                ) : announcement.image ? (
                  <div className="flex justify-center items-center w-4/5 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={announcement.image}
                      alt="Announcement"
                      className="object-cover w-full h-[400px] sm:h-[500px] md:h-[450px] rounded-2xl transition-transform duration-500"
                    />
                  </div>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-6"></div>
      </div>
    </div>
  ) : null;
};

export default Announcement;

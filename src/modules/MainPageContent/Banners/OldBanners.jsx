"use client";

// import styles from "./Banners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { banners } from "@/modules/MainPageContent/Banners/lib/images";


export default function Banners() {
    return (
        <div className={styles.banners}>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                pagination={{ type: "fraction" }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                style={{ width: "100%", height: "100%" }}
            >
                {banners.map((image, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <div className={styles.image_wrapper}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill={true}
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


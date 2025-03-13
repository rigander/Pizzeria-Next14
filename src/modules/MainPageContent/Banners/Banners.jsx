"use client";

import { useState, useEffect } from "react";
import styles from "./Banners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { banners } from "@/modules/MainPageContent/Banners/lib/images";

export default function Banners() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className={styles.banners}>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={15}
                slidesPerView={3}
                pagination={{ type: "fraction" }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                style={{ width: "100%", height: "240px" }}
            >
                {banners.map((image, index) => (
                    <SwiperSlide key={index}>
                            <Image
                            width={600}
                            height={240}
                            src={image.src}
                            alt={image.alt}
                            priority={isMounted && index === 0}
                            loading={isMounted && index === 0 ? "eager" : "lazy"}
                            />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

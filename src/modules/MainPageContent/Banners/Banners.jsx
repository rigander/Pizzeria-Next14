"use client";

import styles from './Banners.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import {banners} from '@/modules/MainPageContent/Banners/lib/images'


export default function Banners () {
    return(
        <div className={styles.banners}>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                pagination={{ type: 'fraction' }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                style={{ width: "100%", height: "250px" }}
            >
                {banners.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image width={250} height={250}
                               src={image.src} alt={image.alt} />
                    </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    )
}
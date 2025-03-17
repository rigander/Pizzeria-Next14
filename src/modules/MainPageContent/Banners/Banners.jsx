"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";
import styles from "./Banners.module.scss";
import { banners } from "@/modules/MainPageContent/Banners/lib/images";

export default function Banners() {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()]);

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {banners.map((image, index) => (
                    <div key={index} className={styles.embla__slide}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


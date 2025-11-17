'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import './carusel.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';


export default function Carusel({items}: {items: {src: string, type: 'photo' | 'video'}[]}) {
	return (
		<Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 120000 }}
      className="h-3/6 border-t-2 border-t-fuchsia-100"
			style={{backgroundColor:" rgba(244, 244, 244, 0.386)", backdropFilter: 'blur(8px)', overflow: 'hidden', width: '630px'}} 
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
						{item.type === 'photo' ? (
            <div className="grid h-3/6 items-center justify-center overflow-hidden">
              <Image
                src={item.src}
								alt='alt'
                width={500}
								height={550}
								
                className=""
              />
            </div>
          ) : (
            <div className="grid items-center justify-center">
              <video
                src={item.src}
                controls
								width={270}
								height={350}
                className=""
              />
            </div>
          )}

					
        </SwiperSlide>
				
      ))}

			
    </Swiper>
	)
}
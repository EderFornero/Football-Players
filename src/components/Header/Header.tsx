"use client"
import 'swiper/css'
import { Swiper, SwiperSlide} from "swiper/react"
import { MotionTransition } from "../MotionTransition"
import { swiperHeader } from "./Header.data"
import Image from "next/image"

export const Header = () => {
  return (
    <MotionTransition>
      <nav className="relative py-8 md:py-5">
        <div className="relative w-full overflow-hidden">
        <Swiper
        breakpoints={{
          320: {
            slidesPerView: 4, 
          }
        }}
        grabCursor={true}
        loop={true}
        speed={300}
        >
            {
              swiperHeader.map(({id, image}) => (
                <SwiperSlide key={id} className="slider-horizontal">
                  <Image src={image} width="200" height="100" className="h-[100px] w-[200px]" alt="Football Header" />
                </SwiperSlide>
              ))
            }
        </Swiper>
        </div>
      </nav>
    </MotionTransition>
  )
}
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Image from "next/image";
import { BsInfoCircle } from "react-icons/bs"
import SectionContainer from "./lib/SectionContainer";

function Welcome() {
  return (
    <SectionContainer>
      <Swiper 
      navigation={true} 
      modules={[Navigation]} 
      className="bg-white h-3/5"
      loop
      >
        <SwiperSlide>
        <div className="absolute z-10">
                <div className="px-16 h-3/5 flex items-center justify-start">
                    <div className="flex flex-col p-2 mt-4 ml-36 space-y-4 py-6 text-right md:py-8">
                        <div className="text-3xl tracking-wider sm:text-6xl md:text-6xl lg:text-8xl p-2 bg-clip-text bg-gradient-to-bl text-transparent font-bold bg-conic-to-l from-sky-400 to-blue-800">Mont Calm Murree</div>
                    </div>
                </div>
            </div>
            <Image
            alt='Banner'
            layout='responsive'
            width={1920}
            height={1080}
            className="rounded-xl opacity-80"
            src='/HomePage/Miranjani.jpg'
            priority
            />
        </SwiperSlide>
        <SwiperSlide>
        <div className="absolute z-10">
                <div className="px-16 h-3/5 flex items-center justify-start">
                    <div className="flex flex-col p-2 mt-4 space-y-4 py-6 md:py-12">
                        <div className="text-3xl md:text-6xl lg:text-8xl text-white">Plan <div className="font-bold">Breathtaking</div> Family Vacations</div>
                        <div className="flex space-x-4 flex-row w-full">
                              <button className="transition text-black text-xs md:text-lg duration-300 hover:translate-y-1 bg-white hover:bg-gray-200 hover:shadow-2xl px-3 mt-3 items-center shadow-xl rounded-lg space-x-2 py-2 justify-center flex w-auto">
                                  <BsInfoCircle />
                                  <span className="text-black font-semibold">View More Rooms</span>
                              </button>
                          </div>
                    </div>
                </div>
            </div>
            <Image
            alt='Banner'
            layout='responsive'
            width={1920}
            height={1080}
            className="rounded-xl"
            src='/HomePage/main-room.jpg'
            />
        </SwiperSlide>
      </Swiper>
      </SectionContainer>
  );
}

export default Welcome

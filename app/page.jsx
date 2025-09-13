"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function Home() {
  // Array com 8 imagens de exemplo (substitua com as URLs reais das imagens)
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  ];

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={'fade'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 to-transparent flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center text-white px-4"
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black/80 font-quarternary">
                    Capturando Emoções em Cada Click
                  </h1>
                  <p className="text-xl md:text-2xl font-quinary text-black/70 uppercase">
                    Transformando momentos efêmeros em memórias eternas
                  </p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botão de call-to-action fixo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition-colors"
          onClick={console.log("clique")}
        >
          Agende Sua Sessão
        </button>
      </motion.div>
    </section>
  );
}
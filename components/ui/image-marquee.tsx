"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ghanaImages = [
  { src: "/images/city-buildings/building1.png", alt: "Modern buildings in Accra" },
  { src: "/images/city-buildings/building2.png", alt: "Accra business district" },
  { src: "/images/ghana/accra-skyline.jpg", alt: "Accra skyline" },
  { src: "/images/city-buildings/building3.png", alt: "Accra architecture" },
  { src: "/images/ghana/black-star-square.jpg", alt: "Black Star Square, Accra" },
  { src: "/images/city-buildings/accra-business.jpg", alt: "Accra business area" },
  { src: "/images/ghana/accra-modern.jpg", alt: "Modern Accra" },
  { src: "/images/ghana/accra-city.jpg", alt: "Accra city" },
];

// Duplicate for seamless loop
const doubled = [...ghanaImages, ...ghanaImages];

export default function ImageMarquee() {
  return (
    <section className="py-14 bg-[#F8F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-[#C8900A]" />
          <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
            Ghana Today
          </span>
          <div className="flex-1 h-px bg-[#E5E0D8]" />
          <span className="text-[#2C2C2C]/40 text-xs italic">
            Accra — Africa's fastest-growing business hub
          </span>
        </div>
      </div>

      <div className="relative">
        {/* Left/right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F8F5F0, transparent)" }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F8F5F0, transparent)" }}
        />

        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {doubled.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, zIndex: 10 }}
              transition={{ duration: 0.3 }}
              className="relative h-52 w-80 flex-shrink-0 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-[#0D1B2A]/10 hover:bg-transparent transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

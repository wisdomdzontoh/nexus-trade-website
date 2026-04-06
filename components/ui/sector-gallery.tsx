"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface SectorGalleryProps {
  images: string[];
  sectorName: string;
}

export default function SectorGallery({ images, sectorName }: SectorGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % images.length));

  // Build a masonry-style layout: first image large, rest in grid
  const [hero, ...rest] = images;

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-[#C8900A]" />
            <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
              {sectorName} in Pictures
            </span>
          </div>

          {/* Hero + mosaic grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px]">
            {/* Hero image spans 2×2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setLightbox(0)}
            >
              <Image
                src={hero}
                alt={`${sectorName} — main`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium">View gallery</span>
              </div>
            </motion.div>

            {/* Remaining images */}
            {rest.slice(0, 4).map((src, i) => (
              <motion.div
                key={src}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setLightbox(i + 1)}
              >
                <Image
                  src={src}
                  alt={`${sectorName} ${i + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Show "+N more" overlay on last visible cell if there are hidden images */}
                {i === 3 && rest.length > 4 && (
                  <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">+{rest.length - 4}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[85vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox]}
                alt={`${sectorName} ${lightbox + 1}`}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />
            </motion.div>

            {/* Controls */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === lightbox ? "bg-[#E6A817] w-4" : "bg-white/40"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

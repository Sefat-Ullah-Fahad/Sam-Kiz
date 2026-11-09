import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/jewelleryData';
import { useJewellery } from '../context/JewelleryContext';

export const CategoryBentoGrid: React.FC = () => {
  const { setSelectedCategory, navigateToHome } = useJewellery();

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    navigateToHome();
    setTimeout(() => {
      const collectionElement = document.getElementById('collection-section');
      if (collectionElement) {
        collectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const necklaces = CATEGORIES.find((c) => c.id === 'necklaces')!;
  const earrings = CATEGORIES.find((c) => c.id === 'earrings')!;
  const bracelets = CATEGORIES.find((c) => c.id === 'bracelets')!;
  const bodyJewellery = CATEGORIES.find((c) => c.id === 'body-jewellery')!;
  const sets = CATEGORIES.find((c) => c.id === 'jewellery-sets')!;
  const mens = CATEGORIES.find((c) => c.id === 'mens-jewellery')!;
  const rings = CATEGORIES.find((c) => c.id === 'rings')!;

  return (
    <section className="py-14 sm:py-20 w-full bg-[#FFFFFF]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs tracking-[0.24em] text-[#A30008] uppercase font-sans font-bold block mb-2 whitespace-nowrap">
            CURATED ESSENTIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1A1A1A] tracking-normal font-normal text-balance">
            Shop by Category
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-8 h-[1px] bg-[#E5E5E5]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
            <span className="w-8 h-[1px] bg-[#E5E5E5]" />
          </div>
        </div>

        {/* Full-Width Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
        
          {/* 1. Large Hero Anchor: Necklaces (7 Cols) */}
          <div
            onClick={() => handleCategorySelect(necklaces.name)}
            className="lg:col-span-7 group relative bg-[#FFFFFF] border border-[#E5E5E5] overflow-hidden cursor-pointer min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 hover:border-[#1A1A1A] shadow-2xs hover:shadow-md"
          >
            <div className="absolute inset-0 overflow-hidden bg-[#F1EBE3]">
              <img
                src={necklaces.image}
                alt={necklaces.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* High-Contrast Gradient Scrim for 100% Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 text-white">
              <span className="text-xs tracking-[0.18em] text-white/90 font-bold uppercase block mb-1 font-sans whitespace-nowrap drop-shadow-sm">
                FEATURED DISCIPLINE · {necklaces.itemCount} PIECES
              </span>
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-wide font-normal whitespace-nowrap drop-shadow-md">
                  {necklaces.name}
                </h3>
                <div className="w-10 h-10 rounded-full border border-white/60 bg-black/20 flex items-center justify-center group-hover:bg-[#FFFFFF] group-hover:text-[#1A1A1A] group-hover:border-white transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-white/95 font-sans tracking-wide max-w-sm drop-shadow-sm font-normal">
                {necklaces.tagline}
              </p>
            </div>
          </div>

          {/* 2. Earrings (5 Cols) */}
          <div
            onClick={() => handleCategorySelect(earrings.name)}
            className="lg:col-span-5 group relative bg-[#FFFFFF] border border-[#E5E5E5] overflow-hidden cursor-pointer min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 hover:border-[#1A1A1A] shadow-2xs hover:shadow-md"
          >
            <div className="absolute inset-0 overflow-hidden bg-[#F1EBE3]">
              <img
                src={earrings.image}
                alt={earrings.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
            </div>

            <div className="relative z-10 text-white">
              <span className="text-xs tracking-[0.18em] text-white/90 font-bold uppercase block mb-1 font-sans whitespace-nowrap drop-shadow-sm">
                ATELIER STUDS · {earrings.itemCount} PIECES
              </span>
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl sm:text-3xl tracking-wide font-normal whitespace-nowrap drop-shadow-md">
                  {earrings.name}
                </h3>
                <div className="w-10 h-10 rounded-full border border-white/60 bg-black/20 flex items-center justify-center group-hover:bg-[#FFFFFF] group-hover:text-[#1A1A1A] transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-white/95 font-sans tracking-wide drop-shadow-sm font-normal">
                {earrings.tagline}
              </p>
            </div>
          </div>

          {/* 3. Bracelets (4 Cols) */}
          <div
            onClick={() => handleCategorySelect(bracelets.name)}
            className="lg:col-span-4 group relative bg-[#FFFFFF] border border-[#E5E5E5] overflow-hidden cursor-pointer min-h-[300px] sm:min-h-[340px] flex flex-col justify-end p-6 transition-all duration-500 hover:border-[#1A1A1A] shadow-2xs hover:shadow-md"
          >
            <div className="absolute inset-0 overflow-hidden bg-[#F1EBE3]">
              <img
                src={bracelets.image}
                alt={bracelets.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-90" />
            </div>

            <div className="relative z-10 text-white">
              <span className="text-[11px] tracking-[0.18em] text-white/90 font-bold uppercase block mb-1 font-sans whitespace-nowrap drop-shadow-sm">
                {bracelets.itemCount} PIECES
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl tracking-wide font-normal whitespace-nowrap drop-shadow-md">
                  {bracelets.name}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </div>
            </div>
          </div>

          {/* 4. Body Jewellery (4 Cols) */}
          <div
            onClick={() => handleCategorySelect(bodyJewellery.name)}
            className="lg:col-span-4 group relative bg-[#FFFFFF] border border-[#E5E5E5] overflow-hidden cursor-pointer min-h-[300px] sm:min-h-[340px] flex flex-col justify-end p-6 transition-all duration-500 hover:border-[#1A1A1A] shadow-2xs hover:shadow-md"
          >
            <div className="absolute inset-0 overflow-hidden bg-[#F1EBE3]">
              <img
                src={bodyJewellery.image}
                alt={bodyJewellery.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-90" />
            </div>

            <div className="relative z-10 text-white">
              <span className="text-[11px] tracking-[0.18em] text-white/90 font-bold uppercase block mb-1 font-sans whitespace-nowrap drop-shadow-sm">
                {bodyJewellery.itemCount} PIECES
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl tracking-wide font-normal whitespace-nowrap drop-shadow-md">
                  {bodyJewellery.name}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </div>
            </div>
          </div>

          {/* 5. Jewellery Sets (4 Cols) */}
          <div
            onClick={() => handleCategorySelect(sets.name)}
            className="lg:col-span-4 group relative bg-[#FFFFFF] border border-[#E5E5E5] overflow-hidden cursor-pointer min-h-[300px] sm:min-h-[340px] flex flex-col justify-end p-6 transition-all duration-500 hover:border-[#1A1A1A] shadow-2xs hover:shadow-md"
          >
            <div className="absolute inset-0 overflow-hidden bg-[#F1EBE3]">
              <img
                src={sets.image}
                alt={sets.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-90" />
            </div>

            <div className="relative z-10 text-white">
              <span className="text-[11px] tracking-[0.18em] text-white/90 font-bold uppercase block mb-1 font-sans whitespace-nowrap drop-shadow-sm">
                BRIDAL & GALA · {sets.itemCount} PIECES
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl tracking-wide font-normal whitespace-nowrap drop-shadow-md">
                  {sets.name}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </div>
            </div>
          </div>

          {/* 6. Men's Jewellery (5 Cols) */}
          <div
            onClick={() => handleCategorySelect(mens.name)}
            className="lg:col-span-5 group relative bg-[#FFFFFF] border border-[#E5E5E5] overflow-hidden cursor-pointer min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-7 transition-all duration-500 hover:border-[#1A1A1A] shadow-2xs hover:shadow-md"
          >
            <div className="absolute inset-0 overflow-hidden bg-[#F1EBE3]">
              <img
                src={mens.image}
                alt={mens.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-90" />
            </div>

            <div className="relative z-10 text-white">
              <span className="text-xs tracking-[0.18em] text-white/90 font-bold uppercase block mb-1 font-sans whitespace-nowrap drop-shadow-sm">
                SOLID CHAINS & CUFFS · {mens.itemCount} PIECES
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl sm:text-3xl tracking-wide font-normal whitespace-nowrap drop-shadow-md">
                  {mens.name}
                </h3>
                <div className="w-10 h-10 rounded-full border border-white/60 bg-black/20 flex items-center justify-center group-hover:bg-[#FFFFFF] group-hover:text-[#1A1A1A] transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-white/95 font-sans tracking-wide drop-shadow-sm font-normal">
                {mens.tagline}
              </p>
            </div>
          </div>

          {/* 7. Rings (7 Cols) */}
          <div
            onClick={() => handleCategorySelect(rings.name)}
            className="lg:col-span-7 group relative bg-[#FFFFFF] border border-[#E5E5E5] overflow-hidden cursor-pointer min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-7 transition-all duration-500 hover:border-[#1A1A1A] shadow-2xs hover:shadow-md"
          >
            <div className="absolute inset-0 overflow-hidden bg-[#F1EBE3]">
              <img
                src={rings.image}
                alt={rings.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-90" />
            </div>

            <div className="relative z-10 text-white">
              <span className="text-xs tracking-[0.18em] text-white/90 font-bold uppercase block mb-1 font-sans whitespace-nowrap drop-shadow-sm">
                SOLITAIRES & BANDS · {rings.itemCount} PIECES
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl sm:text-3xl tracking-wide font-normal whitespace-nowrap drop-shadow-md">
                  {rings.name}
                </h3>
                <div className="w-10 h-10 rounded-full border border-white/60 bg-black/20 flex items-center justify-center group-hover:bg-[#FFFFFF] group-hover:text-[#1A1A1A] transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-white/95 font-sans tracking-wide drop-shadow-sm font-normal">
                {rings.tagline}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

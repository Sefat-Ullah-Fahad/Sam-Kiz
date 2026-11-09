import React from 'react';
import { ArrowRight, Gem } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const BridalCampaign: React.FC = () => {
  const { setSelectedCategory, navigateToHome, navigateToProduct } = useJewellery();

  const handleExploreBridal = () => {
    setSelectedCategory('Jewellery Sets');
    navigateToHome();
    setTimeout(() => {
      const collectionElement = document.getElementById('collection-section');
      if (collectionElement) {
        collectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFA] border-b border-[#E5E5E5] w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative bg-[#FFFFFF] border border-[#E5E5E5] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Campaign Text */}
            <div className="lg:col-span-5 text-left">
              <div className="flex items-center gap-2 mb-3">
                <Gem className="w-4 h-4 text-[#A30008] shrink-0" />
                <span className="text-xs tracking-[0.24em] uppercase text-[#A30008] font-sans font-bold whitespace-nowrap">
                  CELEBRATIONS & HEIRLOOMS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] text-[#1A1A1A] font-normal tracking-[-0.01em] text-balance">
                Bridal & Special Occasions
              </h2>

              <p className="mt-5 text-[#555555] text-sm sm:text-base leading-[1.8] font-sans font-normal text-balance">
                Mark life’s most cherished milestones—engagements, wedding vows, golden anniversaries, and personal triumphs—with heirloom pieces conceived to shine for generations.
              </p>

              <div className="mt-7 space-y-3 font-sans text-xs sm:text-sm text-[#1A1A1A] font-medium">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#A30008] shrink-0" />
                  <span>Bespoke Bridal Sets & Matching Chandelier Drops</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#A30008] shrink-0" />
                  <span>Flawless Pear & Cushion Cut Solitaire Stones</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#A30008] shrink-0" />
                  <span>Complimentary Velvet Keepsake Case & Certificate</span>
                </div>
              </div>

              <div className="mt-9">
                <button
                  type="button"
                  onClick={handleExploreBridal}
                  className="px-8 py-4 bg-[#1A1A1A] hover:bg-[#A30008] text-[#FFFFFF] text-xs tracking-[0.2em] uppercase font-sans font-semibold transition-colors shadow-xs flex items-center gap-2 group cursor-pointer whitespace-nowrap"
                >
                  <span>DISCOVER BRIDAL SUITES</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side: Dual Visual Spotlight with Royal Jewels */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Image 1: Royal Gala Suite */}
              <div
                onClick={() => navigateToProduct('prod-8')}
                className="group relative aspect-[3/4] overflow-hidden bg-[#F8F5F0] border border-[#E5E5E5] hover:border-[#1A1A1A] transition-all cursor-pointer shadow-xs"
              >
                <img
                  src="https://i.ibb.co.com/wrbbZHJN/Sbcaa76049f3044008065a8426a28090a-R-webp.jpg"
                  alt="Shiny Fine Black Jewelry High Jewellery Set"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-white/90 font-bold font-sans whitespace-nowrap drop-shadow-sm">HIGH BRIDAL SUITE</p>
                  <p className="font-serif text-xl sm:text-2xl font-normal drop-shadow-md whitespace-nowrap mt-1">The Royal Gala Necklace & Drops</p>
                  <p className="text-xs text-white/90 font-sans mt-1 font-semibold whitespace-nowrap">From $300.00</p>
                </div>
              </div>

              {/* Image 2: Pear Cut Solitaire Ring */}
              <div
                onClick={() => navigateToProduct('prod-10')}
                className="group relative aspect-[3/4] overflow-hidden bg-[#F8F5F0] border border-[#E5E5E5] hover:border-[#1A1A1A] transition-all cursor-pointer shadow-xs"
              >
                <img
                  src="https://i.ibb.co.com/gLXxqyqH/category-rings-9d75f379-edf2-482f-b519-5f9d256e60a9-webp.jpg"
                  alt="Contour Solitaire Ring"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-white/90 font-bold font-sans whitespace-nowrap drop-shadow-sm">ENGAGEMENT ARCHIVE</p>
                  <p className="font-serif text-xl sm:text-2xl font-normal drop-shadow-md whitespace-nowrap mt-1">The Solitaire Contour Pear Ring</p>
                  <p className="text-xs text-white/90 font-sans mt-1 font-semibold whitespace-nowrap">$175.00</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

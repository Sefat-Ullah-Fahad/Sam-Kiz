import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const BrandPhilosophy: React.FC = () => {
  const { navigateToStory } = useJewellery();

  return (
    <section className="py-14 sm:py-20 bg-[#FFFFFF] border-b border-[#E5E5E5] w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-18 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 lg:pr-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#A30008]" />
              <span className="text-xs tracking-[0.24em] uppercase text-[#A30008] font-sans font-bold whitespace-nowrap">
                OUR STORY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] text-[#1A1A1A] font-normal tracking-[-0.01em] text-balance">
              Chosen with Care,<br />
              Inspired by You.
            </h2>

            <p className="mt-5 text-[#444444] text-sm sm:text-base leading-[1.8] font-sans font-normal text-balance">
              At The Glint, we believe every piece tells a story. Our collections are designed to celebrate life, love, and timeless elegance.
            </p>

            <p className="mt-3.5 text-[#666666] text-sm leading-[1.8] font-sans font-normal text-balance">
              From our European design atelier to your everyday moments, each contour is cast with hypoallergenic precision and finished in radiant 18k gold and solid sterling silver.
            </p>

            {/* Two Pillar Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-[#E5E5E5]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#A30008] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs tracking-wider uppercase font-sans text-[#1A1A1A] font-bold whitespace-nowrap">
                    Tarnish-Resistant
                  </h4>
                  <p className="text-xs text-[#555555] mt-0.5 font-sans font-normal">
                    Vapor-deposited 18K gold coat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#A30008] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs tracking-wider uppercase font-sans text-[#1A1A1A] font-bold whitespace-nowrap">
                    Skin-Kind Purity
                  </h4>
                  <p className="text-xs text-[#555555] mt-0.5 font-sans font-normal">
                    Nickel & lead-free hypoallergenic alloy
                  </p>
                </div>
              </div>
            </div>

            {/* Learn More Action */}
            <div className="mt-8">
              <button
                type="button"
                onClick={navigateToStory}
                className="group inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#A30008] transition-colors font-bold font-sans pb-1 border-b border-[#1A1A1A] hover:border-[#A30008] cursor-pointer whitespace-nowrap"
              >
                <span>LEARN MORE ABOUT OUR HERITAGE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Lifestyle Jewellery Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#F1EBE3] border border-[#E5E5E5] shadow-xs group">
              <img
                src="https://i.ibb.co.com/5WnY14jd/Se4cb2a04011c4955b564ea5128c29551-M-webp.jpg"
                alt="The Glint Atelier Handcrafted Ring"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 border border-[#E5E5E5] text-left shadow-xs">
                <p className="font-serif text-sm font-semibold text-[#1A1A1A] whitespace-nowrap">Handcrafted Solitaire Ring</p>
                <p className="text-[10px] tracking-widest text-[#A30008] font-bold uppercase font-sans whitespace-nowrap">ATELIER ARCHIVE</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

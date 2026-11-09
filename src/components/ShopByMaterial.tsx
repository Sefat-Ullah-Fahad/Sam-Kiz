import React from 'react';
import { MATERIAL_SWATCHES, MATERIAL_COLLAGE_IMAGES } from '../data/jewelleryData';
import { useJewellery } from '../context/JewelleryContext';

export const ShopByMaterial: React.FC = () => {
  const { selectedMaterial, setSelectedMaterial, navigateToHome } = useJewellery();

  const handleSelectMaterial = (materialLabel: string) => {
    setSelectedMaterial(materialLabel);
    navigateToHome();
    setTimeout(() => {
      const collectionElement = document.getElementById('collection-section');
      if (collectionElement) {
        collectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFA] border-y border-[#E5E5E5] w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-18 items-center">
          
          {/* Left: 6-Tile Texture Collage */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-3 sm:gap-4">
            {MATERIAL_COLLAGE_IMAGES.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden bg-[#F0F0F0] border border-[#E5E5E5] shadow-xs"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[10px] text-white font-semibold font-sans tracking-wider truncate drop-shadow-sm">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Material Discovery Swatches & Description */}
          <div className="lg:col-span-6 text-center lg:text-left lg:pl-6">
            <span className="text-xs tracking-[0.24em] text-[#A30008] uppercase font-sans font-bold block mb-2 whitespace-nowrap">
              PRECIOUS METALLURGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1A1A1A] tracking-normal font-normal text-balance">
              Shop by Material
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E5E5E5]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
              <span className="w-8 h-[1px] bg-[#E5E5E5]" />
            </div>
            <p className="text-sm sm:text-base text-[#555555] leading-[1.7] font-sans max-w-lg mb-8 font-normal text-balance">
              Each piece begins with noble foundation metals. We select surgical hypoallergenic cores bound with heavy 18k real gold vapor layers, ensuring eternal colorfast brilliance without skin irritation.
            </p>

            {/* Circular Swatches Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 mb-10">
              {MATERIAL_SWATCHES.map((swatch) => {
                const isSelected = selectedMaterial === swatch.label;
                return (
                  <button
                    key={swatch.id}
                    type="button"
                    onClick={() => handleSelectMaterial(swatch.label)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 shadow-xs flex items-center justify-center mb-2.5 ${
                        isSelected
                          ? 'border-[#1A1A1A] scale-110 ring-2 ring-[#A30008]'
                          : 'border-white group-hover:scale-105 group-hover:border-[#1A1A1A]'
                      }`}
                      style={{ backgroundColor: swatch.colorHex }}
                    >
                      {isSelected && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
                      )}
                    </div>

                    <span
                      className={`text-xs tracking-[0.12em] font-sans transition-colors whitespace-nowrap ${
                        isSelected
                          ? 'text-[#1A1A1A] font-bold'
                          : 'text-[#555555] group-hover:text-[#1A1A1A]'
                      }`}
                    >
                      {swatch.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View All Button */}
            <div>
              <button
                type="button"
                onClick={() => handleSelectMaterial('All')}
                className="px-8 py-3.5 bg-white border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF] text-[#1A1A1A] text-xs font-semibold tracking-[0.18em] uppercase font-sans transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xs"
              >
                VIEW ALL MATERIALS
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

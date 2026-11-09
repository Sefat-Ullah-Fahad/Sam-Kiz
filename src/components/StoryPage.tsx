import React from 'react';
import { ArrowLeft, Award, ShieldCheck, Gem } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const StoryPage: React.FC = () => {
  const { navigateToHome, setSelectedCategory } = useJewellery();

  const handleExplore = () => {
    setSelectedCategory('All');
    navigateToHome();
    setTimeout(() => {
      const collectionElement = document.getElementById('collection-section');
      if (collectionElement) {
        collectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] py-8 sm:py-12">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Back Navigation */}
        <div className="pb-6 mb-8 border-b border-[#E5E5E5]">
          <button
            type="button"
            onClick={navigateToHome}
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#555555] hover:text-[#1A1A1A] transition-colors font-sans font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Main Story Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs tracking-[0.24em] text-[#A30008] uppercase font-sans font-bold block mb-2">
            THE GLINT ATELIER CHRONICLE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-[1.08] tracking-[-0.01em]">
            Chosen with Care, Inspired by You
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4 mb-6">
            <span className="w-10 h-[1px] bg-[#E5E5E5]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
            <span className="w-10 h-[1px] bg-[#E5E5E5]" />
          </div>
          <p className="font-serif text-xl sm:text-2xl text-[#555555] italic max-w-2xl mx-auto leading-relaxed">
            “At The Glint, we believe jewellery should not be reserved for velvet vaults—it is an intimate, tactile art meant to celebrate every hour of your life.”
          </p>
        </div>

        {/* Full Width Visual Gallery Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-18">
          <div className="md:col-span-8 aspect-[16/10] overflow-hidden bg-[#FFFFFF] border border-[#E5E5E5] shadow-xs">
            <img
              src="https://i.ibb.co.com/5WnY14jd/Se4cb2a04011c4955b564ea5128c29551-M-webp.jpg"
              alt="Atelier Solitaire Craftsmanship"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-4 aspect-[4/5] overflow-hidden bg-[#FFFFFF] border border-[#E5E5E5] shadow-xs">
            <img
              src="https://i.ibb.co.com/dsNT8Jvh/hero-3-necklaces-928535c9-d73b-48a0-ac89-1d8dc1524d7c-webp.png"
              alt="Multi-gem Choker Detail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Editorial Story Text */}
        <div className="max-w-3xl mx-auto space-y-6 text-sm sm:text-base text-[#555555] leading-[1.85] font-sans font-normal mb-18">
          <p>
            Founded in the European artisan tradition, The Glint represents a return to mindful adornment. In an era dominated by fleeting fashion trends and hollow, easily tarnished metals, we committed ourselves to a singular standard: creating heirloom jewellery with the tactile weight, pure finish, and lasting dignity of high salon pieces at an accessible threshold.
          </p>
          <p>
            Our goldsmiths begin with solid foundation materials—dense 316L hypoallergenic surgical stainless steel, pure 925 sterling silver, and solid brass cores. Using vacuum physical vapor deposition (PVD), we fuse genuine 18-karat gold with the metal at atomic depth. The result is a luminous, scratch-resistant barrier that will never flake, peel, or turn green on skin.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-18">
          <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E5] text-center shadow-xs">
            <Award className="w-8 h-8 text-[#A30008] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#1A1A1A] font-semibold mb-2">Noble Metallurgy</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-sans">
              Heavy 18K gold vapor bonding, 925 sterling silver hallmarks, and surgical grade hypoallergenic cores.
            </p>
          </div>

          <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E5] text-center shadow-xs">
            <ShieldCheck className="w-8 h-8 text-[#A30008] mx-auto mb-2" />
            <h3 className="font-serif text-xl text-[#1A1A1A] font-semibold mb-2">Colorfast Longevity</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-sans">
              Wear your jewellery in the ocean, the gym, and through daily life with zero fear of corrosion or discoloration.
            </p>
          </div>

          <div className="p-8 bg-[#FFFFFF] border border-[#E5E5E5] text-center shadow-xs">
            <Gem className="w-8 h-8 text-[#A30008] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#1A1A1A] font-semibold mb-2">Ethical Brilliance</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-sans">
              Conflict-free lab gemstones and 5A grade pavé cubic zircons cut to genuine diamond Hearts & Arrows tolerances.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-12">
          <button
            type="button"
            onClick={handleExplore}
            className="px-10 py-4 bg-[#1A1A1A] hover:bg-[#A30008] text-[#FFFFFF] text-xs font-bold tracking-[0.2em] uppercase font-sans transition-colors cursor-pointer shadow-xs"
          >
            EXPLORE THE COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
};

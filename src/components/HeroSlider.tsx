import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/jewelleryData';
import { useJewellery } from '../context/JewelleryContext';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { setSelectedCategory, navigateToStory } = useJewellery();

  const totalSlides = HERO_SLIDES.length;

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  const handleCtaClick = () => {
    setSelectedCategory(slide.category);
    const collectionElement = document.getElementById('collection-section');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-[#FAF9F6] border-b border-[#E5E5E5] overflow-hidden select-none"
      aria-label="The Glint Luxury Campaign"
    >
      {/* 
        TRUE UNIFIED FULL-WIDTH LUXURY HERO BANNER (100% Identical Format for All Slides):
        - All 4 slides use identical widescreen high-fashion editorial campaign imagery.
        - The model & fine jewellery are showcased on the left with zero clipping.
        - The right half features identical Glamira editorial typography with high contrast.
        - Mobile layout is also 100% uniform across all slides with natural portrait framing.
        - Slide progress indicators and prev/next arrows ONLY; no pause button.
      */}
      <div className="relative w-full min-h-[600px] sm:min-h-[660px] lg:h-[700px] xl:h-[740px] flex items-center overflow-hidden">
        
        {/* Unified Visual Campaign Layer: Every slide has the identical full-bleed luxury backdrop */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {HERO_SLIDES.map((s, index) => {
            const isActive = currentSlide === index;

            return (
              <div
                key={s.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <div className="relative w-full h-full bg-[#FAF9F6]">
                  <img
                    src={s.image}
                    alt={s.title}
                    referrerPolicy="no-referrer"
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    className="w-full h-full pt-24 object-cover object-[25%_top] sm:object-left-top md:object-[32%_top] xl:object-top transition-transform duration-1000 ease-out"
                  />
                  {/* Desktop Right Scrim: Seamlessly blends into text area for 100% legibility */}
                  <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%] xl:w-[48%] bg-gradient-to-r from-transparent via-[#FAF9F6]/45 to-[#FAF9F6]/90 pointer-events-none" />

                  {/* Mobile Bottom Scrim: Allows model to shine at top while text stays crisp at bottom */}
                  <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-white/95 via-white/75 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Top-Left Slide Indicator Badge (01 / 04 ›) */}
        <div className="absolute top-28 sm:top-32 lg:top-36 left-4 sm:left-8 lg:left-12 z-30 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-[#E5E5E5] px-3.5 py-1.5 shadow-xs">
          <span className="text-xs font-sans font-medium text-[#1A1A1A] tabular-nums tracking-wide">
            0{currentSlide + 1} / 0{totalSlides}
          </span>
          <button
            type="button"
            onClick={nextSlide}
            className="text-[#666666] hover:text-[#1A1A1A] transition-colors p-0.5 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Content Callout Layer (Identical positioning & typography across all slides) */}
        <div className="relative z-20 w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 flex justify-end items-center pt-32 sm:pt-36 lg:pt-24 pb-10 sm:pb-14">
          <div className="w-full lg:w-[46%] xl:w-[42%] bg-white/90 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 border border-white/60 lg:border-none shadow-sm lg:shadow-none text-left">
            
            {/* 1. Red Vertical Accent Bar + Offer Header */}
            <div className="flex items-center gap-3">
              <span className="w-1 h-7 sm:h-8 bg-[#A30008] inline-block shrink-0" />
              <span className="text-[#A30008] font-bold text-sm sm:text-base tracking-[0.06em] uppercase font-sans">
                {slide.offerTag || "Singles' Day Offers"}
              </span>
            </div>

            {/* 2. Elegant Italic Serif Headline ("Make it your own" / "The Art of Grandeur") */}
            <h1
              key={`italic-${slide.id}`}
              className="font-serif italic text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] text-[#1A1A1A] font-normal leading-[1.1] mt-3 animate-in fade-in slide-in-from-bottom-2 duration-500 text-balance"
            >
              {slide.italicHeadline || 'Make it your own'}
            </h1>

            {/* 3. Bold Statement Highlight ("18% OFF EVERYTHING" / "18% OFF JEWELLERY SETS") */}
            <p
              key={`bold-${slide.id}`}
              className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#1A1A1A] tracking-tight uppercase leading-tight mt-2 animate-in fade-in slide-in-from-bottom-3 duration-500"
            >
              {slide.boldStatement || '18% OFF EVERYTHING'}
            </p>

            {/* 4. Editorial Context Description */}
            <p
              key={`desc-${slide.id}`}
              className="mt-3 text-[#444444] text-sm sm:text-[15px] leading-relaxed font-sans font-normal max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              {slide.subtitle}
            </p>

            {/* 5. Glamira-Style Rectangular Luxury Action Button ("Shop now") */}
            <div className="mt-7 flex items-center gap-4">
              <button
                type="button"
                onClick={handleCtaClick}
                className="px-12 sm:px-16 py-3.5 sm:py-4 bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A] text-sm sm:text-base font-normal tracking-wide transition-all duration-300 shadow-xs cursor-pointer text-center"
              >
                {slide.ctaText || 'Shop now'}
              </button>

              <button
                type="button"
                onClick={navigateToStory}
                className="hidden sm:inline-flex px-6 py-3.5 text-xs text-[#555555] hover:text-[#1A1A1A] tracking-[0.16em] uppercase font-sans transition-colors cursor-pointer"
              >
                Our Heritage
              </button>
            </div>

            {/* 6. Subtext Note ("Applied automatically at checkout.") */}
            <p className="mt-6 text-xs text-[#666666] font-normal tracking-normal font-sans">
              {slide.noteText || 'Applied automatically at checkout.'}
            </p>

            {/* 7. Slide Controls (Clean Progress Lines + Prev/Next Arrows ONLY, NO Pause Button) */}
            <div className="mt-7 flex items-center gap-6 pt-5 border-t border-[#E5E5E5]/80">
              {/* Progress indicator lines */}
              <div className="flex items-center gap-2 flex-1 max-w-[140px]">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    className={`h-[2.5px] transition-all duration-500 rounded-full cursor-pointer ${
                      currentSlide === i ? 'w-9 bg-[#A30008]' : 'w-2.5 bg-[#CCCCCC] hover:bg-[#A30008]'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev and Next Arrows ONLY — Pause button [ || ] removed as marked in screenshot */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-8 h-8 border border-[#E0E0E0] bg-white hover:border-[#1A1A1A] hover:bg-[#FAFAFA] flex items-center justify-center text-[#1A1A1A] transition-colors cursor-pointer shadow-2xs"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5 stroke-[1.5]" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-8 h-8 border border-[#E0E0E0] bg-white hover:border-[#1A1A1A] hover:bg-[#FAFAFA] flex items-center justify-center text-[#1A1A1A] transition-colors cursor-pointer shadow-2xs"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

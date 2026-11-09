import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/jewelleryData';

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const review = TESTIMONIALS[currentIndex];

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFA] border-y border-[#E5E5E5] w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
        {/* Eyebrow */}
        <span className="text-xs tracking-[0.24em] text-[#A30008] uppercase font-sans font-bold block mb-2 whitespace-nowrap">
          CLIENT PRAISE & REVIEWS
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1A1A1A] tracking-normal font-normal text-balance">
          Collector Testimonials
        </h2>
        <div className="flex items-center justify-center gap-3 mt-3 mb-10 sm:mb-14">
          <span className="w-8 h-[1px] bg-[#E5E5E5]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
          <span className="w-8 h-[1px] bg-[#E5E5E5]" />
        </div>

        {/* Testimonial Box */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#E5E5E5] p-8 sm:p-14 relative shadow-xs">
          {/* Subtle Quote Mark */}
          <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mx-auto mb-6 text-[#A30008]">
            <Quote className="w-5 h-5 fill-current opacity-80" />
          </div>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1.5 mb-6 text-[#D97706]">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-[26px] leading-[1.5] text-[#1A1A1A] font-normal min-h-[90px] flex items-center justify-center text-balance">
            "{review.quote}"
          </blockquote>

          {/* Metadata */}
          <div className="mt-8 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
            <div className="text-center sm:text-left">
              <p className="font-bold text-[#1A1A1A] text-sm tracking-wide whitespace-nowrap">
                {review.author}
              </p>
              <p className="text-xs text-[#555555] mt-0.5 whitespace-nowrap font-normal">
                {review.location} · <span className="text-[#A30008] font-semibold">{review.date}</span>
              </p>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-xs uppercase tracking-wider text-[#666666] block whitespace-nowrap">
                Acquired Piece:
              </span>
              <span className="text-xs sm:text-sm text-[#1A1A1A] font-semibold whitespace-nowrap">
                {review.itemPurchased}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prevReview}
            className="w-10 h-10 border border-[#E5E5E5] bg-white hover:border-[#1A1A1A] hover:bg-[#FAFAFA] flex items-center justify-center text-[#1A1A1A] transition-colors cursor-pointer shadow-2xs"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-sans text-[#555555] font-semibold tracking-widest tabular-nums whitespace-nowrap">
            0{currentIndex + 1} / 0{TESTIMONIALS.length}
          </span>

          <button
            type="button"
            onClick={nextReview}
            className="w-10 h-10 border border-[#E5E5E5] bg-white hover:border-[#1A1A1A] hover:bg-[#FAFAFA] flex items-center justify-center text-[#1A1A1A] transition-colors cursor-pointer shadow-2xs"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

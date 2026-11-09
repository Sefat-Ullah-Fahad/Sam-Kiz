import React from 'react';

export const EditorialStatement: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E5E5E5] w-full px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtle center hairline divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-12 h-[1px] bg-[#E5E5E5]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
          <span className="w-12 h-[1px] bg-[#E5E5E5]" />
        </div>

        {/* Large Editorial Quote */}
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[38px] leading-[1.38] text-[#1A1A1A] font-normal tracking-[-0.01em] text-balance">
          “Our jewellery collections are filled with beautifully crafted dainty designs and statement pieces, created to be the perfect gift for loved ones or a timeless celebration of yourself.”
        </blockquote>

        <p className="mt-6 text-[11px] tracking-[0.25em] uppercase text-[#A30008] font-sans font-semibold whitespace-nowrap">
          THE GLINT ATELIER · EST. 2024
        </p>
      </div>
    </section>
  );
};

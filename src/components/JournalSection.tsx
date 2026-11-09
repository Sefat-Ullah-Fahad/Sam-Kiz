import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/jewelleryData';
import { useJewellery } from '../context/JewelleryContext';

export const JournalSection: React.FC = () => {
  const { navigateToArticle } = useJewellery();

  return (
    <section className="py-14 sm:py-20 w-full bg-[#FFFFFF]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs tracking-[0.24em] text-[#A30008] uppercase font-sans font-bold block mb-2 whitespace-nowrap">
            EDITORIAL & NOTES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1A1A1A] tracking-normal font-normal text-balance">
            The Glint Journal
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-8 h-[1px] bg-[#E5E5E5]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
            <span className="w-8 h-[1px] bg-[#E5E5E5]" />
          </div>
        </div>

        {/* Articles Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => navigateToArticle(article.id)}
              className="group bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-2xs hover:shadow-md"
            >
              {/* Visual Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F8F8]">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/95 px-3 py-1 text-[10px] tracking-widest uppercase font-sans text-[#1A1A1A] border border-[#E5E5E5] whitespace-nowrap font-bold shadow-xs">
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 text-left">
                <div>
                  <div className="flex items-center gap-2 text-xs tracking-[0.14em] text-[#555555] uppercase font-sans mb-3 whitespace-nowrap font-medium">
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#A30008]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-[22px] leading-[1.3] text-[#1A1A1A] group-hover:text-[#A30008] transition-colors font-semibold text-balance">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-[13px] text-[#555555] leading-[1.7] font-sans line-clamp-3 font-normal">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E5E5]">
                  <span className="text-xs tracking-[0.18em] uppercase text-[#1A1A1A] group-hover:text-[#A30008] font-sans font-bold flex items-center gap-1.5 transition-colors whitespace-nowrap">
                    READ EDITORIAL <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

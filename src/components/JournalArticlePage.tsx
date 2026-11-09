import React from 'react';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';
import { JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../data/jewelleryData';
import { useJewellery } from '../context/JewelleryContext';

interface JournalArticlePageProps {
  article: JournalArticle;
}

export const JournalArticlePage: React.FC<JournalArticlePageProps> = ({ article }) => {
  const { navigateToHome, navigateToArticle, addToast } = useJewellery();

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Link Copied', 'Article link copied to clipboard.');
    }
  };

  const otherArticles = JOURNAL_ARTICLES.filter((a) => a.id !== article.id);

  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] py-8 sm:py-12">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Back Navigation */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E5E5E5]">
          <button
            type="button"
            onClick={navigateToHome}
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#555555] hover:text-[#1A1A1A] transition-colors font-sans font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs tracking-[0.14em] uppercase text-[#555555] hover:text-[#1A1A1A] transition-colors font-sans font-semibold cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Editorial</span>
          </button>
        </div>

        {/* Main Article Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Header Metadata */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-xs tracking-[0.22em] uppercase text-[#A30008] font-sans font-bold mb-3">
              <span>{article.category}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-[#555555]">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-[1.14] tracking-[-0.01em] text-balance">
              {article.title}
            </h1>

            <div className="flex items-center justify-center gap-3 mt-4 mb-6">
              <span className="w-8 h-[1px] bg-[#E5E5E5]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
              <span className="w-8 h-[1px] bg-[#E5E5E5]" />
            </div>

            <p className="font-serif text-lg sm:text-xl text-[#555555] italic max-w-2xl mx-auto leading-relaxed">
              "{article.summary}"
            </p>
          </div>

          {/* Hero Article Image */}
          <div className="aspect-[16/9] overflow-hidden bg-[#FBFBFB] border border-[#E5E5E5] mb-12 shadow-xs">
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-base text-[#444444] leading-[1.85] font-sans font-normal mb-16">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Author & Atelier Sign-off */}
          <div className="p-8 bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-between gap-4 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A30008] font-bold font-sans">
                THE GLINT EDITORIAL SALON
              </p>
              <p className="font-serif text-lg text-[#1A1A1A] mt-0.5">
                Written by The Atelier Design Council · London
              </p>
            </div>
          </div>

          {/* Other Articles to Explore */}
          {otherArticles.length > 0 && (
            <div className="border-t border-[#E5E5E5] pt-12 mb-12">
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-8 text-center font-normal">
                More from The Glint Journal
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherArticles.map((other) => (
                  <div
                    key={other.id}
                    onClick={() => navigateToArticle(other.id)}
                    className="p-5 bg-white border border-[#E5E5E5] hover:border-[#1A1A1A] transition-all cursor-pointer shadow-2xs hover:shadow-xs group"
                  >
                    <span className="text-[10px] tracking-wider uppercase text-[#A30008] font-bold font-sans block mb-1">
                      {other.category} · {other.readTime}
                    </span>
                    <h4 className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#A30008] transition-colors leading-snug">
                      {other.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

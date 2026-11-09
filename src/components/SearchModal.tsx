import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/jewelleryData';
import { useJewellery } from '../context/JewelleryContext';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToProduct, setSelectedCategory, navigateToHome } = useJewellery();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.materials.some((m) => m.toLowerCase().includes(query.toLowerCase())) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectProduct = (product: any) => {
    setIsSearchOpen(false);
    navigateToProduct(product.id);
  };

  const handleCategorySearch = (catName: string) => {
    setIsSearchOpen(false);
    setSelectedCategory(catName);
    navigateToHome();
    setTimeout(() => {
      const collectionElement = document.getElementById('collection-section');
      if (collectionElement) {
        collectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-start">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Top Search Bar & Results Box */}
      <div className="relative w-full max-w-4xl mx-auto mt-12 sm:mt-20 px-4 z-10 animate-in fade-in slide-in-from-top-4 duration-200">
        <div className="bg-[#FFFFFF] border border-[#E5E5E5] shadow-2xl p-6 sm:p-8">
          
          {/* Input Header */}
          <div className="flex items-center gap-4 pb-4 border-b border-[#E5E5E5]">
            <Search className="w-5 h-5 text-[#A30008] shrink-0 stroke-[2]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by jewellery piece, metal (gold, silver), or style..."
              className="flex-1 text-base sm:text-lg font-serif text-[#1A1A1A] placeholder:text-[#888888] focus:outline-none bg-transparent"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-xs text-[#555555] hover:text-[#1A1A1A] cursor-pointer whitespace-nowrap font-medium"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 text-[#1A1A1A] hover:text-[#A30008] transition-colors cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Quick Categories Bar */}
          <div className="py-4 border-b border-[#E5E5E5]">
            <span className="text-xs tracking-[0.2em] text-[#A30008] uppercase font-sans font-bold block mb-2 whitespace-nowrap">
              Popular Searches
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {['Necklaces', 'Pear-Cut Rings', '18K Gold', '925 Silver', 'Jewellery Sets', 'Bracelets'].map(
                (term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 bg-[#FAFAFA] hover:bg-[#1A1A1A] hover:text-white text-xs font-semibold text-[#1A1A1A] font-sans border border-[#E5E5E5] transition-colors cursor-pointer whitespace-nowrap shadow-2xs"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Results Area */}
          <div className="mt-4 max-h-[50vh] overflow-y-auto">
            {query.trim() === '' ? (
              <div className="py-6 text-center text-xs text-[#555555] font-sans font-medium">
                Start typing to explore the fine jewellery archive.
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#555555] font-sans">
                No pieces found matching "{query}". Try searching for "ring", "pearl", "gold", or "chain".
              </div>
            ) : (
              <div className="divide-y divide-[#E5E5E5]">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p)}
                    className="flex items-center gap-4 py-3 hover:bg-[#FAFAFA] px-2 transition-colors cursor-pointer group"
                  >
                    <div className="w-14 h-14 bg-[#FBFBFB] border border-[#E5E5E5] p-1 shrink-0 flex items-center justify-center">
                      <img
                        src={p.image}
                        alt={p.name}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <span className="text-[10px] uppercase tracking-wider text-[#A30008] font-bold font-sans whitespace-nowrap block">
                        {p.category} · {p.materials.join(', ')}
                      </span>
                      <h4 className="text-xs font-semibold text-[#1A1A1A] truncate group-hover:text-[#A30008] transition-colors">
                        {p.name}
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs sm:text-sm font-sans text-[#1A1A1A] font-bold tabular-nums whitespace-nowrap">
                        {p.priceFormatted}
                      </p>
                      <span className="text-[10px] text-[#A30008] font-sans uppercase font-bold tracking-wider flex items-center gap-1 justify-end mt-0.5 whitespace-nowrap">
                        View Piece <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

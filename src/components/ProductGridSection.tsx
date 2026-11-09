import React, { useState } from 'react';
import { PRODUCTS } from '../data/jewelleryData';
import { ProductCard } from './ProductCard';
import { useJewellery } from '../context/JewelleryContext';

export const ProductGridSection: React.FC = () => {
  const { selectedCategory, setSelectedCategory, selectedMaterial, setSelectedMaterial } = useJewellery();
  const [activeTab, setActiveTab] = useState<'featured' | 'new-arrivals'>('featured');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');

  const filterCategories = [
    'All',
    'Necklaces',
    'Earrings',
    'Rings',
    'Bracelets',
    'Jewellery Sets',
    'Body Jewellery',
    "Men's Jewellery",
  ];

  // Filter products based on selected category, material, and active tab
  let filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'All') {
      if (activeTab === 'new-arrivals') {
        if (!p.isNew) return false;
      } else {
        if (!p.isFeatured) return false;
      }
    } else {
      if (p.category !== selectedCategory) return false;
    }

    if (selectedMaterial !== 'All') {
      if (!p.materials.some((m) => m.toLowerCase().includes(selectedMaterial.toLowerCase()))) {
        return false;
      }
    }

    return true;
  });

  // Sort
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <section id="collection-section" className="py-14 sm:py-20 w-full bg-[#FFFFFF]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs tracking-[0.24em] text-[#A30008] uppercase font-sans font-bold block mb-2 whitespace-nowrap">
            THE ATELIER CURATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1A1A1A] tracking-normal font-normal text-balance">
            {selectedCategory === 'All'
              ? activeTab === 'featured'
                ? 'Featured Collection'
                : 'New Arrivals'
              : `${selectedCategory} Collection`}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3 mb-4">
            <span className="w-8 h-[1px] bg-[#E5E5E5]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
            <span className="w-8 h-[1px] bg-[#E5E5E5]" />
          </div>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-sans max-w-lg mx-auto text-balance font-normal">
            Impeccably finished pieces, engineered from noble metals and certified gemstones designed to be cherished for lifetimes.
          </p>

          {/* Tab Switcher (Featured vs New Arrivals) */}
          {selectedCategory === 'All' && (
            <div className="inline-flex items-center p-1 bg-[#F5F5F5] border border-[#E5E5E5] mt-6">
              <button
                type="button"
                onClick={() => setActiveTab('featured')}
                className={`px-6 py-2.5 text-xs tracking-[0.14em] uppercase font-sans font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'featured'
                    ? 'bg-[#1A1A1A] text-[#FFFFFF] shadow-xs'
                    : 'text-[#666666] hover:text-[#1A1A1A]'
                }`}
              >
                Featured Collection
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('new-arrivals')}
                className={`px-6 py-2.5 text-xs tracking-[0.14em] uppercase font-sans font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'new-arrivals'
                    ? 'bg-[#1A1A1A] text-[#FFFFFF] shadow-xs'
                    : 'text-[#666666] hover:text-[#1A1A1A]'
                }`}
              >
                New Arrivals
              </button>
            </div>
          )}
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E5E5E5]">
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs tracking-[0.12em] uppercase font-sans font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-[#FFFFFF] border-[#1A1A1A]'
                    : 'bg-[#FFFFFF] text-[#555555] border-[#E5E5E5] hover:text-[#1A1A1A] hover:border-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort & Material Filter Indicators */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end text-xs font-sans shrink-0">
            {selectedMaterial !== 'All' && (
              <button
                type="button"
                onClick={() => setSelectedMaterial('All')}
                className="text-xs text-[#A30008] hover:text-[#1A1A1A] flex items-center gap-1 cursor-pointer whitespace-nowrap font-bold"
              >
                Material: {selectedMaterial} (Clear ✕)
              </button>
            )}

            <div className="flex items-center gap-2 text-[#555555] whitespace-nowrap">
              <span className="text-xs uppercase tracking-wider font-semibold">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FFFFFF] border border-[#E5E5E5] text-[#1A1A1A] font-medium text-xs py-1.5 px-3 focus:outline-none focus:border-[#1A1A1A] cursor-pointer"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid: Full-Width 3-Column Layout */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FAFAFA] border border-[#E5E5E5] p-8">
            <p className="font-serif text-2xl text-[#1A1A1A] mb-2 font-semibold">No matching pieces found</p>
            <p className="text-xs text-[#555555] font-sans max-w-sm mx-auto mb-6">
              There are currently no items under {selectedCategory} matching material "{selectedMaterial}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedMaterial('All');
              }}
              className="px-6 py-2.5 bg-[#1A1A1A] text-[#FFFFFF] text-xs uppercase tracking-[0.14em] font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Refined "VIEW ALL" Button Container */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSelectedMaterial('All');
              setActiveTab('featured');
            }}
            className="px-12 py-4 bg-[#1A1A1A] hover:bg-[#A30008] text-[#FFFFFF] text-xs tracking-[0.22em] uppercase font-sans font-semibold transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            VIEW ALL PIECES ({PRODUCTS.length})
          </button>
        </div>
      </div>
    </section>
  );
};

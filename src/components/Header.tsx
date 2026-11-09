import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Camera, User, ArrowRight } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';
import { PRODUCTS } from '../data/jewelleryData';

export const Header: React.FC = () => {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setSelectedCategory,
    navigateToStory,
    navigateToHome,
    navigateToProduct,
  } = useJewellery();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const announcements = [
    { title: "Singles' Day Offers · 18% Off Everything", link: 'Shop now →' },
    { title: 'Complimentary UK Insured Express Delivery On Orders Over £100', link: 'Explore →' },
  ];

  const navCategories = [
    'Jewellery',
    'Engagement Rings',
    'Wedding Rings',
    'Rings',
    'Necklaces',
    'Earrings',
    'Bracelets',
    'Collections',
    'Jewellery Sets',
    'Our Heritage',
  ];

  const handleNavClick = (categoryName: string) => {
    setHoveredCategory(null);
    setMobileMenuOpen(false);
    if (categoryName === 'Our Heritage' || categoryName === 'About Us') {
      navigateToStory();
    } else {
      const mapped =
        categoryName === 'Jewellery'
          ? 'All'
          : categoryName === 'Engagement Rings' || categoryName === 'Wedding Rings'
          ? 'Rings'
          : categoryName === 'Collections'
          ? 'All'
          : categoryName;

      setSelectedCategory(mapped);
      navigateToHome();
      setTimeout(() => {
        const collectionElement = document.getElementById('collection-section');
        if (collectionElement) {
          collectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const getCategoryPreview = (catName: string) => {
    const filterKey =
      catName === 'Jewellery' || catName === 'Collections'
        ? 'All'
        : catName === 'Engagement Rings' || catName === 'Wedding Rings'
        ? 'Rings'
        : catName;

    const matched =
      filterKey === 'All'
        ? PRODUCTS.slice(0, 2)
        : PRODUCTS.filter((p) => p.category === filterKey);

    return matched.length > 0 ? matched.slice(0, 2) : PRODUCTS.slice(0, 2);
  };

  return (
    <>
      {/* 1. Ruby Crimson Announcement Bar (Exact Glamira Top Bar: 1/2 < > Announcement ->) */}
      <div className="relative z-50 bg-[#8C0006] text-white text-[11px] sm:text-xs py-2 px-4 sm:px-8 font-normal transition-colors w-full border-b border-[#730005]">
        <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Pager indicator on left like reference (1/2 < >) */}
          <div className="flex items-center gap-2 text-xs font-sans tracking-wide">
            <span className="font-semibold text-white/90 tabular-nums">
              {announcementIndex + 1}/{announcements.length}
            </span>
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                onClick={() =>
                  setAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length)
                }
                className="hover:text-white/70 px-1 py-0.5 cursor-pointer"
                aria-label="Previous offer"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() =>
                  setAnnouncementIndex((prev) => (prev + 1) % announcements.length)
                }
                className="hover:text-white/70 px-1 py-0.5 cursor-pointer"
                aria-label="Next offer"
              >
                ›
              </button>
            </div>
          </div>

          {/* Centered Offer Banner */}
          <div className="text-center font-medium tracking-[0.06em] flex items-center justify-center gap-2 truncate">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                navigateToHome();
                const elem = document.getElementById('collection-section');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:underline flex items-center gap-1.5 cursor-pointer truncate"
            >
              <span>{announcements[announcementIndex].title}</span>
              <span className="text-white/90 text-[10px] tracking-wider uppercase font-semibold">
                {announcements[announcementIndex].link}
              </span>
            </button>
          </div>

          {/* Right perks */}
          <div className="hidden lg:flex items-center gap-5 text-[11px] text-white/90 font-medium">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span>✓</span> Free Insured UK Delivery
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span>✓</span> 18K Real Gold Plated
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Luxury Header & Navigation 
          - Logo centered, clean bold typography
          - Navigation menu is 100% VISIBLE on ALL screen sizes (no hidden lg:block)
          - The same crisp white header stays sticky while scrolling
      */}
      <header
        className="sticky top-0 z-40 w-full bg-white/98 text-[#1A1A1A] backdrop-blur-md shadow-xs border-b border-[#E5E5E5]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Main Top Row: Mobile menu / Store info, Centered Brand Logo, Action Icons */}
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Mobile Menu & Clean Store Info */}
            <div className="flex items-center gap-4 lg:w-1/3 shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden p-2 transition-colors cursor-pointer ${
                  'text-[#1A1A1A] hover:text-[#A30008]'
                }`}
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 stroke-[1.8]" />
              </button>

              {/* Desktop Store Info / Currency Tag */}
              <div
                className={`hidden lg:flex items-center gap-3 text-[11px] tracking-[0.14em] uppercase font-sans font-medium ${
                  'text-[#555555]'
                }`}
              >
                <span>UK (GBP £)</span>
                <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                <span className="text-[10px] tracking-[0.16em]">London Showroom</span>
              </div>
            </div>

            {/* Center: Brand Logo (Glamira style centered wordmark) */}
            <div className="text-center lg:w-1/3">
              <button
                type="button"
                onClick={() => navigateToHome()}
                className="inline-block group cursor-pointer text-center"
              >
                <h1
                  className={`font-serif text-2xl sm:text-3xl lg:text-[38px] tracking-[0.26em] font-normal uppercase transition-colors whitespace-nowrap ${
                    'text-[#1A1A1A] group-hover:text-[#A30008]'
                  }`}
                >
                  THE GLINT
                </h1>
                <p
                  className={`text-[8.5px] sm:text-[9.5px] tracking-[0.44em] uppercase -mt-0.5 font-sans font-medium whitespace-nowrap ${
                    'text-[#666666]'
                  }`}
                >
                  FINE JEWELLERY
                </p>
              </button>
            </div>

            {/* Right: Actions (Glamira SEARCH text + Search icon, Camera, Account, Wishlist, Bag) */}
            <div
              className={`flex items-center justify-end gap-3 sm:gap-5 lg:w-1/3 shrink-0 ${
                'text-[#1A1A1A]'
              }`}
            >
              {/* Glamira SEARCH Button (Clean text + icon on the right, matching screenshot) */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className={`flex items-center gap-2 text-xs tracking-[0.16em] uppercase transition-colors group cursor-pointer py-1.5 px-2.5 rounded-xs ${
                  'text-[#1A1A1A] hover:text-[#A30008] hover:bg-[#F5F5F5]'
                }`}
                aria-label="Search Collection"
              >
                <span className="hidden sm:inline font-sans text-[11px] font-semibold tracking-wider">SEARCH</span>
                <Search className="w-4 h-4 stroke-[1.8] group-hover:scale-110 transition-transform shrink-0" />
              </button>

              {/* Visual Search / Camera icon from Glamira */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className={`hidden md:block p-2 transition-colors cursor-pointer rounded-xs ${
                  'hover:text-[#A30008] hover:bg-[#F5F5F5]'
                }`}
                title="Visual Search"
                aria-label="Visual Search"
              >
                <Camera className="w-4.5 h-4.5 stroke-[1.8]" />
              </button>

              {/* Account / User icon */}
              <button
                type="button"
                onClick={() => navigateToStory()}
                className={`p-2 transition-colors cursor-pointer rounded-xs ${
                  'hover:text-[#A30008] hover:bg-[#F5F5F5]'
                }`}
                title="Account / Our Heritage"
                aria-label="Account"
              >
                <User className="w-4.5 h-4.5 stroke-[1.8]" />
              </button>

              {/* Wishlist */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className={`relative p-2 transition-colors cursor-pointer rounded-xs ${
                  'hover:text-[#A30008] hover:bg-[#F5F5F5]'
                }`}
                aria-label="View Wishlist"
              >
                <Heart className="w-4.5 h-4.5 stroke-[1.8]" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#A30008] text-white text-[9px] flex items-center justify-center font-bold font-sans">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Bag with Count */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 flex items-center gap-1.5 transition-colors cursor-pointer rounded-xs group ${
                  'hover:text-[#A30008] hover:bg-[#F5F5F5]'
                }`}
                aria-label="View Shopping Bag"
              >
                <ShoppingBag className="w-4.5 h-4.5 stroke-[1.8] group-hover:scale-105 transition-transform" />
                {cartCount > 0 && (
                  <span className="min-w-4.5 h-4.5 px-1 rounded-full bg-[#A30008] text-white text-[10px] flex items-center justify-center font-bold font-sans transition-colors">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 3. Horizontal Category Menu: always visible, with horizontal scrolling on smaller viewports */}
        <nav
          className="w-full border-t bg-[#FAFAFA] border-[#E5E5E5]"
        >
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 overflow-x-auto scrollbar-none">
            <ul
              className="flex items-center justify-start md:justify-center gap-5 sm:gap-7 lg:gap-9 py-2.5 text-[11.5px] sm:text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors whitespace-nowrap min-w-max mx-auto text-[#1A1A1A]"
            >
              {navCategories.map((category) => (
                <li
                  key={category}
                  className="relative group py-1 cursor-pointer shrink-0"
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(category)}
                    className={`flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer px-1 py-0.5 ${
                      'hover:text-[#A30008]'
                    }`}
                  >
                    <span>{category}</span>
                    {category !== 'Our Heritage' && (
                      <ChevronDown className="w-3 h-3 stroke-[2] opacity-75 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-200" />
                    )}
                  </button>

                  {/* Underline hover effect */}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2.5px] transition-all duration-300 ease-out group-hover:w-full ${
                      'bg-[#A30008]'
                    }`}
                  />

                  {/* Mega Menu Dropdown */}
                  {hoveredCategory === category && category !== 'Our Heritage' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white border border-[#E5E5E5] shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-1 duration-200 text-[#1A1A1A]">
                      <div className="flex items-start justify-between pb-3 mb-4 border-b border-[#E5E5E5]">
                        <div>
                          <p className="font-serif text-lg text-[#1A1A1A] tracking-wide whitespace-nowrap font-medium">
                            {category} Collection
                          </p>
                          <p className="text-[10px] text-[#666666] tracking-[0.1em] lowercase font-sans whitespace-nowrap">
                            handcrafted with noble metals & ethically certified stones
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleNavClick(category)}
                          className="text-[10px] tracking-[0.15em] text-[#A30008] hover:text-[#1A1A1A] uppercase flex items-center gap-1 font-bold whitespace-nowrap cursor-pointer"
                        >
                          View All <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Mega Menu Previews */}
                      <div className="grid grid-cols-2 gap-4">
                        {getCategoryPreview(category).map((prod) => (
                          <div
                            key={prod.id}
                            onClick={() => {
                              setHoveredCategory(null);
                              navigateToProduct(prod.id);
                            }}
                            className="group/item flex items-center gap-3 p-2.5 bg-white border border-[#E5E5E5] hover:border-[#A30008] transition-all cursor-pointer shadow-2xs"
                          >
                            <img
                              src={prod.image}
                              alt={prod.name}
                              referrerPolicy="no-referrer"
                              className="w-14 h-14 object-cover shrink-0 bg-[#F8F8F8]"
                            />
                            <div className="min-w-0 text-left">
                              <p className="text-[11px] font-semibold text-[#1A1A1A] truncate group-hover/item:text-[#A30008] transition-colors">
                                {prod.name}
                              </p>
                              <p className="text-[11px] text-[#666666] font-sans mt-0.5 whitespace-nowrap font-bold">
                                {prod.priceFormatted}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white border-r border-[#E5E5E5] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E5]">
                <div>
                  <h2 className="font-serif text-2xl tracking-[0.2em] text-[#1A1A1A] uppercase whitespace-nowrap">
                    THE GLINT
                  </h2>
                  <p className="text-[9px] tracking-[0.3em] text-[#666666] uppercase whitespace-nowrap">
                    FINE JEWELLERY
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#1A1A1A] hover:text-[#A30008] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#A30008] font-semibold mb-3">
                  Shop Categories
                </p>
                {navCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleNavClick(category)}
                    className="w-full text-left py-2.5 text-xs tracking-[0.1em] text-[#1A1A1A] hover:text-[#A30008] uppercase flex items-center justify-between group transition-colors border-b border-[#F0F0F0]"
                  >
                    <span className="whitespace-nowrap">{category}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5E5E5] space-y-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateToStory();
                }}
                className="w-full py-3 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.15em] hover:bg-[#A30008] transition-colors cursor-pointer whitespace-nowrap"
              >
                Our Heritage & Craft
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

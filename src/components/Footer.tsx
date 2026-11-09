import React, { useState } from 'react';
import { useJewellery } from '../context/JewelleryContext';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setSelectedCategory, navigateToStory, navigateToHome, addToast } = useJewellery();
  const [footerName, setFooterName] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    navigateToHome();
    setTimeout(() => {
      const collectionElement = document.getElementById('collection-section');
      if (collectionElement) {
        collectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleFooterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail) return;
    setSubscribed(true);
    addToast('Welcome to The Glint Club', `Thank you ${footerName || 'valued collector'}.`);
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E5E5] pt-14 sm:pt-20 pb-12 font-sans w-full">
      {/* 3 Trust Badges Banner */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 pb-14 border-b border-[#E5E5E5]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center text-[#A30008] shrink-0">
              <Truck className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm tracking-[0.14em] uppercase text-[#1A1A1A] font-bold whitespace-nowrap">
                Complimentary Express Shipping
              </h4>
              <p className="text-xs text-[#555555] mt-1 leading-normal font-normal">
                On all UK & international orders over £100 with luxury velvet presentation packaging.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center text-[#A30008] shrink-0">
              <RotateCcw className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm tracking-[0.14em] uppercase text-[#1A1A1A] font-bold whitespace-nowrap">
                30-Day Hassle-Free Returns
              </h4>
              <p className="text-xs text-[#555555] mt-1 leading-normal font-normal">
                Complimentary prepaid return labels included inside every insured shipment parcel.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center text-[#A30008] shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm tracking-[0.14em] uppercase text-[#1A1A1A] font-bold whitespace-nowrap">
                Atelier Quality Warranty
              </h4>
              <p className="text-xs text-[#555555] mt-1 leading-normal font-normal">
                Guaranteed colorfast 18K gold vapor bonding and hypoallergenic certified purity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Atelier Narrative (4 Cols) */}
          <div className="lg:col-span-4 pr-4">
            <button
              type="button"
              onClick={navigateToHome}
              className="text-left cursor-pointer"
            >
              <h3 className="font-serif text-3xl tracking-[0.2em] text-[#1A1A1A] uppercase whitespace-nowrap">
                THE GLINT
              </h3>
              <p className="text-[10px] tracking-[0.34em] text-[#666666] uppercase -mt-0.5 mb-4 whitespace-nowrap">
                FINE JEWELLERY
              </p>
            </button>
            <p className="text-xs sm:text-sm text-[#555555] leading-[1.8] font-normal max-w-sm mb-6 text-balance">
              Timeless jewellery, thoughtfully crafted for every moment that matters. Celebrating the union of fine metallurgical discipline, ethical lab-grown brilliance, and modern sculptural ease.
            </p>
            <div className="text-xs text-[#666666] space-y-1 font-medium">
              <p>Atelier Concierge: <span className="text-[#1A1A1A]">concierge@theglint.co.uk</span></p>
              <p>Flagship: <span className="text-[#1A1A1A]">Mayfair, London · Place Vendôme, Paris</span></p>
            </div>
          </div>

          {/* Column 2: SHOP (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.22em] uppercase text-[#1A1A1A] font-bold mb-4 whitespace-nowrap">
              SHOP
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#555555]">
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Jewellery Sets')}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap font-medium cursor-pointer"
                >
                  Jewelry Sets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Necklaces')}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap font-medium cursor-pointer"
                >
                  Necklaces
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Earrings')}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap font-medium cursor-pointer"
                >
                  Earrings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Rings')}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap font-medium cursor-pointer"
                >
                  Rings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Bracelets')}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap font-medium cursor-pointer"
                >
                  Bracelets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Body Jewellery')}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap font-medium cursor-pointer"
                >
                  Body Accessories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCategoryClick("Men's Jewellery")}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap font-medium cursor-pointer"
                >
                  Men's Jewellery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CUSTOMER CARE (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.22em] uppercase text-[#1A1A1A] font-bold mb-4 whitespace-nowrap">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#555555]">
              <li>
                <button
                  type="button"
                  onClick={navigateToStory}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap cursor-pointer font-medium"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={navigateToHome}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap text-left font-medium cursor-pointer"
                >
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={navigateToHome}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap text-left font-medium cursor-pointer"
                >
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={navigateToHome}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap text-left font-medium cursor-pointer"
                >
                  Ring Size Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={navigateToHome}
                  className="hover:text-[#A30008] transition-colors whitespace-nowrap text-left font-medium cursor-pointer"
                >
                  Jewellery Care FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: STAY CONNECTED (4 Cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs tracking-[0.22em] uppercase text-[#1A1A1A] font-bold mb-3 whitespace-nowrap">
              STAY CONNECTED
            </h4>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 font-normal text-balance">
              Subscribe to receive exclusive offers, early access to new collections, and design inspiration.
            </p>

            {subscribed ? (
              <div className="p-4 bg-[#FAFAFA] border border-[#A30008] text-xs font-medium text-[#1A1A1A]">
                Thank you for subscribing to our private salon updates.
              </div>
            ) : (
              <form onSubmit={handleFooterSubscribe} className="space-y-2.5">
                <input
                  type="text"
                  value={footerName}
                  onChange={(e) => setFooterName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAFAFA] border border-[#E5E5E5] text-[#1A1A1A] placeholder:text-[#888888] focus:outline-none focus:border-[#1A1A1A]"
                />
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAFAFA] border border-[#E5E5E5] text-[#1A1A1A] placeholder:text-[#888888] focus:outline-none focus:border-[#1A1A1A]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1A1A1A] hover:bg-[#A30008] text-[#FFFFFF] text-xs font-bold tracking-[0.18em] uppercase transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
        <p className="whitespace-nowrap">© 2026 The Glint. All Rights Reserved.</p>

        {/* Payment and Trust Icons */}
        <div className="flex items-center gap-2.5 text-[10px] tracking-wider text-[#1A1A1A] font-semibold whitespace-nowrap">
          <span className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FAFAFA]">VISA</span>
          <span className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FAFAFA]">MASTERCARD</span>
          <span className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FAFAFA]">AMEX</span>
          <span className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FAFAFA]">APPLE PAY</span>
        </div>

        <div className="flex items-center gap-6 whitespace-nowrap font-medium">
          <span className="hover:text-[#A30008] transition-colors cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-[#A30008] transition-colors cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

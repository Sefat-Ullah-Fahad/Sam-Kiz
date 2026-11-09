import React, { useState } from 'react';
import { Heart, Plus, Check, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useJewellery } from '../context/JewelleryContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, navigateToProduct } = useJewellery();
  const [selectedMaterial, setSelectedMaterial] = useState<string>(product.materials[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, selectedMaterial);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleCardClick = () => {
    navigateToProduct(product.id);
  };

  // Metal color preview for swatches
  const getMaterialColor = (mat: string) => {
    switch (mat) {
      case 'Gold':
      case 'Antique Gold':
        return '#D4AF37';
      case 'White Gold':
        return '#E5E7EB';
      case 'Rose Gold':
        return '#E0A899';
      case 'Silver':
        return '#CBD5E1';
      case 'Platinum':
        return '#E2E8F0';
      default:
        return '#D4AF37';
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between cursor-pointer relative shadow-2xs hover:shadow-md"
    >
      {/* Visual Image Container */}
      <div className="relative w-full aspect-square bg-[#FBFBFB] overflow-hidden flex items-center justify-center p-6">
        
        {/* Crisp High-Contrast Badge */}
        {product.badge && (
          <div className="absolute top-3.5 left-3.5 z-20">
            <span className="text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 bg-[#1A1A1A] text-[#FFFFFF] font-sans font-semibold whitespace-nowrap shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className={`absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs ${
            inWishlist
              ? 'bg-[#A30008] text-[#FFFFFF]'
              : 'bg-[#FFFFFF] text-[#1A1A1A] hover:text-[#A30008] hover:bg-[#FFFFFF]'
          }`}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart
            className={`w-4 h-4 stroke-[1.8] transition-transform ${
              inWishlist ? 'fill-current scale-110' : ''
            }`}
          />
        </button>

        {/* Primary and Hover Image with Smooth Dissolve */}
        <div className="w-full h-full relative flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            className={`absolute max-h-full max-w-full object-contain p-2 transition-opacity duration-500 ease-in-out ${
              isHovered && product.hoverImage ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              referrerPolicy="no-referrer"
              loading="lazy"
              className={`absolute max-h-full max-w-full object-contain p-2 transition-all duration-500 ease-in-out ${
                isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            />
          )}
        </div>

        {/* Action Bar on Image Center Hover (High-contrast, crystal clear buttons) */}
        <div
          className={`absolute inset-x-4 bottom-4 z-20 hidden sm:flex items-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigateToProduct(product.id);
            }}
            className="flex-1 py-2.5 bg-[#FFFFFF] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white text-[11px] tracking-[0.16em] uppercase font-sans font-semibold border border-[#1A1A1A] flex items-center justify-center gap-1.5 shadow-sm transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleQuickAdd}
            className="py-2.5 px-4 bg-[#1A1A1A] hover:bg-[#A30008] text-[#FFFFFF] text-[11px] tracking-[0.14em] uppercase font-sans font-semibold flex items-center justify-center transition-colors shadow-sm shrink-0 cursor-pointer"
            title="Quick Add to Bag"
          >
            {justAdded ? <Check className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Product Details Section - 100% Crisp High-Contrast Legibility */}
      <div className="p-5 flex flex-col justify-between flex-1 border-t border-[#E5E5E5] bg-[#FFFFFF]">
        <div>
          {/* Category & Rating: Bold and High-Contrast */}
          <div className="flex items-center justify-between text-xs tracking-[0.14em] uppercase mb-2 font-sans whitespace-nowrap">
            <span className="font-semibold text-[#8C0006]">
              {product.category}
            </span>
            <span className="tabular-nums font-sans font-bold text-[#B45309] flex items-center gap-1">
              <span>★</span> {product.rating.toFixed(1)} <span className="font-normal text-[#666666]">({product.reviewsCount})</span>
            </span>
          </div>

          {/* Product Name: Bold, Dark Charcoal (#1A1A1A), hover to Ruby Red (#8C0006) for optimal contrast */}
          <h4 className="text-[15px] sm:text-[16px] leading-[1.38] text-[#1A1A1A] font-semibold group-hover:text-[#8C0006] transition-colors line-clamp-2 min-h-[44px] text-balance">
            {product.name}
          </h4>

          {/* Material guarantee subline */}
          <p className="text-[11px] text-[#666666] font-sans mt-1">
            18K Gold Plated · Tarnish-Free
          </p>
        </div>

        {/* Price & Variant Swatches */}
        <div className="mt-3 pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
          <div>
            <p className="text-[17px] sm:text-[18px] font-sans text-[#1A1A1A] font-bold tabular-nums whitespace-nowrap">
              {product.priceFormatted}
            </p>
          </div>

          {/* Material Swatches */}
          {product.materials.length > 1 && (
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {product.materials.map((mat) => (
                <button
                  key={mat}
                  type="button"
                  onClick={() => setSelectedMaterial(mat)}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedMaterial === mat
                      ? 'border-[#1A1A1A] ring-2 ring-[#1A1A1A] scale-110'
                      : 'border-[#CBD5E1] hover:scale-105'
                  }`}
                  style={{ backgroundColor: getMaterialColor(mat) }}
                  title={mat}
                  aria-label={mat}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mobile View Product Button */}
        <div className="mt-3.5 sm:hidden pt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigateToProduct(product.id);
            }}
            className="flex-1 py-2.5 bg-white border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-semibold tracking-[0.14em] uppercase font-sans cursor-pointer"
          >
            View Piece
          </button>
          <button
            type="button"
            onClick={handleQuickAdd}
            className="py-2.5 px-3.5 bg-[#1A1A1A] hover:bg-[#A30008] text-[#FFFFFF] text-[11px] font-semibold tracking-[0.14em] uppercase font-sans shrink-0 cursor-pointer"
          >
            {justAdded ? '✓' : '+ Bag'}
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ArrowLeft, Heart, ShieldCheck, Truck, RotateCcw, Star, Plus, Minus, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/jewelleryData';
import { useJewellery } from '../context/JewelleryContext';

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, navigateToHome, navigateToProduct, setIsCartOpen } = useJewellery();

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedMaterial, setSelectedMaterial] = useState<string>(product.materials[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<'specs' | 'shipping' | 'care'>('specs');

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedMaterial);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 1600);
  };

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

  // Related products (3 columns)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category)
    .concat(PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] py-8 sm:py-12">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* 1. Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E5E5E5]">
          <button
            type="button"
            onClick={navigateToHome}
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#555555] hover:text-[#1A1A1A] transition-colors font-sans font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Collection</span>
          </button>

          {/* Breadcrumb line */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-sans text-[#666666] tracking-wider uppercase">
            <button type="button" onClick={navigateToHome} className="hover:text-[#1A1A1A]">Home</button>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-[#1A1A1A] font-semibold truncate max-w-xs">{product.name}</span>
          </div>
        </div>

        {/* 2. Main 2-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-20 items-start mb-24">
          
          {/* Left: Gallery & Zoom Showcase (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 lg:sticky lg:top-28">
            
            {/* Vertical Thumbnail Switcher */}
            {product.hoverImage && (
              <div className="flex sm:flex-col gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveImage(product.image)}
                  className={`w-18 h-18 sm:w-20 sm:h-20 p-2 bg-[#FFFFFF] border transition-all cursor-pointer flex items-center justify-center ${
                    activeImage === product.image
                      ? 'border-[#1A1A1A] ring-2 ring-[#1A1A1A]'
                      : 'border-[#E5E5E5] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveImage(product.hoverImage)}
                  className={`w-18 h-18 sm:w-20 sm:h-20 p-2 bg-[#FFFFFF] border transition-all cursor-pointer flex items-center justify-center ${
                    activeImage === product.hoverImage
                      ? 'border-[#1A1A1A] ring-2 ring-[#1A1A1A]'
                      : 'border-[#E5E5E5] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} Alternate View`}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              </div>
            )}

            {/* Main Visual Stage */}
            <div className="flex-1 relative aspect-square bg-[#FFFFFF] border border-[#E5E5E5] p-8 sm:p-14 flex items-center justify-center shadow-xs overflow-hidden group">
              {product.badge && (
                <span className="absolute top-4 left-4 z-20 text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-[#1A1A1A] text-[#FFFFFF] font-sans font-bold shadow-xs">
                  {product.badge}
                </span>
              )}

              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer border shadow-xs ${
                  inWishlist
                    ? 'bg-[#A30008] text-[#FFFFFF] border-[#A30008]'
                    : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
                }`}
                aria-label="Toggle wishlist"
              >
                <Heart className={`w-4.5 h-4.5 stroke-[1.8] ${inWishlist ? 'fill-current' : ''}`} />
              </button>

              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-108"
              />
            </div>
          </div>

          {/* Right: Contiguous Purchase Module (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Eyebrow / Category & Rating */}
            <div className="flex items-center justify-between text-xs tracking-[0.22em] uppercase font-sans mb-3">
              <span className="font-bold text-[#A30008]">{product.category} · ATELIER PIECE</span>
              <div className="flex items-center gap-1.5 text-[#D97706]">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-[#1A1A1A] font-bold font-sans">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-[#666666] font-normal">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-[#1A1A1A] font-normal tracking-[-0.01em] text-balance">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-4 pb-6 border-b border-[#E5E5E5]">
              <span className="text-3xl font-sans font-bold text-[#1A1A1A] tabular-nums">
                {product.priceFormatted}
              </span>
              <span className="text-xs text-[#666666] font-sans font-medium">
                Taxes included · Free express UK & worldwide shipping
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-[15px] text-[#555555] leading-[1.8] font-sans font-normal">
              {product.description}
            </p>

            {/* Metal Finish Variant Selector */}
            <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-[#1A1A1A] font-bold font-sans">
                  Select Metal Finish: <span className="text-[#A30008]">{selectedMaterial}</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {product.materials.map((mat) => {
                  const isSelected = selectedMaterial === mat;
                  return (
                    <button
                      key={mat}
                      type="button"
                      onClick={() => setSelectedMaterial(mat)}
                      className={`px-4 py-2.5 text-xs font-sans font-semibold border transition-all flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'border-[#1A1A1A] bg-[#FFFFFF] text-[#1A1A1A] ring-2 ring-[#1A1A1A] shadow-xs'
                          : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#555555] hover:border-[#1A1A1A]'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/20 inline-block"
                        style={{ backgroundColor: getMaterialColor(mat) }}
                      />
                      <span>{mat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & Buy Buttons */}
            <div className="mt-8 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#1A1A1A] font-bold font-sans block mb-2">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-[#E5E5E5] bg-[#FFFFFF] h-12 px-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-full flex items-center justify-center text-[#555555] hover:text-[#1A1A1A] cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm font-sans text-[#1A1A1A] tabular-nums font-bold">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-full flex items-center justify-center text-[#555555] hover:text-[#1A1A1A] cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add to Bag CTA */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full h-14 bg-[#1A1A1A] hover:bg-[#A30008] text-[#FFFFFF] text-xs sm:text-sm uppercase tracking-[0.2em] font-sans font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-5 h-5 text-white stroke-[2.5]" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <span>ADD TO SHOPPING BAG · ${(product.price * quantity).toFixed(2)}</span>
                  )}
                </button>

                {/* Buy with ShopPay */}
                <button
                  type="button"
                  onClick={() => {
                    addToCart(product, quantity, selectedMaterial);
                    setIsCartOpen(true);
                  }}
                  className="w-full h-12 bg-[#5A31F4] hover:bg-[#4821E3] text-white font-medium text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Buy with</span>
                  <span className="font-extrabold text-base tracking-tighter italic">shop</span>
                </button>

                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(true)}
                    className="text-xs text-[#555555] underline hover:text-[#1A1A1A] cursor-pointer"
                  >
                    More payment options
                  </button>
                </div>
              </div>

              <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-between text-xs text-[#555555] font-sans">
                <span className="flex items-center gap-2 text-[#1A1A1A] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#A30008]" />
                  Colorfast Guaranteed
                </span>
                <span>·</span>
                <span className="flex items-center gap-2 text-[#1A1A1A] font-medium">
                  <Truck className="w-4 h-4 text-[#A30008]" />
                  Insured Dispatch
                </span>
                <span>·</span>
                <span className="flex items-center gap-2 text-[#1A1A1A] font-medium">
                  <RotateCcw className="w-4 h-4 text-[#A30008]" />
                  30-Day Returns
                </span>
              </div>
            </div>

            {/* Collapsible Atelier Accordions */}
            <div className="mt-8 border-t border-[#E5E5E5] divide-y divide-[#E5E5E5]">
              
              {/* Accordion 1: Specifications */}
              <div>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'specs' ? ('' as any) : 'specs')}
                  className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-[0.16em] text-[#1A1A1A] font-bold font-sans cursor-pointer"
                >
                  <span>Atelier Specifications</span>
                  {openAccordion === 'specs' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordion === 'specs' && (
                  <div className="pb-5 text-xs text-[#555555] font-sans space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div><span className="font-semibold text-[#1A1A1A]">Material: </span>{product.specs.material}</div>
                      <div><span className="font-semibold text-[#1A1A1A]">Finish: </span>{product.specs.finish}</div>
                      {product.specs.stone && <div><span className="font-semibold text-[#1A1A1A]">Stone: </span>{product.specs.stone}</div>}
                      {product.specs.dimensions && <div><span className="font-semibold text-[#1A1A1A]">Dimensions: </span>{product.specs.dimensions}</div>}
                      {product.specs.closure && <div><span className="font-semibold text-[#1A1A1A]">Closure: </span>{product.specs.closure}</div>}
                      <div><span className="font-semibold text-[#1A1A1A]">Tarnish-Proof: </span>Yes (18K PVD vapor bond)</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Delivery & Packaging */}
              <div>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? ('' as any) : 'shipping')}
                  className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-[0.16em] text-[#1A1A1A] font-bold font-sans cursor-pointer"
                >
                  <span>Delivery & Signature Packaging</span>
                  {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pb-5 text-xs text-[#555555] font-sans leading-relaxed space-y-2">
                    <p>
                      Every order is hand-inspected in our atelier, enclosed in our signature champagne gold and midnight velvet keepsake presentation case, accompanied by a numbered certificate of authenticity.
                    </p>
                    <p>
                      Orders are dispatched via express tracked courier within 24 hours. Complimentary returns within 30 days of arrival.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Care Instructions */}
              <div>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? ('' as any) : 'care')}
                  className="w-full py-4 flex items-center justify-between text-left text-xs uppercase tracking-[0.16em] text-[#1A1A1A] font-bold font-sans cursor-pointer"
                >
                  <span>Care & Radiance Guidance</span>
                  {openAccordion === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordion === 'care' && (
                  <div className="pb-5 text-xs text-[#555555] font-sans leading-relaxed space-y-2">
                    <p>
                      While our vacuum-bonded 18k gold and surgical steel are completely colorfast and waterproof, we recommend gently buffing with the included microfibre cloth after wearing to maintain high-mirror brilliance.
                    </p>
                    <p>
                      Store in the velvet case when travelling to avoid micro-scratches from other keys or metals.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* 3. You May Also Admire (3-Column Layout) */}
        <section className="pt-14 border-t border-[#E5E5E5]">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs tracking-[0.24em] text-[#A30008] uppercase font-sans font-bold block mb-2">
              HARMONIOUS PAIRINGS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal">
              You May Also Admire
            </h2>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="w-8 h-[1px] bg-[#E5E5E5]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
              <span className="w-8 h-[1px] bg-[#E5E5E5]" />
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {relatedProducts.map((relProd) => (
              <div
                key={relProd.id}
                onClick={() => navigateToProduct(relProd.id)}
                className="group bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-2xs hover:shadow-md"
              >
                <div className="relative aspect-square bg-[#FBFBFB] p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={relProd.image}
                    alt={relProd.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  {relProd.badge && (
                    <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2.5 py-1 bg-[#1A1A1A] text-[#FFFFFF] font-sans font-bold shadow-xs">
                      {relProd.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 border-t border-[#E5E5E5] bg-[#FFFFFF]">
                  <div className="text-xs tracking-[0.14em] uppercase text-[#A30008] font-semibold mb-1 font-sans">
                    {relProd.category}
                  </div>
                  <h4 className="text-[15px] font-semibold text-[#1A1A1A] group-hover:text-[#A30008] transition-colors line-clamp-1">
                    {relProd.name}
                  </h4>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[16px] font-bold font-sans text-[#1A1A1A] tabular-nums">
                      {relProd.priceFormatted}
                    </span>
                    <span className="text-xs tracking-wider uppercase text-[#1A1A1A] group-hover:text-[#A30008] font-bold font-sans">
                      Explore Piece →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

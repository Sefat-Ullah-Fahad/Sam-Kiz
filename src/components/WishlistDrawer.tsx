import React from 'react';
import { X, Trash2, ShoppingBag, Heart } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const WishlistDrawer: React.FC = () => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useJewellery();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white border-l border-[#E5E5E5] shadow-2xl flex flex-col justify-between z-50 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E5E5E5] bg-[#FFFFFF] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#A30008] fill-current" />
            <h3 className="font-serif text-2xl text-[#1A1A1A] tracking-wide font-normal">
              Saved Pieces
            </h3>
            <span className="text-xs text-[#555555] font-sans font-medium">
              ({wishlist.length})
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-[#1A1A1A] hover:text-[#A30008] transition-colors cursor-pointer"
            aria-label="Close Wishlist"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlist.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif text-2xl text-[#1A1A1A] mb-2 font-normal">No Saved Pieces Yet</p>
              <p className="text-xs text-[#555555] font-sans max-w-xs mx-auto mb-6">
                Click the heart on any ring, necklace, or bracelet to curate your personal wish suite.
              </p>
              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                className="px-6 py-3 bg-[#1A1A1A] text-[#FFFFFF] text-xs uppercase tracking-[0.16em] font-semibold cursor-pointer"
              >
                Explore Catalogue
              </button>
            </div>
          ) : (
            wishlist.map((prod) => (
              <div
                key={prod.id}
                className="flex items-center gap-4 p-3.5 bg-[#FFFFFF] border border-[#E5E5E5] relative group shadow-2xs"
              >
                <div className="w-20 h-20 bg-[#FBFBFB] border border-[#E5E5E5] p-1 shrink-0 flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0 pr-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#A30008] font-bold font-sans block">
                    {prod.category}
                  </span>
                  <h4 className="text-xs font-semibold text-[#1A1A1A] truncate mt-0.5">
                    {prod.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1A1A1A] font-bold mt-1 font-sans tabular-nums">
                    {prod.priceFormatted}
                  </p>

                  <div className="mt-2.5 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(prod, 1, prod.materials[0]);
                        toggleWishlist(prod);
                      }}
                      className="text-[11px] uppercase tracking-wider text-[#1A1A1A] hover:text-[#A30008] font-bold flex items-center gap-1 font-sans cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Move to Bag
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleWishlist(prod)}
                  className="absolute top-3 right-3 text-[#777777] hover:text-[#A30008] transition-colors p-1 cursor-pointer"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="p-6 border-t border-[#E5E5E5] bg-[#FFFFFF]">
            <button
              type="button"
              onClick={() => {
                wishlist.forEach((p) => addToCart(p, 1, p.materials[0]));
                setIsWishlistOpen(false);
              }}
              className="w-full py-4 bg-[#1A1A1A] hover:bg-[#A30008] text-[#FFFFFF] text-xs uppercase tracking-[0.18em] font-sans font-bold transition-colors cursor-pointer shadow-xs"
            >
              MOVE ALL TO SHOPPING BAG
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

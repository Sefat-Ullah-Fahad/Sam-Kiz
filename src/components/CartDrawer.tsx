import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateCartQuantity,
    removeFromCart,
    cartSubtotal,
    cartCount,
    addToast,
  } = useJewellery();

  const [orderCompleted, setOrderCompleted] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 100;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderCompleted(true);
      addToast('Order Placed Successfully', 'Thank you! Your insured parcel is being prepared.');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white border-l border-[#E5E5E5] shadow-2xl flex flex-col justify-between z-50 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E5E5E5] bg-[#FFFFFF]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-2xl text-[#1A1A1A] tracking-wide font-normal">
                Shopping Bag
              </h3>
              <span className="text-xs text-[#555555] font-sans font-medium">
                ({cartCount} {cartCount === 1 ? 'piece' : 'pieces'})
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#1A1A1A] hover:text-[#A30008] transition-colors cursor-pointer"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="mt-4 pt-3 border-t border-[#E5E5E5]">
            {remainingForFreeShipping > 0 ? (
              <p className="text-xs text-[#555555] font-sans">
                Add <span className="font-bold text-[#A30008]">£{remainingForFreeShipping.toFixed(2)}</span> more to unlock complimentary UK express delivery.
              </p>
            ) : (
              <p className="text-xs text-[#A30008] font-sans font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                You have unlocked complimentary express shipping & velvet box!
              </p>
            )}
            <div className="w-full h-1.5 bg-[#E5E5E5] rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-[#A30008] transition-all duration-500 rounded-full"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>
        </div>

        {/* Drawer Body / Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {orderCompleted ? (
            <div className="text-center py-12 px-4">
              <div className="w-16 h-16 rounded-full bg-[#FAFAFA] border border-[#A30008] flex items-center justify-center mx-auto mb-4 text-[#A30008]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-[#1A1A1A] mb-2 font-semibold">Order Confirmed</h4>
              <p className="text-xs text-[#555555] leading-relaxed mb-6 font-sans">
                Receipt #GL-{Math.floor(100000 + Math.random() * 900000)} has been generated. Your jewellery will be hand-inspected and secured in signature velvet cases.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOrderCompleted(false);
                  setIsCartOpen(false);
                }}
                className="px-6 py-2.5 bg-[#1A1A1A] text-[#FFFFFF] text-xs uppercase tracking-[0.15em] font-semibold cursor-pointer"
              >
                Continue Exploring
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif text-2xl text-[#1A1A1A] mb-2">Your Bag is Empty</p>
              <p className="text-xs text-[#555555] font-sans max-w-xs mx-auto mb-6">
                Discover our curated collections of fine rings, necklaces, and bridal sets.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 bg-[#1A1A1A] text-[#FFFFFF] text-xs uppercase tracking-[0.16em] font-semibold cursor-pointer"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedMaterial}`}
                className="flex items-start gap-4 p-3.5 bg-[#FFFFFF] border border-[#E5E5E5] relative group shadow-2xs"
              >
                {/* Product Thumbnail */}
                <div className="w-20 h-20 bg-[#FBFBFB] border border-[#E5E5E5] p-1 shrink-0 flex items-center justify-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Info & Modifiers */}
                <div className="flex-1 min-w-0 pr-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#A30008] font-bold font-sans block">
                    {item.product.category} · {item.selectedMaterial}
                  </span>
                  <h4 className="text-xs font-semibold text-[#1A1A1A] truncate mt-0.5">
                    {item.product.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1A1A1A] font-bold mt-1 font-sans tabular-nums">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-[#E5E5E5] bg-[#FAFAFA]">
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(item.product.id, item.selectedMaterial, -1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-[#555555] hover:text-[#1A1A1A] cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-sans text-[#1A1A1A] font-bold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(item.product.id, item.selectedMaterial, 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-[#555555] hover:text-[#1A1A1A] cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Delete button */}
                <button
                  type="button"
                  onClick={() => removeFromCart(item.product.id, item.selectedMaterial)}
                  className="absolute top-3 right-3 text-[#777777] hover:text-[#A30008] transition-colors p-1 cursor-pointer"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {!orderCompleted && cart.length > 0 && (
          <div className="p-6 border-t border-[#E5E5E5] bg-[#FFFFFF] space-y-4">
            <div className="space-y-1.5 text-xs font-sans">
              <div className="flex items-center justify-between text-[#555555]">
                <span>Estimated Subtotal</span>
                <span className="text-[#1A1A1A] font-bold tabular-nums">
                  ${cartSubtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between text-[#555555]">
                <span>Insured Express Shipping</span>
                <span className="text-[#1A1A1A] font-semibold">
                  {remainingForFreeShipping === 0 ? 'COMPLIMENTARY' : '£10.00'}
                </span>
              </div>
              <div className="flex items-center justify-between text-[#555555]">
                <span>Signature Velvet Case</span>
                <span className="text-[#A30008] font-bold">INCLUDED</span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-[#1A1A1A] pt-2 border-t border-[#E5E5E5]">
                <span>Total Due</span>
                <span className="tabular-nums">
                  $
                  {(
                    cartSubtotal + (remainingForFreeShipping === 0 ? 0 : 10)
                  ).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="button"
              disabled={isCheckingOut}
              onClick={handleCheckout}
              className="w-full py-4 bg-[#1A1A1A] hover:bg-[#A30008] disabled:bg-[#888888] text-[#FFFFFF] text-xs uppercase tracking-[0.2em] font-sans font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              {isCheckingOut ? (
                <span>SECURING ATELIER DISPATCH...</span>
              ) : (
                <>
                  <span>PROCEED TO SECURE CHECKOUT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-[#666666] flex items-center justify-center gap-1.5 font-sans font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A30008]" />
              256-Bit Encrypted Payment · 30-Day Insured Return Guarantee
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

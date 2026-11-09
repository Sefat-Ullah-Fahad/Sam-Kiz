import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { addToast } = useJewellery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitted(true);
    addToast('Welcome to The Glint List', 'You have been enrolled for private preview access.');
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFA] border-b border-[#E5E5E5] w-full px-4 sm:px-8 lg:px-12">
      <div className="max-w-[760px] mx-auto text-center">
        <span className="text-xs tracking-[0.24em] text-[#A30008] uppercase font-sans font-bold block mb-2 whitespace-nowrap">
          THE GLINT LIST
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#1A1A1A] tracking-normal font-normal uppercase text-balance">
          NEW PIECES, FIRST
        </h2>

        <div className="flex items-center justify-center gap-3 mt-3 mb-4">
          <span className="w-8 h-[1px] bg-[#E5E5E5]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#A30008]" />
          <span className="w-8 h-[1px] bg-[#E5E5E5]" />
        </div>

        <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-sans max-w-md mx-auto mb-8 font-normal text-balance">
          Early access to new collections, restocks and private sales. No more than twice a month.
        </p>

        {isSubmitted ? (
          <div className="bg-[#FFFFFF] border border-[#A30008] p-6 max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#A30008] flex items-center justify-center mx-auto mb-3 text-[#A30008]">
              <Check className="w-6 h-6 stroke-[2]" />
            </div>
            <h4 className="font-serif text-2xl text-[#1A1A1A] font-semibold">You are on the list</h4>
            <p className="text-xs text-[#555555] font-sans mt-1.5">
              Private invitations and atelier previews will be dispatched to <span className="font-semibold text-[#1A1A1A]">{email}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 bg-[#FFFFFF] border border-[#E5E5E5] p-1.5 focus-within:border-[#1A1A1A] transition-colors shadow-2xs">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-xs sm:text-sm font-sans text-[#1A1A1A] placeholder:text-[#888888] focus:outline-none bg-transparent"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#1A1A1A] hover:bg-[#A30008] text-[#FFFFFF] text-xs tracking-[0.18em] uppercase font-sans font-bold transition-colors shrink-0 cursor-pointer whitespace-nowrap shadow-xs"
              >
                SUBSCRIBE
              </button>
            </div>

            {error && (
              <p className="mt-2 text-xs text-red-600 font-sans text-left font-medium">{error}</p>
            )}

            <p className="mt-4 text-xs text-[#777777] font-sans font-normal">
              By subscribing you agree to our privacy principles. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

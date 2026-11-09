import React from 'react';
import { useJewellery } from '../context/JewelleryContext';
import { Sparkles, X, Check } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useJewellery();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#292522] text-[#FFFFFF] border border-[#B69A70]/60 p-4 shadow-xl flex items-start gap-3 animate-in slide-in-from-bottom-3 duration-300 rounded-xs"
        >
          <div className="w-5 h-5 rounded-full bg-[#B69A70] flex items-center justify-center shrink-0 mt-0.5 text-white">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-[0.14em] font-sans font-medium text-[#FFFFFF]">
              {toast.title}
            </p>
            {toast.description && (
              <p className="text-[11px] text-[#D8CFC3] font-sans mt-0.5 truncate">
                {toast.description}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            className="text-[#D8CFC3] hover:text-[#FFFFFF] transition-colors p-0.5"
            aria-label="Dismiss toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

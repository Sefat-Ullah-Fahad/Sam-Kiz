import React, { createContext, useContext, useState } from 'react';
import { Product, CartItem, JournalArticle } from '../types';
import { PRODUCTS, JOURNAL_ARTICLES } from '../data/jewelleryData';

interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info';
}

export type ViewState = 'home' | 'product' | 'story' | 'journal';

interface JewelleryContextType {
  currentView: ViewState;
  selectedProductId: string | null;
  selectedProduct: Product | null;
  selectedArticleId: string | null;
  selectedArticle: JournalArticle | null;
  navigateToHome: () => void;
  navigateToProduct: (productId: string) => void;
  navigateToStory: () => void;
  navigateToArticle: (articleId: string) => void;

  cart: CartItem[];
  wishlist: Product[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedMaterial: string;
  setSelectedMaterial: (mat: string) => void;
  addToCart: (product: Product, quantity?: number, material?: string) => void;
  updateCartQuantity: (productId: string, material: string, delta: number) => void;
  removeFromCart: (productId: string, material: string) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  cartSubtotal: number;
  toasts: ToastMessage[];
  addToast: (title: string, description?: string) => void;
  removeToast: (id: string) => void;
}

const JewelleryContext = createContext<JewelleryContextType | undefined>(undefined);

export const JewelleryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const [cart, setCart] = useState<CartItem[]>(() => {
    const initialProd = PRODUCTS[0];
    return [
      {
        product: initialProd,
        quantity: 1,
        selectedMaterial: 'Gold',
      },
    ];
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => [PRODUCTS[9]]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const selectedProduct = selectedProductId
    ? PRODUCTS.find((p) => p.id === selectedProductId) || null
    : null;

  const selectedArticle = selectedArticleId
    ? JOURNAL_ARTICLES.find((a) => a.id === selectedArticleId) || null
    : null;

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedProductId(null);
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToStory = () => {
    setCurrentView('story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentView('journal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToast = (title: string, description?: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type: 'success' }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (product: Product, quantity = 1, material?: string) => {
    const chosenMaterial = material || product.materials[0];
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedMaterial === chosenMaterial
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      }
      return [...prev, { product, quantity, selectedMaterial: chosenMaterial }];
    });
    addToast('Added to Shopping Bag', `${product.name} (${chosenMaterial})`);
    setIsCartOpen(true);
  };

  const updateCartQuantity = (productId: string, material: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedMaterial === material) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (productId: string, material: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedMaterial === material)
      )
    );
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        addToast('Removed from Wishlist', product.name);
        return prev.filter((p) => p.id !== product.id);
      } else {
        addToast('Saved to Wishlist', product.name);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <JewelleryContext.Provider
      value={{
        currentView,
        selectedProductId,
        selectedProduct,
        selectedArticleId,
        selectedArticle,
        navigateToHome,
        navigateToProduct,
        navigateToStory,
        navigateToArticle,
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        selectedCategory,
        setSelectedCategory,
        selectedMaterial,
        setSelectedMaterial,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        toggleWishlist,
        isInWishlist,
        cartCount,
        cartSubtotal,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </JewelleryContext.Provider>
  );
};

export const useJewellery = () => {
  const context = useContext(JewelleryContext);
  if (!context) {
    throw new Error('useJewellery must be used within a JewelleryProvider');
  }
  return context;
};

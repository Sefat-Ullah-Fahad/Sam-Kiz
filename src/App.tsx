import React from 'react';
import { JewelleryProvider, useJewellery } from './context/JewelleryContext';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { CategoryBentoGrid } from './components/CategoryBentoGrid';
import { ProductGridSection } from './components/ProductGridSection';
import { ShopByMaterial } from './components/ShopByMaterial';
import { EditorialStatement } from './components/EditorialStatement';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { BridalCampaign } from './components/BridalCampaign';
import { JournalSection } from './components/JournalSection';
import { CustomerReviews } from './components/CustomerReviews';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductDetailPage } from './components/ProductDetailPage';
import { StoryPage } from './components/StoryPage';
import { JournalArticlePage } from './components/JournalArticlePage';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { ToastContainer } from './components/ToastContainer';

const MainAppContent: React.FC = () => {
  const { currentView, selectedProduct, selectedArticle } = useJewellery();

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#A30008] selection:text-white w-full overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Main Content View Switcher (Dedicated Single Pages with Zero Modals) */}
      <main className="flex-1 w-full">
        {currentView === 'product' && selectedProduct ? (
          <ProductDetailPage product={selectedProduct} />
        ) : currentView === 'story' ? (
          <StoryPage />
        ) : currentView === 'journal' && selectedArticle ? (
          <JournalArticlePage article={selectedArticle} />
        ) : (
          <>
            {/* 1. Hero Campaign Slider */}
            <HeroSlider />

            {/* 2. Shop by Category (Asymmetrical Bento Grid) */}
            <CategoryBentoGrid />

            {/* 3. New Arrivals & Featured Collection (3-Column Layout) */}
            <ProductGridSection />

            {/* 4. Shop by Material (Precious Metallurgy Swatches & Collage) */}
            <ShopByMaterial />

            {/* 5. Editorial Statement Quote */}
            <EditorialStatement />

            {/* 6. Brand Story — Our Philosophy */}
            <BrandPhilosophy />

            {/* 7. Bridal & Special Occasion Collection */}
            <BridalCampaign />

            {/* 8. The Glint Journal */}
            <JournalSection />

            {/* 9. Collector Reviews */}
            <CustomerReviews />

            {/* 10. The Glint List Newsletter */}
            <Newsletter />
          </>
        )}
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Slide-over Drawers & Toast Feedback (Standard E-Commerce Side Panels, Zero Content Modals) */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <JewelleryProvider>
      <MainAppContent />
    </JewelleryProvider>
  );
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Necklaces' | 'Earrings' | 'Rings' | 'Bracelets' | 'Jewellery Sets' | 'Body Jewellery' | "Men's Jewellery";
  price: number;
  originalPrice?: number;
  priceFormatted: string;
  image: string;
  hoverImage: string;
  materials: ('Gold' | 'White Gold' | 'Rose Gold' | 'Silver' | 'Platinum' | 'Antique Gold')[];
  badge?: string;
  description: string;
  specs: {
    material: string;
    finish: string;
    stone?: string;
    dimensions?: string;
    closure?: string;
    colorfast: boolean;
  };
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewsCount: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  itemCount: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedMaterial: string;
}

export interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  ctaText: string;
  image: string;
  accent: string;
  offerTag?: string;
  italicHeadline?: string;
  boldStatement?: string;
  noteText?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  itemPurchased: string;
  rating: number;
  quote: string;
  date: string;
}

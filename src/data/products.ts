import { Product } from '@/types';

export const categories = [
  'All',
  'Electrics',
  'Men',
  'Women',
  'Children',
  'Fashion',
  'Beauty & Personal Care',
  'Books',
  'Toys',
  'Sports & Outdoors'
];

export const products: Product[] = [
  // Electrics (10 products)
  {
    id: 'e1',
    name: 'Smartphone X Pro',
    price: 85000,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    description: 'Latest flagship smartphone with advanced camera and processor'
  },
  {
    id: 'e2',
    name: 'Wireless Earbuds',
    price: 12000,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
    description: 'Premium wireless earbuds with noise cancellation'
  },
  {
    id: 'e3',
    name: 'Smart Watch',
    price: 25000,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
    description: 'Health tracking smartwatch with GPS and heart rate monitor'
  },
  {
    id: 'e4',
    name: 'Laptop Gaming',
    price: 120000,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    description: 'High-performance gaming laptop with RTX graphics'
  },
  {
    id: 'e5',
    name: 'Bluetooth Speaker',
    price: 8000,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    description: 'Portable bluetooth speaker with powerful bass'
  },
  {
    id: 'e6',
    name: 'Digital Camera',
    price: 75000,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
    description: 'Professional DSLR camera with 24MP sensor'
  },
  {
    id: 'e7',
    name: 'Tablet Pro',
    price: 45000,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    description: '12-inch tablet with stylus support for creativity'
  },
  {
    id: 'e8',
    name: 'Smart TV 55"',
    price: 65000,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    description: '4K Ultra HD Smart TV with streaming apps'
  },
  {
    id: 'e9',
    name: 'Gaming Console',
    price: 55000,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
    description: 'Next-gen gaming console with 4K gaming support'
  },
  {
    id: 'e10',
    name: 'Power Bank',
    price: 3500,
    category: 'Electrics',
    image: 'https://images.unsplash.com/photo-1609592092920-b60e7b56bb2b?w=400&h=400&fit=crop',
    description: '20,000mAh portable power bank with fast charging'
  },

  // Men (10 products)
  {
    id: 'm1',
    name: 'Cotton Polo Shirt',
    price: 2500,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
    description: 'Premium cotton polo shirt in classic fit'
  },
  {
    id: 'm2',
    name: 'Denim Jeans',
    price: 4500,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    description: 'Slim fit dark wash denim jeans'
  },
  {
    id: 'm3',
    name: 'Leather Jacket',
    price: 15000,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    description: 'Genuine leather motorcycle jacket'
  },
  {
    id: 'm4',
    name: 'Formal Shirt',
    price: 3000,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
    description: 'White formal shirt for business occasions'
  },
  {
    id: 'm5',
    name: 'Sneakers',
    price: 8000,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    description: 'Comfortable running sneakers with cushioned sole'
  },
  {
    id: 'm6',
    name: 'Watch Classic',
    price: 12000,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
    description: 'Classic analog watch with leather strap'
  },
  {
    id: 'm7',
    name: 'Suit Blazer',
    price: 18000,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    description: 'Tailored business suit blazer'
  },
  {
    id: 'm8',
    name: 'Casual T-Shirt',
    price: 1500,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Comfortable cotton casual t-shirt'
  },
  {
    id: 'm9',
    name: 'Winter Sweater',
    price: 5500,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    description: 'Warm wool sweater for winter'
  },
  {
    id: 'm10',
    name: 'Leather Wallet',
    price: 2800,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    description: 'Premium leather bifold wallet'
  },

  // Women (10 products)
  {
    id: 'w1',
    name: 'Floral Summer Dress',
    price: 4500,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    description: 'Beautiful floral print summer dress'
  },
  {
    id: 'w2',
    name: 'High Heels',
    price: 6500,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    description: 'Elegant high heel shoes for formal occasions'
  },
  {
    id: 'w3',
    name: 'Handbag Luxury',
    price: 12000,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    description: 'Premium leather handbag with gold hardware'
  },
  {
    id: 'w4',
    name: 'Silk Blouse',
    price: 3800,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    description: 'Elegant silk blouse for office wear'
  },
  {
    id: 'w5',
    name: 'Denim Jacket',
    price: 5200,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=400&h=400&fit=crop',
    description: 'Trendy denim jacket for casual styling'
  },
  {
    id: 'w6',
    name: 'Yoga Pants',
    price: 2800,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1506629905045-b5d72111ae71?w=400&h=400&fit=crop',
    description: 'Comfortable stretch yoga pants'
  },
  {
    id: 'w7',
    name: 'Evening Gown',
    price: 15000,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1566479179817-c0a5bfbc7daf?w=400&h=400&fit=crop',
    description: 'Stunning evening gown for special events'
  },
  {
    id: 'w8',
    name: 'Gold Jewelry Set',
    price: 25000,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    description: 'Elegant gold necklace and earring set'
  },
  {
    id: 'w9',
    name: 'Winter Coat',
    price: 8500,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop',
    description: 'Warm winter coat with fur collar'
  },
  {
    id: 'w10',
    name: 'Athletic Shoes',
    price: 7200,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop',
    description: 'Comfortable athletic shoes for workout'
  },

  // Children (10 products)
  {
    id: 'c1',
    name: 'Kids T-Shirt Set',
    price: 1800,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5b2?w=400&h=400&fit=crop',
    description: 'Colorful t-shirt set for kids'
  },
  {
    id: 'c2',
    name: 'School Backpack',
    price: 2500,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    description: 'Durable school backpack with multiple compartments'
  },
  {
    id: 'c3',
    name: 'Kids Sneakers',
    price: 3500,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=400&h=400&fit=crop',
    description: 'Comfortable sneakers for active kids'
  },
  {
    id: 'c4',
    name: 'Princess Dress',
    price: 2800,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1564644015-67e2e78374a1?w=400&h=400&fit=crop',
    description: 'Beautiful princess dress for special occasions'
  },
  {
    id: 'c5',
    name: 'Boys Shorts Set',
    price: 2000,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5b2?w=400&h=400&fit=crop',
    description: 'Comfortable shorts and shirt set for boys'
  },
  {
    id: 'c6',
    name: 'Kids Winter Jacket',
    price: 4200,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop',
    description: 'Warm winter jacket for children'
  },
  {
    id: 'c7',
    name: 'School Uniform',
    price: 3000,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5b2?w=400&h=400&fit=crop',
    description: 'Complete school uniform set'
  },
  {
    id: 'c8',
    name: 'Kids Cap',
    price: 800,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop',
    description: 'Colorful cap for sun protection'
  },
  {
    id: 'c9',
    name: 'Baby Onesie Set',
    price: 1500,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5b2?w=400&h=400&fit=crop',
    description: 'Soft cotton onesie set for babies'
  },
  {
    id: 'c10',
    name: 'Kids Sunglasses',
    price: 1200,
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop',
    description: 'Fun sunglasses for kids'
  },

  // Fashion (10 products)
  {
    id: 'f1',
    name: 'Designer Scarf',
    price: 3500,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=400&h=400&fit=crop',
    description: 'Luxury silk scarf with unique pattern'
  },
  {
    id: 'f2',
    name: 'Fashion Sunglasses',
    price: 4500,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop',
    description: 'Trendy designer sunglasses'
  },
  {
    id: 'f3',
    name: 'Vintage Belt',
    price: 2200,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    description: 'Classic vintage leather belt'
  },
  {
    id: 'f4',
    name: 'Statement Necklace',
    price: 6800,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    description: 'Bold statement necklace for evening wear'
  },
  {
    id: 'f5',
    name: 'Designer Hat',
    price: 3200,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop',
    description: 'Stylish hat for fashion-forward look'
  },
  {
    id: 'f6',
    name: 'Silk Tie',
    price: 1800,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
    description: 'Premium silk tie for formal occasions'
  },
  {
    id: 'f7',
    name: 'Fashion Rings',
    price: 5500,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    description: 'Trendy fashion ring collection'
  },
  {
    id: 'f8',
    name: 'Leather Gloves',
    price: 2800,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    description: 'Elegant leather gloves for winter'
  },
  {
    id: 'f9',
    name: 'Bow Tie',
    price: 1500,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
    description: 'Classic bow tie for formal events'
  },
  {
    id: 'f10',
    name: 'Cufflinks Set',
    price: 4200,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    description: 'Premium cufflinks for dress shirts'
  },

  // Beauty & Personal Care (10 products)
  {
    id: 'b1',
    name: 'Skincare Set',
    price: 5500,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Complete skincare routine set'
  },
  {
    id: 'b2',
    name: 'Makeup Palette',
    price: 3800,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Professional makeup palette with 24 shades'
  },
  {
    id: 'b3',
    name: 'Hair Dryer',
    price: 4500,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Professional hair dryer with multiple settings'
  },
  {
    id: 'b4',
    name: 'Perfume Collection',
    price: 8500,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Luxury perfume collection set'
  },
  {
    id: 'b5',
    name: 'Face Cream',
    price: 2800,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Anti-aging face cream with natural ingredients'
  },
  {
    id: 'b6',
    name: 'Lipstick Set',
    price: 2200,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Matte lipstick collection in 6 shades'
  },
  {
    id: 'b7',
    name: 'Hair Styling Tools',
    price: 6200,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Complete hair styling tool set'
  },
  {
    id: 'b8',
    name: 'Body Lotion',
    price: 1800,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Moisturizing body lotion with vitamin E'
  },
  {
    id: 'b9',
    name: 'Nail Polish Set',
    price: 1500,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Colorful nail polish collection'
  },
  {
    id: 'b10',
    name: 'Shampoo & Conditioner',
    price: 2500,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    description: 'Professional shampoo and conditioner set'
  },

  // Books (10 products)
  {
    id: 'bk1',
    name: 'Fiction Novel Collection',
    price: 1500,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Bestselling fiction novel series'
  },
  {
    id: 'bk2',
    name: 'Self-Help Guide',
    price: 1200,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Life-changing self-improvement book'
  },
  {
    id: 'bk3',
    name: 'Cooking Recipe Book',
    price: 1800,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Traditional Bangladeshi recipe collection'
  },
  {
    id: 'bk4',
    name: 'Technology Guide',
    price: 2500,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Complete guide to modern technology'
  },
  {
    id: 'bk5',
    name: 'History Encyclopedia',
    price: 3200,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Comprehensive world history encyclopedia'
  },
  {
    id: 'bk6',
    name: 'Art & Design Book',
    price: 2800,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Beautiful art and design inspiration book'
  },
  {
    id: 'bk7',
    name: 'Poetry Collection',
    price: 1000,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Classic poetry from famous poets'
  },
  {
    id: 'bk8',
    name: 'Business Strategy',
    price: 2200,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Modern business strategy and leadership'
  },
  {
    id: 'bk9',
    name: 'Science Textbook',
    price: 1800,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Advanced science textbook for students'
  },
  {
    id: 'bk10',
    name: 'Philosophy Guide',
    price: 1600,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    description: 'Introduction to modern philosophy'
  },

  // Toys (10 products)
  {
    id: 't1',
    name: 'Remote Control Car',
    price: 3500,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Fast remote control racing car'
  },
  {
    id: 't2',
    name: 'Building Blocks Set',
    price: 2800,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Creative building blocks for imagination'
  },
  {
    id: 't3',
    name: 'Dolls Collection',
    price: 2200,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Beautiful dolls collection for kids'
  },
  {
    id: 't4',
    name: 'Puzzle Games',
    price: 1500,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Educational puzzle games set'
  },
  {
    id: 't5',
    name: 'Action Figures',
    price: 1800,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Superhero action figures collection'
  },
  {
    id: 't6',
    name: 'Board Game',
    price: 2500,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Family board game for entertainment'
  },
  {
    id: 't7',
    name: 'Art Supplies Kit',
    price: 2000,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Complete art supplies for creative kids'
  },
  {
    id: 't8',
    name: 'Musical Instruments',
    price: 3200,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Kid-friendly musical instruments set'
  },
  {
    id: 't9',
    name: 'Science Experiment Kit',
    price: 2800,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Educational science experiment kit'
  },
  {
    id: 't10',
    name: 'Outdoor Play Set',
    price: 4500,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    description: 'Complete outdoor play equipment'
  },

  // Sports & Outdoors (10 products)
  {
    id: 's1',
    name: 'Football',
    price: 1200,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: 'Professional quality football'
  },
  {
    id: 's2',
    name: 'Cricket Set',
    price: 3500,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: 'Complete cricket set with bat, ball, and pads'
  },
  {
    id: 's3',
    name: 'Badminton Rackets',
    price: 2800,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: 'Professional badminton racket pair'
  },
  {
    id: 's4',
    name: 'Basketball',
    price: 1500,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: 'Official size basketball'
  },
  {
    id: 's5',
    name: 'Camping Tent',
    price: 8500,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: '4-person waterproof camping tent'
  },
  {
    id: 's6',
    name: 'Yoga Mat',
    price: 1800,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: 'Non-slip yoga mat for exercise'
  },
  {
    id: 's7',
    name: 'Gym Equipment Set',
    price: 12000,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: 'Home gym equipment bundle'
  },
  {
    id: 's8',
    name: 'Bicycle',
    price: 15000,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: 'Mountain bike for outdoor adventures'
  },
  {
    id: 's9',
    name: 'Swimming Gear',
    price: 2500,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: 'Complete swimming gear set'
  },
  {
    id: 's10',
    name: 'Hiking Backpack',
    price: 4500,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
    description: 'Durable hiking backpack with multiple compartments'
  }
];
import { Product } from '@/types/product';

export const products: Product[] = [
  // Sneakers
  {
    id: '1',
    name: 'Air Jordan 1 Retro High',
    price: 170,
    image: '/placeholder.svg',
    category: 'sneakers',
    description: 'The iconic Air Jordan 1 Retro High brings classic basketball style to the streets.',
    colors: ['Black/Red', 'White/Black', 'Royal Blue'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: '2',
    name: 'Nike Air Force 1',
    price: 110,
    image: '/placeholder.svg',
    category: 'sneakers',
    description: 'The timeless classic that defined street style and basketball culture.',
    colors: ['White', 'Black', 'Grey'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: '3',
    name: 'Adidas Yeezy Boost 350',
    price: 220,
    image: '/placeholder.svg',
    category: 'sneakers',
    description: 'Revolutionary design meets unmatched comfort in this modern classic.',
    colors: ['Cream', 'Black', 'Zebra'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: '4',
    name: 'Converse Chuck Taylor All Star',
    price: 60,
    image: '/placeholder.svg',
    category: 'sneakers',
    description: 'The original basketball sneaker that became a cultural icon.',
    colors: ['Red', 'Black', 'White', 'Navy'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: '5',
    name: 'Puma RS-X',
    price: 110,
    image: '/placeholder.svg',
    category: 'sneakers',
    description: 'Bold design and retro vibes meet modern comfort technology.',
    colors: ['White/Blue', 'Black/Red', 'Grey/Yellow'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    inStock: false
  },
  {
    id: '6',
    name: 'Vans Old Skool',
    price: 65,
    image: '/placeholder.svg',
    category: 'sneakers',
    description: 'The classic skate shoe that defined a generation of street style.',
    colors: ['Black/White', 'Navy/White', 'Burgundy/White'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },

  // Accessories
  {
    id: '7',
    name: 'Luxury Leather Watch',
    price: 299,
    image: '/placeholder.svg',
    category: 'accessories',
    description: 'Elegant timepiece with genuine leather strap and Swiss movement.',
    colors: ['Brown', 'Black', 'Tan'],
    inStock: true
  },
  {
    id: '8',
    name: 'Designer Crossbody Bag',
    price: 189,
    image: '/placeholder.svg',
    category: 'accessories',
    description: 'Stylish crossbody bag perfect for everyday adventures.',
    colors: ['Black', 'Brown', 'Beige', 'Navy'],
    inStock: true
  },
  {
    id: '9',
    name: 'Classic Sunglasses',
    price: 149,
    image: '/placeholder.svg',
    category: 'accessories',
    description: 'Timeless aviator sunglasses with UV protection.',
    colors: ['Gold/Brown', 'Silver/Grey', 'Black/Black'],
    inStock: true
  },
  {
    id: '10',
    name: 'Leather Wallet',
    price: 79,
    image: '/placeholder.svg',
    category: 'accessories',
    description: 'Premium leather wallet with RFID protection.',
    colors: ['Black', 'Brown', 'Cognac'],
    inStock: true
  },
  {
    id: '11',
    name: 'Statement Necklace',
    price: 129,
    image: '/placeholder.svg',
    category: 'accessories',
    description: 'Bold statement piece to elevate any outfit.',
    colors: ['Gold', 'Silver', 'Rose Gold'],
    inStock: true
  },
  {
    id: '12',
    name: 'Canvas Tote Bag',
    price: 45,
    image: '/placeholder.svg',
    category: 'accessories',
    description: 'Eco-friendly canvas tote perfect for daily use.',
    colors: ['Natural', 'Black', 'Navy', 'Olive'],
    inStock: false
  },

  // Resin Crafts
  {
    id: '13',
    name: 'Ocean Wave Coaster Set',
    price: 89,
    image: '/placeholder.svg',
    category: 'resin-crafts',
    description: 'Handcrafted resin coasters with stunning ocean wave design.',
    colors: ['Ocean Blue', 'Turquoise', 'Deep Sea'],
    inStock: true
  },
  {
    id: '14',
    name: 'Galaxy Bookmark',
    price: 25,
    image: '/placeholder.svg',
    category: 'resin-crafts',
    description: 'Beautiful galaxy-themed bookmark with embedded glitter.',
    colors: ['Purple Galaxy', 'Blue Nebula', 'Pink Stardust'],
    inStock: true
  },
  {
    id: '15',
    name: 'Floral Table Runner',
    price: 156,
    image: '/placeholder.svg',
    category: 'resin-crafts',
    description: 'Elegant resin table runner with pressed flower design.',
    colors: ['Wildflower', 'Rose Garden', 'Lavender Field'],
    inStock: true
  },
  {
    id: '16',
    name: 'Abstract Art Keychain',
    price: 18,
    image: '/placeholder.svg',
    category: 'resin-crafts',
    description: 'Unique abstract design keychain, each one is one-of-a-kind.',
    colors: ['Rainbow', 'Sunset', 'Forest', 'Ocean'],
    inStock: true
  },
  {
    id: '17',
    name: 'Crystal Pyramid Paperweight',
    price: 67,
    image: '/placeholder.svg',
    category: 'resin-crafts',
    description: 'Mystical crystal pyramid design perfect for desk decoration.',
    colors: ['Clear Crystal', 'Amethyst', 'Emerald', 'Amber'],
    inStock: true
  },
  {
    id: '18',
    name: 'Nature Scene Cutting Board',
    price: 134,
    image: '/placeholder.svg',
    category: 'resin-crafts',
    description: 'Functional art piece combining wood and resin in forest scenery.',
    colors: ['Forest Green', 'Autumn Orange', 'Winter White'],
    inStock: false
  }
];

import { BookProps } from '../components/BookCard';

export const featuredBooks: BookProps[] = [
  {
    id: '1',
    title: 'The Silent Echo',
    author: 'Sarah Michaels',
    price: 999,
    discountedPrice: 599,
    coverImage: 'https://images.unsplash.com/photo-1613244470043-357ef26e0dcf',
    isBestseller: true
  },
  {
    id: '2',
    title: 'Echoes of Tomorrow',
    author: 'Ryan Blake',
    price: 899,
    discountedPrice: 599,
    coverImage: 'https://images.unsplash.com/photo-1567365609490-090c4da35f91',
    isNew: true
  },
  {
    id: '3',
    title: 'The Last Journey',
    author: 'Emily Harper',
    price: 799,
    discountedPrice: 449,
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646'
  },
  {
    id: '4',
    title: 'Whispers in the Dark',
    author: 'James Anderson',
    price: 699,
    coverImage: 'https://images.unsplash.com/photo-1592496001020-d31bd830f8abb'
  },
  {
    id: '5',
    title: 'Eternal Bonds',
    author: 'Priya Sharma',
    price: 799,
    discountedPrice: 399,
    coverImage: 'https://images.unsplash.com/photo-1603871952225-c2977a73254b',
    isNew: true
  },
  {
    id: '6',
    title: 'Beyond the Horizon',
    author: 'Raj Patel',
    price: 699,
    coverImage: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf'
  },
  {
    id: '7',
    title: 'Mindful Living',
    author: 'Dr. Lisa Chen',
    price: 599,
    discountedPrice: 349,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f'
  },
  {
    id: '8',
    title: 'The Productivity Code',
    author: 'Alex Williams',
    price: 899,
    discountedPrice: 549,
    coverImage: 'https://images.unsplash.com/photo-1531989417401-0f85f7e673f8',
    isBestseller: true
  },
];

export const newArrivals: BookProps[] = [
  {
    id: '9',
    title: 'The Art of Focus',
    author: 'Samantha Wright',
    price: 649,
    discountedPrice: 399,
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19',
    isNew: true
  },
  {
    id: '10',
    title: 'Hidden Patterns',
    author: 'David Kumar',
    price: 799,
    discountedPrice: 499,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
    isNew: true
  },
  {
    id: '11',
    title: 'The Mountain\'s Secret',
    author: 'Nina Roberts',
    price: 549,
    coverImage: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb',
    isNew: true
  },
  {
    id: '12',
    title: 'City of Dreams',
    author: 'Michael Torres',
    price: 849,
    discountedPrice: 499,
    coverImage: 'https://images.unsplash.com/photo-1580354085770-0d6c8e228558',
    isNew: true
  },
  {
    id: '5',
    title: 'Eternal Bonds',
    author: 'Priya Sharma',
    price: 799,
    discountedPrice: 399,
    coverImage: 'https://images.unsplash.com/photo-1603871952225-c2977a73254b',
    isNew: true
  },
  {
    id: '13',
    title: 'The Lost Symphony',
    author: 'Victor Hayes',
    price: 949,
    discountedPrice: 599,
    coverImage: 'https://images.unsplash.com/photo-1569513586164-80dc5ae4940b',
    isNew: true
  },
];

export const dealsOfTheWeek: BookProps[] = [
  {
    id: '14',
    title: 'The Lost Emblem',
    author: 'Aisha Khan',
    price: 599,
    discountedPrice: 199,
    coverImage: 'https://images.unsplash.com/photo-1611348586840-ea9872d33411',
    isBestseller: true
  },
  {
    id: '15',
    title: 'Eternal Quest',
    author: 'Mark Johnson',
    price: 499,
    discountedPrice: 249,
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19',
  },
  {
    id: '16',
    title: 'Summer Dreams',
    author: 'Hannah Singh',
    price: 699,
    discountedPrice: 299,
    coverImage: 'https://images.unsplash.com/photo-1585116938581-859adb103412',
  },
  {
    id: '17',
    title: 'The Detective\'s Diary',
    author: 'Robert Chen',
    price: 799,
    discountedPrice: 349,
    coverImage: 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38',
  },
  {
    id: '18',
    title: 'Crystal Kingdoms',
    author: 'Leila Fernandez',
    price: 899,
    discountedPrice: 299,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
  },
];

export const categories = [
  {
    id: 'education',
    name: 'Education',
    description: 'Academic and educational books for students and learners',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    itemCount: 54
  },
  {
    id: 'fiction',
    name: 'Fiction & Fantasy',
    description: 'Escape into worlds of imagination and adventure',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19',
    itemCount: 78
  },
  {
    id: 'romance',
    name: 'Romance',
    description: 'Stories of love, passion and emotional journeys',
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954',
    itemCount: 42
  },
  {
    id: 'spirituality',
    name: 'Religion & Spirituality',
    description: 'Explore faith, philosophy, and spiritual practices',
    image: 'https://images.unsplash.com/photo-1585116938581-859adb103412',
    itemCount: 35
  },
  {
    id: 'literature',
    name: 'Literature & Fiction',
    description: 'Classic and contemporary literary works',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    itemCount: 63
  },
  {
    id: 'biographies',
    name: 'Biographies & Memoirs',
    description: 'Inspiring real-life stories and personal journeys',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    itemCount: 29
  },
];

export const premiumCollections = [
  {
    id: 'classics',
    name: 'Classics',
    description: 'Timeless literary masterpieces in special editions',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    itemCount: 28
  },
  {
    id: 'limited',
    name: 'Limited Editions',
    description: 'Exclusive collector\'s editions with unique designs',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    itemCount: 15
  },
  {
    id: 'boxsets',
    name: 'Box Sets',
    description: 'Complete collections in beautiful presentation boxes',
    image: 'https://images.unsplash.com/photo-1526243741027-444d633d7365',
    itemCount: 22
  },
  {
    id: 'signed',
    name: 'Signed Copies',
    description: 'Books personally signed by your favorite authors',
    image: 'https://images.unsplash.com/photo-1551300361-f8c17cb0c210',
    itemCount: 9
  },
];

export const blogPosts = [
  {
    id: 'post1',
    title: 'Why Reading Is Important for Our Children?',
    excerpt: 'Discover how early reading habits can shape your child\'s future success.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8',
    date: 'June 15, 2023',
    author: 'Dr. Neha Patel'
  },
  {
    id: 'post2',
    title: 'Top Must-Read Books of 2023',
    excerpt: 'Our editorial team\'s picks for the absolute best books published this year.',
    image: 'https://images.unsplash.com/photo-1517770413964-df8ca61194a6',
    date: 'July 3, 2023',
    author: 'Editorial Team'
  },
  {
    id: 'post3',
    title: 'Benefits of Reading: Mind & Mood',
    excerpt: 'How reading regularly can improve your cognitive function and mental wellbeing.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    date: 'August 22, 2023',
    author: 'Dr. Michael Chen'
  }
];

export const testimonials = [
  {
    id: 'testimonial1',
    name: 'Sarah Johnson',
    location: 'Mumbai',
    comment: 'ShamsKitab has been my go-to for all book purchases. Their collection is unmatched and delivery is always prompt!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5
  },
  {
    id: 'testimonial2',
    name: 'Rahul Sharma',
    location: 'Delhi',
    comment: 'I love the monthly subscription box. It\'s like receiving a thoughtful gift from a friend who knows your reading taste perfectly.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    rating: 5
  },
  {
    id: 'testimonial3',
    name: 'Priya Mehta',
    location: 'Bangalore',
    comment: 'The premium editions are worth every rupee. Beautiful bindings and the paper quality is exceptional.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    rating: 4
  }
];


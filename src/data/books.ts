
import { BookProps } from '../components/BookCard';

export const featuredBooks: BookProps[] = [
  {
    id: '1',
    title: 'The Sealed Nectar',
    author: 'Safiur Rahman Mubarakpuri',
    price: 24.99,
    coverImage: 'https://i.imgur.com/cMsaaNn.jpg',
    isBestseller: true
  },
  {
    id: '2',
    title: 'Quran with Tajweed Rules',
    author: 'Various Scholars',
    price: 29.99,
    coverImage: 'https://i.imgur.com/3GYgCz9.jpg',
    isNew: true
  },
  {
    id: '3',
    title: 'Sahih Al-Bukhari',
    author: 'Imam Bukhari',
    price: 34.99,
    discountedPrice: 29.99,
    coverImage: 'https://i.imgur.com/6KxGS7R.jpg'
  },
  {
    id: '4',
    title: 'The Lives of the Sahaba',
    author: 'Muhammad Yusuf Kandhalvi',
    price: 27.99,
    coverImage: 'https://i.imgur.com/LmU4wAV.jpg'
  },
  {
    id: '5',
    title: 'Divine Speech',
    author: 'Nouman Ali Khan',
    price: 19.99,
    coverImage: 'https://i.imgur.com/0aA5YjQ.jpg',
    isNew: true
  },
  {
    id: '6',
    title: 'Fiqh of Worship',
    author: 'Sheikh Ibn Uthaymeen',
    price: 18.99,
    coverImage: 'https://i.imgur.com/HjPQFgp.jpg'
  },
  {
    id: '7',
    title: 'Etiquette with the Quran',
    author: 'Imam Al-Nawawi',
    price: 15.99,
    discountedPrice: 12.99,
    coverImage: 'https://i.imgur.com/Cgy9GQY.jpg'
  },
  {
    id: '8',
    title: 'The Productive Muslim',
    author: 'Mohammed Faris',
    price: 22.99,
    coverImage: 'https://i.imgur.com/r6CNPJ6.jpg',
    isBestseller: true
  },
];

export const newArrivals: BookProps[] = [
  {
    id: '9',
    title: 'Muslim Character',
    author: 'Muhammad Al-Ghazali',
    price: 16.99,
    coverImage: 'https://i.imgur.com/PSYNcXy.jpg',
    isNew: true
  },
  {
    id: '10',
    title: 'Oaths of the Prophet',
    author: 'Yasir Qadhi',
    price: 19.99,
    coverImage: 'https://i.imgur.com/7JQgsHN.jpg',
    isNew: true
  },
  {
    id: '11',
    title: 'Taqwa: Fear of Allah',
    author: 'Imam Ibn Qudamah',
    price: 14.99,
    coverImage: 'https://i.imgur.com/L3Wnb0z.jpg',
    isNew: true
  },
  {
    id: '12',
    title: 'The Book of Knowledge',
    author: 'Imam Al-Ghazali',
    price: 21.99,
    discountedPrice: 18.99,
    coverImage: 'https://i.imgur.com/nvmoTQH.jpg',
    isNew: true
  },
  {
    id: '5',
    title: 'Divine Speech',
    author: 'Nouman Ali Khan',
    price: 19.99,
    coverImage: 'https://i.imgur.com/0aA5YjQ.jpg',
    isNew: true
  },
  {
    id: '13',
    title: 'Spiritual Disease and Its Cure',
    author: 'Ibn Qayyim al-Jawziyya',
    price: 23.99,
    coverImage: 'https://i.imgur.com/2hqRMPS.jpg',
    isNew: true
  },
];

export const categories = [
  {
    id: 'quran',
    name: 'Quran & Tafsir',
    description: 'Translations and commentaries of the Holy Quran',
    image: 'https://i.imgur.com/D33i4QJ.jpg',
    itemCount: 54
  },
  {
    id: 'hadith',
    name: 'Hadith Collections',
    description: 'Collections of sayings and actions of Prophet Muhammad ﷺ',
    image: 'https://i.imgur.com/X7aMrGP.jpg',
    itemCount: 38
  },
  {
    id: 'fiqh',
    name: 'Fiqh & Islamic Law',
    description: 'Books on Islamic jurisprudence and legal rulings',
    image: 'https://i.imgur.com/KMG9Pkz.jpg',
    itemCount: 42
  },
  {
    id: 'seerah',
    name: 'Seerah & History',
    description: 'Biography of the Prophet ﷺ and Islamic history',
    image: 'https://i.imgur.com/qePHVJw.jpg',
    itemCount: 29
  },
];

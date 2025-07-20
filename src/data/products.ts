import {Product} from '../domain/models/Product';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Sony WH-1000XM4 Wireless Headphones',
    price: 24990,
    images: [
      'https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61eNN0RtfCL._SL1500_.jpg',
    ],
    tags: ['Free Delivery', 'Best ANC'],
    description:
      'Industry-leading noise cancellation headphones with immersive sound.',
  },
  {
    id: 'p2',
    name: 'Tribit XSound Go Bluetooth Speaker',
    price: 2999,
    images: [
      'https://m.media-amazon.com/images/I/81vJYF8UkvL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71OJ8Z+AFsL._SL1500_.jpg',
    ],
    tags: ['Waterproof', 'Selling Fast'],
    description:
      'Compact Bluetooth speaker with 24-hour playtime and deep bass.',
  },
  {
    id: 'p3',
    name: 'Noise ColorFit Pulse Grand Smart Watch',
    price: 1499,
    images: [
      'https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/617y+ft4uQL._SL1500_.jpg',
    ],
    tags: ['Free Delivery'],
    description: 'Smart watch with HD display and SpO2 monitoring.',
  },
];

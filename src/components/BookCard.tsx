
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';

export interface BookProps {
  id: string;
  title: string;
  author: string;
  price: number;
  discountedPrice?: number;
  coverImage: string;
  isBestseller?: boolean;
  isNew?: boolean;
  description?: string;
}

const BookCard: React.FC<BookProps> = ({ 
  id,
  title, 
  author, 
  price, 
  discountedPrice, 
  coverImage,
  isBestseller,
  isNew 
}) => {
  return (
    <Link to={`/book/${id}`}>
      <Card className="book-card group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[3/4] overflow-hidden">
          {isNew && (
            <span className="badge badge-new absolute top-1 left-1">New</span>
          )}
          {isBestseller && (
            <span className="badge badge-bestseller absolute top-1 left-1">Bestseller</span>
          )}
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </div>
        <div className="p-3">
          <h3 className="font-medium text-foreground line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{author}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-islamic-green font-bold">
              ₹{discountedPrice || price}
            </span>
            {discountedPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{price}
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BookCard;

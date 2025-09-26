import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export const StarRating = ({ rating = 5, className = "" }: StarRatingProps) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={20}
          className={`${
            i < rating
              ? "fill-gold text-gold"
              : "fill-transparent text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};
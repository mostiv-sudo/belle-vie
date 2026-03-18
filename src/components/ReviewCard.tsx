import { Star } from 'lucide-react';
import { Review } from '../data/reviews';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-gray-900">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-3">{review.text}</p>
      <p className="text-xs text-blue-600">{review.service}</p>
    </div>
  );
}

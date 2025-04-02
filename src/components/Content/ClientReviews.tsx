import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Review } from '../../types/types';

const ClientReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: uuidv4(),
      clientName: 'John Doe',
      rating: 5,
      comment: 'Excellent service!',
      date: new Date().toLocaleDateString(),
    },
    {
      id: uuidv4(),
      clientName: 'Jane Smith',
      rating: 4,
      comment: 'Good experience overall.',
      date: new Date().toLocaleDateString(),
    },
    {
      id: uuidv4(),
      clientName: 'Bob Johnson',
      rating: 3,
      comment: 'Average support, could be better.',
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [clientName, setClientName] = useState<string>('');
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>('');

  const handleAddReview = () => {
    if (!clientName.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: uuidv4(),
      clientName,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    setReviews([...reviews, newReview]);
    setClientName('');
    setRating(5);
    setComment('');
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Client Reviews</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value} Stars
            </option>
          ))}
        </select>
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          onClick={handleAddReview}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Review
        </button>
      </div>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="p-4 border border-gray-300 rounded shadow flex flex-col"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{review.clientName}</h2>
              <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
            </div>
            <p className="text-sm text-gray-500">{review.comment}</p>
            <p className="text-xs text-gray-400">{review.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientReviews;

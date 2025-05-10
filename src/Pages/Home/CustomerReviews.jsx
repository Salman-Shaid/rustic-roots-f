import React, { useState, useContext } from 'react';
import Lottie from 'react-lottie';
import reviewAnimation from '../../assets/animation/Animation - 1735143955504.json';
import { ThemeContext } from '../../providers/ThemeProvider';

const CustomerReviews = () => {
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: 'John Doe',
            review: 'The grilled salmon was absolutely amazing! The flavor was perfect, and the portion size was just right.',
        },
        {
            id: 2,
            name: 'Sarah Lee',
            review: 'I had the Pasta Primavera, and it was delicious! The sauce was creamy, and the vegetables were perfectly cooked.',
        },
        {
            id: 3,
            name: 'Michael Smith',
            review: 'The Margherita Pizza was out of this world! It was fresh, cheesy, and the crust was perfectly crispy.',
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && review) {
            setReviews([...reviews, { id: reviews.length + 1, name, review }]);
            setName('');
            setReview('');
        } else {
            alert('Please fill in both fields');
        }
    };

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: reviewAnimation,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
    };

    return (
        <div className={`container mx-auto px-4 py-10 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <h2 className='text-3xl md:text-5xl font-bold mb-8 text-center'>Our Customer Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                <div className='flex justify-center'>
                    <Lottie options={lottieOptions} height={400} width={350} />
                </div>
                <div className='space-y-6'>
                    {reviews.map((reviewItem) => (
                        <div key={reviewItem.id} className={`p-6 shadow-lg rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'}`}>
                            <p className='text-lg'>"{reviewItem.review}"</p>
                            <div className='flex items-center mt-4'>
                                <img src='https://i.ibb.co/k6PpRzN/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg' alt={reviewItem.name} className='w-10 h-10 rounded-full mr-4' />
                                <div>
                                    <p className='font-semibold'>{reviewItem.name}</p>
                                    <p className='text-sm text-gray-500'>Verified Customer</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Review Form */}
            <div className={`mt-10 p-6 shadow-lg rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'}`}>
                <h3 className='text-xl font-semibold mb-4'>Add Your Review</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-sm font-medium'>Your Name</label>
                        <input
                            type='text'
                            id='name'
                            className={`mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white focus:ring-green-500' : 'border-gray-300 focus:ring-green-500'}`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='review' className='block text-sm font-medium'>Your Review</label>
                        <textarea
                            id='review'
                            className={`mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white focus:ring-green-500' : 'border-gray-300 focus:ring-green-500'}`}
                            rows='4'
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder='Write your review'
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='bg-green-600 hover:bg-green-700 hover:rounded-full text-white py-2 px-4 rounded-md transition duration-300 w-full sm:w-auto'
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CustomerReviews;

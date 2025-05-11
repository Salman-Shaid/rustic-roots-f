import React, { useState, useEffect, useContext } from 'react';
import Lottie from 'react-lottie';
import { ThemeContext } from '../../providers/ThemeProvider';
import { authContext } from '../../providers/AuthProvider';  // Import AuthContext
import reviewAnimation from '../../assets/animation/Animation - 1735143955504.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const CustomerReviews = () => {
    const { theme } = useContext(ThemeContext);
    const { user } = useContext(authContext);  // Access user from AuthContext
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const [showLoginModal, setShowLoginModal] = useState(false);  // State to control modal visibility

    // Load reviews from database
    useEffect(() => {
        fetch('http://localhost:5000/reviews') // replace with your backend URL
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error('Error fetching reviews:', err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!review) {
            alert('You must fill out the review.');
            return;
        }

        if (!user) {
            setShowLoginModal(true);  // Show login modal if user is not logged in
            return;
        }

        const newReview = {
            name: user.displayName || 'Anonymous',  // Use user's name if available, otherwise fallback to 'Anonymous'
            email: user.email || 'user@example.com',  // Use user's email if available
            review,
            avatar: user.photoURL || 'https://i.ibb.co/k6PpRzN/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg',  // Use user's avatar if available
            date: new Date().toISOString(),
        };

        try {
            const res = await fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newReview),
            });

            if (res.ok) {
                const savedReview = await res.json();
                setReviews([...reviews, savedReview]);  // Add the saved review to the list
                setReview('');
                toast.success('Review submitted successfully!');  // Show success toast
            } else {
                alert('Failed to submit review.');
            }
        } catch (err) {
            console.error('Submit error:', err);
            alert('An error occurred while submitting.');
        }
    };

    const handleRedirectToLogin = () => {
        setShowLoginModal(false);
        // Redirect to login page, adjust the route to your actual login route
        window.location.href = '/login';
    };

    const handleCloseModal = () => {
        setShowLoginModal(false);
    };

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: reviewAnimation,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
    };

    return (
        <div className={`container rounded-xl mx-auto px-4 py-10 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <h2 className='text-3xl md:text-5xl font-bold mb-8 text-center'>Our Customer Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                <div className='flex justify-center'>
                    <Lottie options={lottieOptions} height={400} width={350} />
                </div>
                <div className='relative space-y-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
                    <div className='relative space-y-6 max-h-[400px] overflow-y-auto pl-3 pb-3 pr-3 custom-scrollbar'>
                        {[...reviews].reverse().map((reviewItem, idx) => (
                            <div
                                key={idx}
                                className={`p-6 rounded-2xl border border-transparent hover:border-green-500 shadow-md transition duration-300 ease-in-out transform hover:scale-[1.02] ${theme === 'dark'
                                    ? 'bg-gray-800 text-gray-300 hover:shadow-green-900'
                                    : 'bg-white text-gray-900 hover:shadow-green-200'
                                    }`}
                            >
                                <div className='flex items-center gap-3'>
                                    <img
                                        src={reviewItem.avatar}
                                        alt={reviewItem.name}
                                        className='w-11 h-11 rounded-full ring-2 ring-green-500 shadow-md'
                                    />
                                    <div>
                                        <p className='font-semibold text-sm'>{reviewItem.name}</p>
                                        <p className='text-xs text-gray-500'>Verified Customer</p>
                                        <p className='text-xs text-gray-400'>
                                            {new Date(reviewItem.date).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <p className='text-base italic text-gray-600 dark:text-gray-300 leading-relaxed mb-4'>
                                    “{reviewItem.review}”
                                </p>

                            </div>
                        ))}
                    </div>


                </div>

            </div>

            {/* Review Form */}
            <div className={`mt-10 p-6 mx-8 mb-2 shadow-lg rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'}`}>
                <h3 className='text-xl font-semibold mb-4'>Add Your Review</h3>
                <form onSubmit={handleSubmit}>
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
                        className='px-6 py-3 rounded-full text-white font-semibold shadow-lg bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto'
                    >
                        Submit Review
                    </button>

                </form>
            </div>

            {/* Toast Container */}
            <ToastContainer />

            {/* Modal for Login */}
            {showLoginModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 ">
                    <div className={` p-8 rounded-lg shadow-xl max-w-md w-full transform transition-all scale-95 hover:scale-100 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}>
                        <h2 className="text-2xl font-semibold  mb-4">Greetings, Dear User!</h2>
                        <h3 className="text-lg font-medium  mb-6">To submit a review, please log in to your account first.</h3>

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-200 text-gray-700 hover:bg-gray-300 py-2 px-6 rounded-md text-sm font-semibold transition duration-300 transform hover:scale-105"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleRedirectToLogin}
                                className="bg-green-600 text-white hover:bg-green-700 py-2 px-6 rounded-md text-sm font-semibold transition duration-300 transform hover:scale-105"
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default CustomerReviews;

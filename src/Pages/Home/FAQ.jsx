import React from 'react';
import imageFaq from '../../assets/Faq/FAQ.json';
import Lottie from 'react-lottie';

const FAQ = () => {
    const options = {
        loop: true, 
        autoplay: true, 
        animationData: imageFaq, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice', 
        },
    };

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* FAQ Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-medium">
                                What is Rustic Roots?
                            </div>
                            <div className="collapse-content">
                                <p className="text-gray-600">
                                    Rustic Roots is an online food ordering platform where you can explore new and delicious meals, browse our food gallery, and order easily.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-medium">
                                How can I place an order?
                            </div>
                            <div className="collapse-content">
                                <p className="text-gray-600">
                                    Simply browse the menu, select your favorite dishes, and add them to your cart. Once you're ready, proceed to checkout and complete your order.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-medium">
                                Can I customize my order?
                            </div>
                            <div className="collapse-content">
                                <p className="text-gray-600">
                                    Yes! You can customize orders by adding special instructions, selecting toppings, or choosing specific portion sizes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation Section */}
                <div className="flex justify-center">
                    <Lottie options={options} height={350} width={350} className="w-full max-w-md" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;

import React from 'react';

const benefits = [
    {
        title: 'Support Local Youth',
        description: 'Help young players develop their skills and confidence.',
        icon: '??',
    },
    {
        title: 'Business Exposure',
        description: 'Get your business noticed by local families.',
        icon: '??',
    },
    {
        title: 'Community Impact',
        description: 'Make a real difference in your local community.',
        icon: '??',
    },
];

const BecomeSponsorSection = () => {
    return (
        <section className="bg-white py-12 px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Become a Sponsor</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                Sponsoring Farringdon Detached U12s means more than logos on kits — it’s about empowering young players, building community, and connecting with local families.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {benefits.map((benefit, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-100 rounded-lg p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <p className="text-gray-700 mb-4 font-medium">Interested in sponsoring?</p>
                <a
                    href="mailto:coach.dave@farringdondetached.com"
                    className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
                >
                    Contact Us
                </a>
                <p className="text-sm text-gray-500 mt-2">Or call us at (0191) 234-5678</p>
            </div>
        </section>
    );
};

export default BecomeSponsorSection;
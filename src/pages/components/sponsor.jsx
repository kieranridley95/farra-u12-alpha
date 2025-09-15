import React from 'react';

const sponsors = [
    {
        name: 'Elite Fitness Gym',
        category: 'Equipment Sponsor',
        description: 'State-of-the-art fitness facility helping young athletes stay fit and healthy.',
        location: 'Retail Park, Sunderland',
        website: 'https://elitefitness.co.uk',
    },
    {
        name: 'Murphy’s Sports Shop',
        category: 'Equipment Sponsor',
        description: 'Family-run sports retailer providing quality football equipment at affordable prices.',
        location: 'Sunderland City Centre',
        website: 'https://murphyssports.co.uk',
    },
    {
        name: 'Sunderland Building Supplies',
        category: 'Main Sponsor',
        description: 'Local building materials supplier supporting grassroots football in Sunderland.',
        location: 'Sunderland City Centre',
        website: 'https://sunderlandbuildingsupplies.co.uk',
    },
];

const SponsorSection = () => {
    return (
        <section className="bg-gray-100 py-12 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Thank You to Our Sponsors</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                The support of our sponsors helps provide training equipment, kits, and opportunities for our young players.
                We encourage families to support these incredible local Sunderland businesses.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Featured Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sponsors.map((sponsor, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-left">
                        <span className="text-sm font-semibold text-red-600 uppercase">Featured Sponsor</span>
                        <h4 className="text-xl font-bold mt-2 mb-1 text-gray-800">{sponsor.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">{sponsor.category}</p>
                        <p className="text-gray-700 mb-4">{sponsor.description}</p>
                        <p className="text-sm text-gray-600 italic mb-4">{sponsor.location}</p>
                        <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                        >
                            Visit Website
                        </a>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default SponsorSection;


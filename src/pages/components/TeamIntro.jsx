import React from 'react';
import playersIcon from './img/player-icon.png';
import goalIcon from './img/goal-icon.png';
import leagueIcon from './img/league-icon.png';
import callenderIcon from './img/callender-icon.png';


const TeamIntro = () => {
    const stats = [
        { label: 'Players', value: 13, icon: playersIcon },
        { label: 'Total Goals', value: 1, icon: goalIcon },
        { label: 'League', value: 11, icon: leagueIcon },
        { label: 'Season', value: "2025 - 2026", icon: callenderIcon },
    ];

    return (
        <section className="bg-grey text-white py-10 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h1>
                <p className="text-md md:text-lg text-white-700 mb-8">
                    Our talented squad of young footballers representing <strong>Farringdon Detached</strong> in <strong>RFYL Division 9</strong>.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white text-red-500 rounded-lg p-4 shadow-md flex flex-col items-center justify-center"
                        >
                            <img
                                src={stat.icon}
                                alt={`${stat.label} icon`}
                                className="w-10 h-10 mb-2"
                            />
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamIntro;
import React from 'react';

const formation = {
    Goalkeepers: [1],
    Defenders: [3, 5, 8, 13],
    Midfielders: [6, 8, 12, 15],
    Forwards: [9, 10, 14],
};

const TeamFormation = () => {
    return (
        <div className="bg-green-700 text-white p-6 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Team Formation</h2>
            <div className="grid gap-6">
                {Object.entries(formation).map(([role, numbers]) => (
                    <div key={role}>
                        <h3 className="text-xl font-semibold mb-2">{role}</h3>
                        <div className="flex flex-wrap gap-3">
                            {numbers.map((num, idx) => (
                                <div
                                    key={idx}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-red-600 font-bold shadow-md"
                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamFormation;

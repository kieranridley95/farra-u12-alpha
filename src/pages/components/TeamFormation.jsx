import React, { useState } from 'react';
import finleyPhoto from './img/finley.jpg';

const statLabels = {
    goals: '⚽ Goals',
    assist: '🎯 Assists',
    saves: '🧤 Saves',
    cleansheets: '🧼 Cleansheets',
    motm: '⭐ Man of the Match',
    parentsPlayer: '👨‍👩‍👧‍👦 Parents’ Player',
}

const defaultStatsByPosition = {
    Goalkeeper: {
        cleansheets: 0,
        saves: 0,
        motm: 0,
        parentsPlayer: 0,
    },
    Defender: {
        tackles: 0,
        interceptions: 0,
        blocks: 0,
        goals: 0,
        assist: 0,
        motm: 0,
        parentsPlayer: 0,
    },
    Midfielder: {
        assists: 0,
        keyPasses: 0,
        recoveries: 0,
        motm: 0,
        parentsPlayer: 0,
    },
    Forward: {
        goals: 0,
        shotsOnTarget: 0,
        dribbles: 0,
        motm: 0,
        parentsPlayer: 0,
    },
};

const formation = {
    Goalkeepers: [
        {
            number: 1,
            name: 'Finley',
            position: 'Goalkeeper',
            bio: 'Quick reflexes and strong leadership from the back.',
            photo: finleyPhoto,
            playerstat: {
                assist: 0,
                goals: 0,
                cleansheets: 1,
                saves: 18,
                motm: 0,
                parentsPlayer: 0,
            },
            awards: [],
        },
    ],
    Defenders: [
        {
            number: 8,
            name: 'Bradley',
            position: 'Right Back',
            bio: 'Rapid and very defensive minded player with great composure on the ball.',
            photo: finleyPhoto,
            playerstat: {
                goals: 10,
                assist: 10,
                motm: 0,
                parentsPlayer: 0,
            },
            awards: [],
        },
        {
            number: 4,
            name: 'Keaton',
            position: 'Right Back',
            bio: 'Strong and very defensive minded player with great vision.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Defender },
            awards: [],
        },
        {
            number: 5,
            name: 'Freddie',
            position: 'Center Back / Defensive Midfielder',
            bio: 'Strong, aerial dominant and very defensive minded player with great power.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Defender },
            awards: [],
        },
        {
            number: 11,
            name: 'Oliver',
            position: 'Left Back',
            bio: 'Energetic and reliable defender with great positioning.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Defender },
            awards: [],
        },
        {
            number: 6,
            name: 'Lucas',
            position: 'Center Back',
            bio: 'Disciplined and composed defender with strong tackling.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Defender },
            awards: [],
        },
    ],
    Midfielders: [
        {
            number: 7,
            name: 'David',
            position: 'Central Midfielder',
            bio: 'Creative playmaker with excellent passing range.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Midfielder },
            awards: [],
        },
        {
            number: 3,
            name: 'Jensen',
            position: 'Box-to-Box Midfielder',
            bio: 'Relentless engine and great transitional play.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Midfielder },
            awards: [],
        },
        {
            number: 16,
            name: 'Jenson',
            position: 'Attacking Midfielder',
            bio: 'Sharp vision and confident on the ball.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Midfielder },
            awards: [],
        },
        {
            number: 12,
            name: 'Joseph',
            position: 'Holding Midfielder',
            bio: 'Disciplined and tactically aware with strong interceptions.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Midfielder },
            awards: [],
        },
    ],
    Forwards: [
        {
            number: 9,
            name: 'Dawson',
            position: 'Striker',
            bio: 'Clinical finisher with great movement off the ball.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Forward },
            awards: [],
        },
        {
            number: 10,
            name: 'Tyler',
            position: 'Winger',
            bio: 'Explosive pace and confident dribbler.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Forward },
            awards: [],
        },
        {
            number: 18,
            name: 'Sonny',
            position: 'Forward',
            bio: 'Energetic and fearless attacker with a great eye for goal.',
            photo: finleyPhoto,
            playerstat: { ...defaultStatsByPosition.Forward },
            awards: [],
        },
    ],
};


const PlayerModal = ({ player, onClose }) => {
    if (!player) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-lg max-w-sm w-full relative shadow-lg">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Player Photo */}
                <img
                    src={player.photo}
                    alt={player.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md border-4 border-green-500"
                />

                {/* Name and Position */}
                <h2 className="text-2xl font-bold text-center">{player.name}</h2>
                <p className="text-sm text-gray-600 text-center mb-2">
                    #{player.number} — {player.position}
                </p>

                {/* Bio */}
                {player.bio && (
                    <p className="text-sm text-center italic mb-4">{player.bio}</p>
                )}

                {/* Performance Stats */}
                {player.playerstat && (
                    <div className="bg-neutral-100 p-3 rounded mb-4">
                        <h3 className="text-md font-semibold mb-2 text-gray-800">Performance Stats</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            {Object.entries(statLabels).map(([key, label]) =>
                                player.playerstat?.[key] !== undefined ? (
                                    <li key={key}>{label}: {player.playerstat[key]}</li>
                                ) : null
                            )}
                        </ul>
                    </div>
                )}

                {/* Accolades */}
                {player.awards && player.awards.length > 0 && (
                    <div className="bg-yellow-100 p-3 rounded">
                        <h3 className="text-md font-semibold mb-2 text-yellow-800">Accolades</h3>
                        <ul className="space-y-1 text-sm text-yellow-700">
                            {player.awards.map((award, index) => (
                                <li key={index}>🏅 {award}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

const TeamFormation = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    return (
        <div className="bg-green-700 text-white p-6 rounded-lg max-w-6xl mx-auto text-center relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-6">Team Formation</h2>

            {/* Pitch Outline */}
            <div className="absolute inset-0 border-4 border-white rounded-lg pointer-events-none z-0">
                <div className="absolute top-1/2 left-0 w-full border-t-2 border-white"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full w-24 h-24"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-2 border-white w-32 h-16"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 border-white w-32 h-16"></div>
            </div>

            {/* Team Layout */}
            <div className="flex flex-col items-center gap-6 relative z-10">
                {Object.entries(formation).map(([role, players]) => (
                    <div key={role}>
                        <h3 className="text-xl font-semibold mb-2">{role}</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {players.map((player, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={() => setSelectedPlayer(player)}
                                >
                                  

                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-red-600 text-red-600 hover:text-white font-bold shadow-md transition-colors duration-200">
                                        {player.number}
                                    </div>

                                    <span className="mt-1 text-sm text-white">{player.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
        </div>
    );
};

export default TeamFormation;
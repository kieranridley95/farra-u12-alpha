import { useState } from 'react';

export default function NewsGrid() {
    const [selectedImage, setSelectedImage] = useState(null);

    const totalImages = 170;
    const images = Array.from({ length: totalImages }, (_, i) => ({
        title: `Matchday Photo ${i + 1}`,
        image: `/farra-u12-alpha/images/westrainton-away/photo(${i + 1}).jpg`,
    }));

    return (
        <section className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Westraiton Away – Full Gallery</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="group relative aspect-square overflow-hidden border border-white/10 bg-white/5 shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                        onClick={() => setSelectedImage(img.image)}
                    >
                        <img
                            src={img.image}
                            alt={img.title}
                            className="w-full h-full object-cover hover:brightness-90 transition"
                            onError={(e) => { e.target.src = '/img/gallery/fallback.jpg'; }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2">
                            <p className="text-white text-xs font-medium">{img.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Viewer */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Full size"
                        className="max-w-full max-h-full shadow-2xl"
                    />
                    <button
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    );
}
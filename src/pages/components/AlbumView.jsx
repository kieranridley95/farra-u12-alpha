import { useParams, Link } from 'react-router-dom';
import { albums } from '../data/albums';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function AlbumView() {
    const { albumId } = useParams();
    const album = albums.find(a => a.id === albumId);

    if (!album) {
        return (
            <div className="p-6 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Album not found</h2>
                <Link to="/gallery" className="text-red-500 underline hover:text-red-300">
                    ← Back to Gallery
                </Link>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-white">{album.title}</h1>
                <Link to="/gallery" className="text-red-500 underline hover:text-red-300">
                    ← Back to Gallery
                </Link>
            </div>

            <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
                {album.photos.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Photo ${index + 1}`}
                            loading="lazy"
                            onError={(e) => {
                                console.error('Failed to load:', e.target.src);
                                e.target.src = '/farra-u12-alpha/images/fallback.jpg';
                            }}
                            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
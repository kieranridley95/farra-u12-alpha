import { Link } from 'react-router-dom';
import { albums } from '../data/albums';

export default function GalleryHome() {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">📸 Photo Gallery</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {albums.map(album => (
                    <Link key={album.id} to={`/gallery/${album.id}`} className="group relative">
                        <div className="overflow-hidden rounded-lg shadow-lg bg-neutral-900">
                            <img
                                src={album.cover}
                                alt={album.title}
                                onError={(e) => { e.target.src = '/images/fallback.jpg'; }}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4 bg-white">
                                <h2 className="text-lg font-semibold text-neutral-900">{album.title}</h2>
                            </div>

                            <img src="/farra-u12-alpha/images/westrainton-away/photo1(2).jpg" alt="Test" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
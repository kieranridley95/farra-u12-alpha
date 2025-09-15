function generatePhotos(folderName, count) {
    return Array.from({ length: count }, (_, i) => `/farra-u12-alpha/images/${folderName}/photo(${i + 1}).jpg`);
}

export const albums = [
    {
        id: 'matchday-1',
        title: 'Matchday vs Redhill',
        cover: '/farra-u12-alpha/images/westrainton-away/photo(1).jpg',
        photos: generatePhotos('westrainton-away', 14),
    },
    {
        id: 'training-sept',
        title: 'September Training',
        cover: '/farra-u12-alpha/images/cover.jpg',
        photos: [
            '/farra-u12-alpha/images/cover.jpg',
            '/farra-u12-alpha/images/cover.jpg',
        ],
    },
];
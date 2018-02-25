export const THEME_COLOR = '#FF5733';
export const NAVIGATION_ICON_SIZE = 28;


// sample data
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const RANDOM_IMG_ROOT_URL = 'https://picsum.photos/300/200/';

const randomImg = () => {
    return `${RANDOM_IMG_ROOT_URL}?image=${getRandomInt(50)}`
};

export const HUBS_ON_MAP_DATA = [
    {
        id: '0',
        topic: 'Awesome food truck',
        tags: ['food'],
        amount: 5,
        image: {uri: randomImg()},
        latlng: {
            longitude: -73.953,
            latitude: 40.77
        },
    },
    {
        id: '1',
        topic: 'WCS party tonight',
        tags: ['party', 'fun'],
        amount: 13 ,
        image: {uri: randomImg()},
        latlng: {
            longitude: -73.953,
            latitude: 40.80
        },
    },
    {
        id: '2',
        topic: 'Apple store discussion',
        tags: ['tech', 'general'],
        amount: 24 ,
        image: {uri: randomImg()},
        latlng: {
            longitude: -73.950,
            latitude: 40.75
        },
    },
];



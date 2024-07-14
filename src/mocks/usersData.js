import backgroundImg from './media/background/user-background.jpg';

const numbersGenerate = (minNum = 5, maxNum = 85, decimal = 1) =>
  (Math.random() * (maxNum - minNum) + minNum).toFixed(decimal);

const randomData = () => {
  const volume = numbersGenerate();

  return {
    change: `+${numbersGenerate(1, 9)}%`,
    followers: numbersGenerate(100, 5000, 0),
    nftSold: numbersGenerate(100, 800, 0),
    volume,
    volumeWithUnit: `${volume} ETH`,
  };
};

const commonData = {
  background: {
    alt: 'background',
    src: backgroundImg,
  },
  userBio: 'The internet friendliest designer kid.',
};

export const usersData = [
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Jaydon Ekstrom Bothman',
      src: '/src/mocks/media/users/user-1.png',
    },
    userId: 1,
    userName: 'Jaydon-Ekstrom-Bothman',
    name: 'Jaydon Ekstrom Bothman',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Ruben Carder',
      src: '/src/mocks/media/users/user-2.png',
    },
    userId: 2,
    userName: 'Ruben-Carder',
    name: 'Ruben Carder',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Alfredo Septimus',
      src: '/src/mocks/media/users/user-3.png',
    },
    userId: 3,
    userName: 'Alfredo-Septimus',
    name: 'Alfredo Septimus',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Davis Franci',
      src: '/src/mocks/media/users/user-4.png',
    },
    userId: 4,
    userName: 'Davis-Franci',
    name: 'Davis Franci',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Livia Rosser',
      src: '/src/mocks/media/users/user-5.png',
    },
    userId: 5,
    userName: 'Livia-Rosser',
    name: 'Livia Rosser',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Kianna Donin',
      src: '/src/mocks/media/users/user-6.png',
    },
    userId: 6,
    userName: 'Kianna-Donin',
    name: 'Kianna Donin',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Phillip Lipshutz',
      src: '/src/mocks/media/users/user-7.png',
    },
    userId: 7,
    userName: 'Phillip-Lipshutz',
    name: 'Phillip Lipshutz',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Maria Rosser',
      src: '/src/mocks/media/users/user-8.png',
    },
    userId: 8,
    userName: 'Maria-Rosser',
    name: 'Maria Rosser',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Kianna Stanton',
      src: '/src/mocks/media/users/user-9.png',
    },
    userId: 9,
    userName: 'Kianna-Stanton',
    name: 'Kianna Stanton',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Angel Lubin',
      src: '/src/mocks/media/users/user-10.png',
    },
    userId: 10,
    userName: 'Angel-Lubin',
    name: 'Angel Lubin',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Allison Torff',
      src: '/src/mocks/media/users/user-11.png',
    },
    userId: 11,
    userName: 'Allison-Torff',
    name: 'Allison Torff',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Davis Workman',
      src: '/src/mocks/media/users/user-12.png',
    },
    userId: 12,
    userName: 'Davis-Workman',
    name: 'Davis Workman',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Randy Carder',
      src: '/src/mocks/media/users/user-13.png',
    },
    userId: 13,
    userName: 'Randy-Carder',
    name: 'Randy Carder',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Lydia Culhane',
      src: '/src/mocks/media/users/user-14.png',
    },
    userId: 14,
    userName: 'Lydia-Culhane',
    name: 'Lydia Culhane',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Rayna Bator',
      src: '/src/mocks/media/users/user-15.png',
    },
    userId: 15,
    userName: 'Rayna-Bator',
    name: 'Rayna Bator',
  },
  {
    ...randomData(),
    ...commonData,
    image: {
      alt: 'Jocelyn Westervelt',
      src: '/src/mocks/media/users/user-9.png',
    },
    userId: 16,
    userName: 'Jocelyn-Westervelt',
    name: 'Jocelyn Westervelt',
  },
];

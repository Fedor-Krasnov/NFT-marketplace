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
    userName: 'Jocelyn-Westervelt',
    name: 'Jocelyn Westervelt',
  },
];

const numbersGenerate = (minNum = 5, maxNum = 85, decimal = 1) =>
  (Math.random() * (maxNum - minNum) + minNum).toFixed(decimal);

const randomData = () => ({
  change: `+${numbersGenerate(1, 9)}%`,
  nftSold: numbersGenerate(100, 800, 0),
  volume: `${numbersGenerate()} ETH`,
});

export const usersData = [
  {
    ...randomData(),
    image: {
      alt: 'Jaydon Ekstrom Bothman',
      src: '../src/mocks/media/users/user-1.png',
    },
    userName: 'Jaydon-Ekstrom-Bothman',
    name: 'Jaydon Ekstrom Bothman',
  },
  {
    ...randomData(),
    image: {
      alt: 'Ruben Carder',
      src: './src/mocks/media/users/user-2.png',
    },
    userName: 'Ruben-Carder',
    name: 'Ruben Carder',
  },
  {
    ...randomData(),
    image: {
      alt: 'Alfredo Septimus',
      src: './src/mocks/media/users/user-3.png',
    },
    userName: 'Alfredo-Septimus',
    user: 'Alfredo Septimus',
  },
  {
    ...randomData(),
    image: {
      alt: 'Davis Franci',
      src: './src/mocks/media/users/user-4.png',
    },
    userName: 'Davis-Franci',
    user: 'Davis Franci',
  },
  {
    ...randomData(),
    image: {
      alt: 'Livia Rosser',
      src: './src/mocks/media/users/user-5.png',
    },
    userName: 'Livia-Rosser',
    user: 'Livia Rosser',
  },
  {
    ...randomData(),
    image: {
      alt: 'Kianna Donin',
      src: './src/mocks/media/users/user-6.png',
    },
    userName: 'Kianna-Donin',
    user: 'Kianna Donin',
  },
  {
    ...randomData(),
    image: {
      alt: 'Phillip Lipshutz',
      src: './src/mocks/media/users/user-7.png',
    },
    userName: 'Phillip-Lipshutz',
    user: 'Phillip Lipshutz',
  },
  {
    ...randomData(),
    image: {
      alt: 'Maria Rosser',
      src: './src/mocks/media/users/user-8.png',
    },
    userName: 'Maria-Rosser',
    user: 'Maria Rosser',
  },
  {
    ...randomData(),
    image: {
      alt: 'Kianna Stanton',
      src: './src/mocks/media/users/user-9.png',
    },
    userName: 'Kianna-Stanton',
    user: 'Kianna Stanton',
  },
  {
    ...randomData(),
    image: {
      alt: 'Angel Lubin',
      src: './src/mocks/media/users/user-10.png',
    },
    userName: 'Angel-Lubin',
    user: 'Angel Lubin',
  },
  {
    ...randomData(),
    image: {
      alt: 'Allison Torff',
      src: './src/mocks/media/users/user-11.png',
    },
    userName: 'Allison-Torff',
    user: 'Allison Torff',
  },
  {
    ...randomData(),
    image: {
      alt: 'Davis Workman',
      src: './src/mocks/media/users/user-12.png',
    },
    userName: 'Davis-Workman',
    user: 'Davis Workman',
  },
  {
    ...randomData(),
    image: {
      alt: 'Randy Carder',
      src: './src/mocks/media/users/user-13.png',
    },
    userName: 'Randy-Carder',
    user: 'Randy Carder',
  },
  {
    ...randomData(),
    image: {
      alt: 'Lydia Culhane',
      src: './src/mocks/media/users/user-14.png',
    },
    userName: 'Lydia-Culhane',
    user: 'Lydia Culhane',
  },
  {
    ...randomData(),
    image: {
      alt: 'Rayna Bator',
      src: './src/mocks/media/users/user-15.png',
    },
    userName: 'Rayna-Bator',
    user: 'Rayna Bator',
  },
  {
    ...randomData(),
    image: {
      alt: 'Jocelyn Westervelt',
      src: './src/mocks/media/users/user-9.png',
    },
    userName: 'Jocelyn-Westervelt',
    user: 'Jocelyn Westervelt',
  },
];

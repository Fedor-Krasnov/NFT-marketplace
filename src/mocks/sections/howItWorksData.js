export const howItWorksData = {
  title: 'How it works',
  description: 'Find out how to get started',
  offerCards: [
    {
      link: '/connect-wallet',
      image: {
        alt: 'Setup Your wallet',
        src: 'src/mocks/media/nft-cards/explanatory-card-1.png',
      },
      offer: 'Setup Your wallet',
      offerDescription:
        'Set up&nbsp;your wallet of&nbsp;choice. Connect it&nbsp;to&nbsp;the Animarket by&nbsp;' +
        'clicking the wallet icon in&nbsp;the top right corner.',
    },
    {
      link: '/authorization',
      image: {
        alt: 'Create Collection',
        src: 'src/mocks/media/nft-cards/explanatory-card-2.png',
      },
      offer: 'Create Collection',
      offerDescription:
        'Upload your work and setup your collection. Add a&nbsp;description, social links and floor price.',
    },
    {
      link: '/browse-marketplace',
      image: {
        alt: 'Start Earning',
        src: 'src/mocks/media/nft-cards/explanatory-card-3.png',
      },
      offer: 'Start Earning',
      offerDescription:
        'Choose between auctions and fixed-price listings. Start earning by&nbsp;selling your NFTs' +
        ' or&nbsp;trading others.',
    },
  ],
};

import { IconCode } from '../../components/units';
import backgroundImg from '../media/background/nft-background.jpg';
import { nftCardsData } from '../nftCardsData';

export const NFTAuctionPageData = {
  background: {
    alt: 'nft-background',
    src: backgroundImg,
  },
  titleAuction: 'The Orbitians',
  descriptionAuction: 'Minted on Sep 30, 2022',
  titleLink: 'More from this artist',
  image: {
    alt: 'user',
    src: 'src/mocks/media/users/user-9.png',
  },
  username: 'Orbitian',
  description: `
    <p>The Orbitians is&nbsp;a&nbsp;collection of&nbsp;10,000 unique NFTs on&nbsp;the Ethereum blockchain.</p>
    <p>There are all sorts of&nbsp;beings in&nbsp;the NFT Universe. The most advanced and friendly of&nbsp;the
    bunch are Orbitians. They live in&nbsp;a&nbsp;metal space machines, high up&nbsp;in&nbsp;the sky and only have
    one foot on&nbsp;Earth.</p>
    <p>These Orbitians are a&nbsp;peaceful race, but they have been at&nbsp;war with a&nbsp;group of&nbsp;invaders for
    many generations. The invaders are called Upside-Downs, because of&nbsp;their inverted bodies that live on&nbsp;the
    ground, yet do&nbsp;not know any other way to&nbsp;be. Upside-Downs believe that they will be&nbsp;able to&nbsp;win
    this war if&nbsp;they could only get an&nbsp;eye into Orbitian territory, so&nbsp;they&rsquo;ve taken to&nbsp;make
    human beings their target.</p>
  `,
  moreNFT: {
    nftCards: nftCardsData,
    title: 'More from this artist',
    buttonLink: '',
    buttonTitle: 'Go To Artist Page',
    buttonIcon: IconCode.arrowToTheRight,
  },
  tags: ['Animation', 'illustration', 'Moon', 'Sun'],
  details: [
    {
      link: '#',
      title: 'View on Etherscan',
    },
    {
      link: '#',
      title: 'View Original',
    },
  ],
};

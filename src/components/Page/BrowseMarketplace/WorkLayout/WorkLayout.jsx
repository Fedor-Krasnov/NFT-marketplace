import React from 'react';
import './WorkLayout.scss';
import { browseMarketplace } from '../../../../mocks/Page/browseMarketplace.js';

const WorkLayout = () => {
  const { image } = browseMarketplace;

  return (
    <div className="work-list">
      <div className="work-list__container">
        <ul>
          <li>
            <div className="nft-card">
              <div className="nft-card__img">{/* <img alt={image.alt} src={image.src} />*/}</div>
              <div className="nft-card__details nft-details">
                <h3>Magic Mushroom 0325</h3>
                <div className="nft-details__user">
                  <a className="nft-details__user-avatar" href="../../../pages/user-profile.html">
                    <img alt="avatar" src="/src-old/media/users/user-7.svg" />
                  </a>
                  <a className="nft-details__user-name" href="../../../pages/user-profile.html">
                    <span>Shroomie</span>
                  </a>
                </div>
                <div className="nft-details__price">
                  <dl>
                    <dt>Price</dt>
                    <dd>4.73 ETH</dd>
                  </dl>
                  <dl>
                    <dt>Highest Bid</dt>
                    <dd>8.69 wETH</dd>
                  </dl>
                </div>
              </div>
            </div>
          </li>
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/robot-1.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Happy Robot 032</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-12.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>BeKind2Robots</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>9.43 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>2.74 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/robot-2.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Happy Robot 024</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-15.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>BeKind2Robots</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>6.51 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>4.85 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/bear.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Designer Bear</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-6.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>Mr. Fox</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>5.82 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>6.64 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/dog-1.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Colorful Dog 0356</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-15.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>Keepitreal</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>1.72 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>3.78 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/robot-3.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Dancing Robot 0312</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-8.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>Robotica</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>7.15 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>4.91 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/woomen.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Cherry Blossom Girl 035</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-17.png" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>MoonDancer</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>1.87 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>7.61 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/nlo-1.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Space Travel</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-10.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>NebulaKid</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>4.71 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>3.32 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/nlo-2.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Sunset Dimension</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-13.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>Animakid</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>8.51 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>6.15 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/robot-4.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Desert Walk</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-19.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>Catch 22</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>7.54 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>4.68 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/gorilla.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>IceCream Ape 0324</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-20.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>Ice Ape Club</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>2.63 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>5.64 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
          {/* <li>*/}
          {/*  <div className="nft-card">*/}
          {/*    <div className="nft-card__img">*/}
          {/*      <img alt="nft-card" src="../../media/pages/nft-card/dog-2.svg" />*/}
          {/*    </div>*/}
          {/*    <div className="nft-card__details nft-details">*/}
          {/*      <h3>Colorful Dog 0344</h3>*/}
          {/*      <div className="nft-details__user">*/}
          {/*        <a className="nft-details__user-avatar" href="">*/}
          {/*          <img alt="avatar" src="/src-old/media/users/user-18.svg" />*/}
          {/*        </a>*/}
          {/*        <a className="nft-details__user-name" href="">*/}
          {/*          <span>PuppyPower</span>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <div className="nft-details__price">*/}
          {/*        <dl>*/}
          {/*          <dt>Price</dt>*/}
          {/*          <dd>2.95 ETH</dd>*/}
          {/*        </dl>*/}
          {/*        <dl>*/}
          {/*          <dt>Highest Bid</dt>*/}
          {/*          <dd>1.83 wETH</dd>*/}
          {/*        </dl>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* </li>*/}
        </ul>
      </div>
    </div>
  );
};

export { WorkLayout };

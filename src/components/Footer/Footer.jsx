import React from 'react';
import './Footer.scss';
import { HeaderMenu } from '../Header/HeaderMenu/index.js';
import { Logo } from '../units';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__copyright">
          <Logo />
          <p className="footer__down__title">NFT marketplace&nbsp;UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <div className="footer__contacts">
            <a href="https://discord.com/" className="contact">
              <img src="../src-old/media/icons/footer/discordlogo.png" alt="discordlogo" className="contact__img" />
            </a>
            <a href="https://www.youtube.com/channel/UC3Q7g8MvNPqKMiVj5ltsYfQ">
              <img src="../src-old/media/icons/footer/youtubelogo.png" alt="youtubelogo" className="contact__img" />
            </a>
            <a href="/src-old/media/icons/footer/twitter-ban.jfif">
              <img src="../src-old/media/icons/footer/twitterlogo.png" alt="twitterlogo" className="contact__img" />
            </a>
            <a href="https://akket.com/wp-content/uploads/2022/03/Servis-nedostupen.-Instagram-navsegda-zablokirovali-v-Rossii-1.jpg">
              <img src="../src-old/media/icons/footer/instagramlogo.png" alt="instagramlogo" className="contact__img" />
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <HeaderMenu className="footer__header-menu" isGridRows />
        </div>
        <div className="footer__weekly_digest">
          <h4 className="weekly_digest__title">Join our weekly digest</h4>
          <p>Get exclusive promotions &amp;&nbsp;updates straight to&nbsp;your inbox.</p>
          <label className="subscription">
            <input placeholder="Enter your email here" className="input__email" />
            <div>
              <a className="button">Subscribe</a>
            </div>
          </label>
        </div>
      </div>
      <div className="footer__was_done">
        <p>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div>
  </footer>
);

export { Footer };

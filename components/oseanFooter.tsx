import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
export const OseanFooter :React.FC = () =>{
    return(
    
<footer
  className="footer static-bottom footer-light footer-custom-class"
  data-midnight="default"
>
  <div className="container">
    <div className="footer-wrapper mx-auto text-center">
      <div
        className="footer-title mb-5 animated"
        data-animation="fadeInUpShorter"
        data-animation-delay="0.2s"
      >
        Stay updated with us
      </div>
      <form
        action="https://online.us14.list-manage.com/subscribe/post?u=414cf38f024a76464290f5cc3&id=e4ee683459"
        method="post"
        id="mc-embedded-subscribe-form"
        className="subscribe mb-3 animated validate"
        name="mc-embedded-subscribe-form"
        data-animation="fadeInUpShorter"
        data-animation-delay="0.3s"
        acceptCharset="utf-8"
      >
        <input
          type="text"
          name="subscribe"
          className="subscribe-text"
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="btn btn-gradient-blue btn-glow rounded-circle subscribe-btn"
        >
          <i className="ti-angle-right" />
        </button>
        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>
      </form>
      <p
        className="subscribe-desc mb-4 animated"
        data-animation="fadeInUpShorter"
        data-animation-delay="0.4s"
      >
        Subscribe now and be the first to find about our latest news!
      </p>
      <ul className="social-buttons list-unstyled mb-5">
        <li
          className="animated"
          data-animation="fadeInUpShorter"
          data-animation-delay="0.5s"
        >
          <a
            href="https://t.me/+b-mDUF4fPe42ZDM0"
            title="Telegram"
            className="btn btn-outline-twitter rounded-circle"
          >
            <FontAwesomeIcon icon={faTelegram} /> 
            <i className="fa fa-telegram fa-2x" aria-hidden="true" />
          </a>
        </li>
        <li
          className="animated"
          data-animation="fadeInUpShorter"
          data-animation-delay="0.6s"
        >
          <a
            href="https://discord.gg/Jf2n4c4Axe"
            title="Discord"
            className="btn btn-outline-twitter rounded-circle"
          >
            <FontAwesomeIcon icon={faDiscord} /> 
            <i className="fa-brands fa-discord fa-2x" aria-hidden="true" />
          </a>
        </li>
        <li
          className="animated"
          data-animation="fadeInUpShorter"
          data-animation-delay="0.7s"
        >
          <a
            href="https://twitter.com/token_yacht"
            title="Twitter"
            className="btn btn-outline-linkedin rounded-circle"
          >
            <FontAwesomeIcon icon={faTwitter} /> 
            <i className="fa fa-twitter fa-2x" aria-hidden="true" />
          </a>
        </li>
      </ul>
      <span
        className="copyright animated"
        data-animation="fadeInUpShorter"
        data-animation-delay="1.0s"
      >
        Cryptocurrencies are <u>HIGH RISK</u> investment products, they have no guaranteed return and past performance does not guarantee future.
      </span><br />
      <span
        className="copyright animated"
        data-animation="fadeInUpShorter"
        data-animation-delay="1.0s"
      >
        Copyright © 2023, Osean Dao
      </span>
    </div>
  </div>
</footer>
    )
}

export default OseanFooter;
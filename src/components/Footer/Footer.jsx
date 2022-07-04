import React from 'react';
import { Link } from 'react-router-dom';
import { socials } from '../../data/data';
import { footerData } from './footer.data';

export const Footer = () => (
  <footer className="footer">
    <div className="footer-header flex-base flex-column">
      <h2 className="m-bottom-small">Nucleus</h2>
      <div className="footer-socials">
        {socials.map((social) => (
          <span key={social.id}>
            <a
              aria-label={social.id}
              target="_blank"
              href={social.url}
              className=""
              rel="noreferrer"
            >
              {social.logo}
            </a>
          </span>
        ))}
      </div>
    </div>
    <div className="footer-links">
      <p className="footer-title">Shop</p>
      <div className="footer-content">
        <ul className="footer-list">
          {footerData
            .filter(({ key }) => key?.toLowerCase() === 'shop')
            .map(({ title, id }) => (
              <li key={id} className="list-item">
                <Link to="/">{title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
    <div className="footer-links">
      <p className="footer-title">Help</p>
      <div className="footer-content">
        <ul className="footer-list">
          {footerData
            .filter(({ key }) => key?.toLowerCase() === 'help')
            .map(({ title, id }) => (
              <li key={id} className="list-item">
                <Link to="/">{title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
    <div className="footer-links">
      <p className="footer-title">Company</p>
      <div className="footer-content">
        <ul className="footer-list">
          {footerData
            .filter(({ key }) => key?.toLowerCase() === 'company')
            .map(({ title, id }) => (
              <li key={id} className="list-item">
                <Link to="/">{title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  </footer>
);

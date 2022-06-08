import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import { heroCards, heroImages } from '../../data/data';
import { categories } from '../../backend/db/categories';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main style={{ marginBottom: '8rem' }}>
      <section className="hero-images slider">
        {heroImages.map((image) => (
          <div key={image.id} className="hero slide">
            <Link to="/products">
              <img
                id={image.id}
                className="responsive"
                src={image.src}
                alt={image.alt}
              />
            </Link>
          </div>
        ))}
      </section>
      <section className="discount">
        <div className="title">
          <h3>
            <span className="title-slash">/</span>Featured
          </h3>
        </div>
        <article className="card-grid">
          {heroCards.slice(0, 2).map((singleCard) => (
            <Link
              to="/products"
              key={singleCard.id}
              className="card-grid-container"
            >
              <div className="card-grid-img">
                <img
                  className="responsive"
                  src={singleCard.src}
                  alt={singleCard.name}
                />
              </div>
            </Link>
          ))}
        </article>
        <article className="card-grid">
          {heroCards.slice(2, 4).map((singleCard) => (
            <Link
              to="/products"
              key={singleCard.id}
              className="card-grid-container"
            >
              <div className="card-grid-img">
                <img
                  className="responsive"
                  src={singleCard.src}
                  alt={singleCard.name}
                />
              </div>
            </Link>
          ))}
        </article>
      </section>
      <section className="categories">
        <div className="title">
          <h3>
            <span className="title-slash">/</span>Categories
          </h3>
        </div>
        <ul className="hero-cards ">
          {categories.map((category) => (
            <li key={category.id}>
              <article className="card-hero">
                <div>
                  <Link to="/products">
                    <div className="card-image">
                      <img src={category.src} alt="" />
                    </div>
                    <p className="card-image-desc">{category.type}</p>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

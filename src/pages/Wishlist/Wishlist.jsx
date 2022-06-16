import React from 'react';
import { ProductCard } from '../../components';
import { products } from '../../backend/db/products';
import { useWishlistContext } from '../../store/Context/WishlistContext';
import { NoProductsFound } from '../../components/NoProductsFound/NoProductsFound';

export const Wishlist = () => {
  const [wishlist] = useWishlistContext();

  return (
    <main>
      <section className="page-hero">
        <div className="section-center">
          <h3 className="page-hero-title">
            <span className="title-slash">/</span> Wishlist
          </h3>
        </div>
      </section>
      <section className="wishlist-products">
        <div
          className={`products ${wishlist?.length >= 1 ? 'more-products' : ''}`}
        >
          {wishlist?.length === 0 && <NoProductsFound />}
          {wishlist?.map((product) => (
            <ProductCard key={product._id} singleProduct={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

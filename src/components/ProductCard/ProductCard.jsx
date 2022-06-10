import React from 'react';
import { GiRoundStar } from 'react-icons/gi';
import { BsFillHeartFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const ProductCard = ({ singleProduct, children }) => {
  const ratingsArray = [];
  for (let i = 1; i <= singleProduct.starRating; i += 1) {
    ratingsArray.push({
      icon: <GiRoundStar key={i} className="red fs-small" />,
    });
  }
  return (
    <article className="card card-product">
      <span className="card-discount">
        you save {singleProduct.productDiscpercent}%
      </span>
      <button type="submit" className="card-wishlist border-none">
        <BsFillHeartFill className="icon-svg card-heart" />
      </button>
      <div className="card-img">
        <img src={singleProduct.imgUrl} alt={singleProduct.alt} />
        <Link to={`/products/${singleProduct.id}`} className="card-img-overlay">
          <div className="card-img-overlay-symbol">
            <BiSearchAlt className="icon-link" />
          </div>
        </Link>
      </div>

      <div className="card-details p-smaller">
        <div className="card-stars flex-al-center">
          {ratingsArray.map((item) => item.icon)}
          <span className="card-review m-left-smallest">
            {singleProduct.reviews} Reviews
          </span>
        </div>
        <div className="card-title m-bottom-smaller">
          {singleProduct.productTitle}
        </div>
        <div className="card-price">
          Rs. {singleProduct.productPrice}
          <span className="m-left-small">
            Rs.{singleProduct.productOgPrice}
          </span>
        </div>
        <div className="card-desc">
          <p className="m-bottom-smaller">
            <span>
              <i className="fas fa-square m-right-smallest" />
            </span>
            1.54 inch display
          </p>
          <p className="m-bottom-smaller">
            <span>
              <i className="fas fa-square m-right-smallest" />
            </span>
            Temperature Monitoring
          </p>
          <p className="m-bottom-smaller">
            <span>
              <i className="fas fa-square m-right-smallest" />
            </span>
            100+ cloud watch faces
          </p>
        </div>
        <button type="submit" className="btn btn-squared m-top-small">
          {children || 'Add to Cart'}
        </button>
      </div>
    </article>
  );
};

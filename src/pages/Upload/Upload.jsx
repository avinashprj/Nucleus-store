import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FiX } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useInput } from '../../CustomHooks/CustomHooks';

export const Upload = () => {
  const [image, setImage] = useState('');
  const { inputState, inputUpdate } = useInput({
    name: '',
    brand: '',
    color: '',
    desc: '',
    price: '',
    category: '',
  });

  const [url, setUrl] = useState('');

  const getImageUrl = async (e) => {
    setImage(e.target.files[0]);
    e.preventDefault();
    const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('upload_preset', 'avinash');
    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/avinashprj/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const newData = await res.json();
      setUrl(newData.url);
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage = async () => {
    try {
      const newProduct = {
        imgUrl: url,
        alt: inputState.name,
        _id: uuid(),
        productTitle: inputState.name,
        brand: inputState.brand,
        color: inputState.color,
        productDesc: inputState.desc,
        productPrice: (inputState.price * 40) / 100,
        productDiscpercent: 40,
        productOgPrice: inputState.price,
        starRating: 5,
        reviews: 0,
        lazyLoading: "loading='lazy'",
        categories: inputState.category,
        latest: true,
      };
      const {
        data: { products },
      } = await axios.post('api/product/upload', {
        product: newProduct,
      });
      toast.success('product added successfully');
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form>
          <div className="formbold-mb-5">
            <label htmlFor="name" className="formbold-form-label">
              Product Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={inputState.name}
              onChange={inputUpdate}
              placeholder="Enter your Product Name"
              className="formbold-form-input"
            />
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="brand" className="formbold-form-label">
              Brand:
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              value={inputState.brand}
              onChange={inputUpdate}
              placeholder="Enter Product Brand"
              className="formbold-form-input"
            />
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="category" className="formbold-form-label">
              Category:
            </label>
            <input
              type="text"
              name="category"
              id="category"
              value={inputState.category}
              onChange={inputUpdate}
              placeholder="Enter Product category"
              className="formbold-form-input"
            />
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="color" className="formbold-form-label">
              Color:
            </label>
            <input
              type="text"
              name="color"
              id="color"
              value={inputState.color}
              onChange={inputUpdate}
              placeholder="Enter Product Color"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="desc" className="formbold-form-label">
              Product Description:
            </label>
            <input
              type="text"
              name="desc"
              id="desc"
              value={inputState.desc}
              onChange={inputUpdate}
              placeholder="Enter Product description"
              className="formbold-form-input"
            />
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="price" className="formbold-form-label">
              Product Price:
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={inputState.price}
              onChange={inputUpdate}
              placeholder="Enter Product price"
              className="formbold-form-input"
            />
          </div>

          <div className="mb-6 pt-4">
            <span className="formbold-form-label formbold-form-label-2">
              Upload File
            </span>

            <div className="formbold-mb-5 formbold-file-input">
              <input
                type="file"
                name="file"
                id="file"
                onChange={(e) => getImageUrl(e)}
              />
              <label htmlFor="file">
                <div>
                  <span className="formbold-drop-file"> Drop files here </span>
                  <span className="formbold-or"> Or </span>
                  <span className="formbold-browse"> Browse </span>
                </div>
              </label>
            </div>

            {image && (
              <div className="formbold-file-list formbold-mb-5">
                <div className="formbold-file-item">
                  <span className="formbold-file-name">{image.name}</span>
                  <button type="button" onClick={() => setImage('')}>
                    <FiX className="nav-icons" />
                  </button>
                </div>
              </div>
            )}
          </div>
          {url && (
            <div>
              <img
                style={{
                  width: '70%',
                  margin: '1rem 0',
                  outline: '1px solid grey',
                  borderRadius: '1rem',
                }}
                src={url}
                alt="product"
              />
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={uploadImage}
              className="formbold-btn w-full"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

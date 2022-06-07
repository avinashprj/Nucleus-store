import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

// export const categories = [
//   {
//     _id: uuid(),
//     categoryName: 'fiction',
//     description:
//       'literature in the form of prose, especially novels, that describes imaginary events and people',
//   },
//   {
//     _id: uuid(),
//     categoryName: 'non-fiction',
//     description:
//       'Non-fiction is writing that gives information or describes real events, rather than telling a story.',
//   },
//   {
//     _id: uuid(),
//     categoryName: 'horror',
//     description:
//       'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
//   },
// ];

export const categories = [
  {
    id: uuid(),
    type: 'smart watches',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_420x.png?v=1647765304',
    alt: 'smart watches',
  },
  {
    id: uuid(),
    type: 'wired earphones',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_420x.png?v=1613457250',
    alt: 'earphones',
  },
  {
    id: uuid(),
    type: 'wireless earphones',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-red_bd675504-5750-4b42-97b9-79caf2cc9034_420x.png?v=1614587254',
    alt: 'wireless earphones',
  },
  {
    id: uuid(),
    type: 'TWS earphones',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/218997d1-3fe9-4a19-809c-94a8a2d05273_600x.png?v=1625045659',
    alt: 'TWS earphones',
  },
  {
    id: uuid(),
    type: 'Headphones',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/88dfba7c-19fd-4aef-a278-41c0d2d35366_420x.png?v=1624882639',
    alt: 'Headphones',
  },
  {
    id: uuid(),
    type: 'speakers',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_8549ad38-acec-45d6-bba4-8b202a9bfdc1_420x.png?v=1646976976',
    alt: 'speakers',
  },
  {
    id: uuid(),
    type: 'Gaming Headphones',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-bl_420x.png?v=1625748090',
    alt: 'Gaming Headphones',
  },
];

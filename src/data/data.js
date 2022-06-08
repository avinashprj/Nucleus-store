import { BsInstagram, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const heroImages = [
  {
    id: 1,
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-235-pro--wBanner_2_2048x.jpg?v=1648635163',
    alt: 'HeroImage',
  },
  {
    id: 2,
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WEB_2048x.png?v=1648907634',
    alt: 'HeroImage',
  },
  {
    id: 3,
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ad411ANC_85d325c2-656e-45f2-ac75-37bb2f3098b4_2048x.jpg?v=1648453347',
    alt: 'HeroImage',
  },
];

const heroCards = [
  {
    id: 1,
    name: 'klrahul',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WEB_c1e0eae6-69d2-4898-a82c-9bffc641a1ec_2000x.jpg?v=1654366545',
    alt: 'heroCards',
  },
  {
    id: 2,
    name: 'tamannaah',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web-115_2000x.png?v=1653562884',
    alt: 'heroCards',
  },
  {
    id: 3,
    name: 'kiara',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_5496c9d9-c8d1-49c1-a7c2-83055a261f8a_1000x.jpg?v=1654509146',
    alt: 'heroCards',
  },
  {
    id: 4,
    name: 'kartik',
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner_sold_outArtboard_2_2000x.jpg?v=1654626201',
    alt: 'heroCards',
  },
];

const socials = [
  {
    id: 'github',
    url: 'https://github.com/avinashprj',
    logo: <BsGithub className="icon   icon-link" />,
  },
  {
    id: 'twitter',
    url: 'https://twitter.com/avinash_prj',
    logo: <BsTwitter className="icon  m-left-small icon-link" />,
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/avinashprajapati914/',
    logo: <FaLinkedinIn className="icon  m-left-small icon-link" />,
  },
  {
    id: 'instagram',
    url: 'https://www.instagram.com/avinashprj/',
    logo: <BsInstagram className="icon  m-left-small icon-link" />,
  },
];
export { heroImages, heroCards, socials };

import { BsInstagram, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
//
const heroImages = [
  {
    id: 1,
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web-115_2000x.png?v=1653562884',

    alt: 'HeroImage',
    mobsrc:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/mob-115_1000x_crop_center.png?v=1653562904',
  },
  {
    id: 2,
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WEB_c1e0eae6-69d2-4898-a82c-9bffc641a1ec_2000x.jpg?v=1654366545',
    alt: 'HeroImage',
    mobsrc:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/MOB_129c307b-7dd2-4a7f-af39-8653b5d60000_1000x_crop_center.jpg?v=1654366573',
  },
  {
    id: 3,
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web34_0dc3ef24-e76e-4587-b21d-948137c138e3_2000x.jpg?v=1654670966',
    alt: 'HeroImage',
    mobsrc:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mob-34_fb46c1e1-2245-4d3d-ac89-8bd6ec4f816f_1000x_crop_center.jpg?v=1654668613',
  },
];

const heroCards = [
  {
    id: 1,

    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ad411ANC_85d325c2-656e-45f2-ac75-37bb2f3098b4_2048x.jpg?v=1648453347',
    alt: 'heroCards',
  },
  {
    id: 2,
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WEB_2048x.png?v=1648907634',
    alt: 'heroCards',
  },
  {
    id: 3,
    src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-235-pro--wBanner_2_2048x.jpg?v=1648635163',
    alt: 'heroCards',
  },
  {
    id: 4,
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

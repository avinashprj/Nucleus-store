import React from 'react';
import { Footer } from '../../components';
import { Navbar } from '../../components/Navbar/Navbar';

export const AboutPage = () => {
  const [state, useState] = React.useState();

  return (
    <>
      <section className="page-hero">
        <div className="section-center">
          <h3 className="page-hero-title">
            Home <span className="title-slash">/</span> About
          </h3>
        </div>
      </section>
      <section className="section section-center about-page">
        <div className="title center text-uppercase">
          <h2>our history</h2>
        </div>
        <p className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
          delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
          Eos quod quisquam esse recusandae vitae neque dolore, obcaecati
          incidunt sequi blanditiis est exercitationem molestiae delectus saepe
          odio eligendi modi porro eaque in libero minus unde sapiente
          consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
          nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate
          accusamus nesciunt totam vitae esse iste.
        </p>
      </section>
    </>
  );
};

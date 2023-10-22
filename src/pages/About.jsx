import styled from "styled-components";
import React from "react";

const About = () => {
  return (
    <Wrapper>
      <h1>About Us</h1>
      <p>
        Welcome to MixMaster, where the world of beverages unfolds before you.
        Our online store is a haven for aficionados and curious sippers alike,
        offering a curated selection of alcoholic and non-alcoholic drinks. From
        classic cocktails to zero-proof options, our assortment covers the
        spectrum. Explore the finest wines, craft beers, and handcrafted
        mocktails. Whether you're planning a special event or simply looking for
        a refreshing indulgence, MixMaster is your go-to source. Convenience and
        quality define us, ensuring your favorite libations are just a click
        away. Embrace the art of mixing with MixMaster, where every sip tells a
        story.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    font-size: clamp(1.25rem, 2.5vw, 2.5rem);
  }
  p {
    margin-top: 2rem;
    line-height: 2;
    color: var(--grey-500);
    text-align: justify;
    text-justify: inter-word;
  }
`;

export default About;

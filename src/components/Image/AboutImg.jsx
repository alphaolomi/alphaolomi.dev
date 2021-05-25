import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const AboutImg = ({ filename, alt }) => (
  <div>
    <Image src={filename} className="rounded shadow-lg" alt={alt} layout="fill" />
  </div>
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;

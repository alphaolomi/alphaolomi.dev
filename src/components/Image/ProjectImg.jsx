import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ProjectImg = ({ filename, alt }) => <Image src={filename} alt={alt} layout="fill" />;

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;

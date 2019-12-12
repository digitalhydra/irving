import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/helpers/link';

const Byline = (props) => {
  const {
    name,
    link,
  } = props;

  return (
    <p>
      <Link to={link}>
        <span>{name}</span>
      </Link>
    </p>
  );
};

Byline.propTypes = {
  /**
   * Name used in the byline.
   *
   */
  name: PropTypes.string.isRequired,
  /**
   * URL for the author archive.
   *
   */
  link: PropTypes.string.isRequired,
};

export default Byline;

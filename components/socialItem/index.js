import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/link';
import { withStyles } from 'critical-style-loader/lib';
import FacebookIcon from 'assets/icons/facebook.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LinkedInIcon from 'assets/icons/linkedin.svg';
import WhatsAppIcon from 'assets/icons/whatsapp.svg';
import PinterestIcon from 'assets/icons/pinterest.svg';
import styles from './socialItem.css';

const socialIconMap = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
  pinterest: PinterestIcon,
};

const SocialItem = (props) => {
  const {
    type,
    url,
    displayIcon,
  } = props;
  const IconComponent = socialIconMap[type];

  return (
    <li className={styles.wrapper}>
      <Link to={url} className={styles.link}>
        {displayIcon && <IconComponent />}
      </Link>
    </li>
  );
};

SocialItem.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  displayIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
};

const wrapWithStyles = withStyles(styles);

export default wrapWithStyles(SocialItem);
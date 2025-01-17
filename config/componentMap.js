import AudioElement from 'components/audio';
import Body from 'components/body';
import Footer from 'components/footer';
import Disqus from 'components/disqus';
import GoogleTagManager from 'components/googleTagManager';
import GoogleAnalytics from 'components/googleAnalytics';
import ByLine from 'components/ByLine';
import Head from 'components/head';
import Image from 'components/image/image';
import NotConfigured from 'components/notConfigured';
import RawHTML from 'components/rawHTML';
import Parsely from 'components/parsely';
import Placeholder from 'components/placeholder';
import SocialList from 'components/socialList';
import SocialItem from 'components/socialItem';
import withLoader from 'components/hoc/withLoader';
import Heading from 'components/helpers/Heading';

/**
 * Defines which React component to render for each received API component.
 */
export const componentMap = {
  'admin-bar': Placeholder,
  'audio-element': AudioElement,
  body: withLoader(Body),
  disqus: Disqus,
  embed: RawHTML,
  footer: Footer,
  'google-analytics': GoogleAnalytics,
  'google-tag-manager': GoogleTagManager,
  head: Head,
  header: Heading,
  html: RawHTML,
  image: Image,
  menu: Placeholder,
  'menu-item': Placeholder,
  parsely: Parsely,
  'social-links': SocialList,
  'social-share': SocialList,
  'social-item': SocialItem,
  byline: ByLine,
};

/**
 * Resolve a defined React component by name.
 *
 * @param {string} name - component name
 * @returns {function} - React component
 */
export default function getComponent(name) {
  // Custom component
  if (componentMap[name]) {
    return componentMap[name];
  }

  // Support standard html tag name.
  const VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // eslint-disable-line no-useless-escape
  if (VALID_TAG_REGEX.test(name)) {
    return name;
  }

  return NotConfigured;
}

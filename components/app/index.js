import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withStyles } from 'critical-style-loader/lib';
import favicon from 'assets/images/favicon.ico';
import ConnectedRoot from 'components/connectedRoot';
import ErrorBoundary from 'components/errorBoundary';
import ErrorMessage from 'components/errorMessage';
import Link from 'components/helpers/link';
import getRoots from 'selectors/getRoots';
import styles from './app.css';

const App = (props) => {
  const { error, roots } = props;
  return (
    <ErrorBoundary>
      <Helmet>
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      {error ? (
        <ErrorMessage />
      ) : (
        <div className={styles.wrapper}>
          <Link to="/2019/02/27/hello-world/">Hello World</Link>
          <Link to="/">Home</Link>
          <a href="#content" className={styles.skipLink}>
            Skip to Content
          </a>
          {roots.map((name) => (
            <ConnectedRoot key={name} name={name} />
          ))}
        </div>
      )}
    </ErrorBoundary>
  );
};

App.propTypes = {
  /**
   * Root component configurations
   */
  roots: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Was there an error loading the page/components?
   */
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  roots: getRoots(state),
  error: !! state.error,
});

const wrapWithStyles = withStyles(styles);
const withRedux = connect(mapStateToProps);
export default hot(wrapWithStyles(withRedux(App)));

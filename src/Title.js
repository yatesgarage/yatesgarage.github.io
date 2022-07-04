import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import _isEmpty from 'lodash/isEmpty';

function Title({ title, route }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="canonical"
        href={
          _isEmpty(route)
            ? `${window.location.href}${route}`
            : `${window.location.href}`
}
      />
    </Helmet>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string,
};

Title.defaultProps = {
  title: 'Yates Garage',
  route: '',
};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      // error: null,
    };
  }

  render() {
    const { children, fallback } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return fallback || 'Something went wrong.';
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.element,
};

export default ErrorBoundary;

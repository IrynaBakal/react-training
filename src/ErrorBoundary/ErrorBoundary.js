import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMsg: info});
  };

  render() {
    const {hasError} = this.state;
    if (hasError) {
      return <p>Ooops, something went wrong!</p>;
    } else {
      return this.props.children;
    }
  }
};

export default ErrorBoundary;
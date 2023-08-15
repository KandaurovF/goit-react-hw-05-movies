import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
  return (
    <p className="c-error">
      Oops, some error occured. Please, try again later. Error: {error}
    </p>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;

import React from 'react';
import PropTypes from 'prop-types';
import './Bubble.css';

function Bubble(props) {
  const { children } = props;
  return (
    <div className="Bubble">
      { children }
    </div>
  );
}

Bubble.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Bubble;

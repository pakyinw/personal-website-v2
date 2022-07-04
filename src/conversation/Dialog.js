import React from 'react';
import PropTypes from 'prop-types';
import TypeWriterEffect from 'react-typewriter-effect';
import './Dialog.css';

function Dialog(props) {
  const { text } = props;
  return (
    <div className="Dialog">
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Strongarm, sans-serif',
          color: '#FFFFFF',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={500}
        cursorColor="#FFFFFF"
        multiText={text}
        multiTextDelay={1000}
        typeSpeed={30}
      />
    </div>
  );
}

Dialog.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Dialog;

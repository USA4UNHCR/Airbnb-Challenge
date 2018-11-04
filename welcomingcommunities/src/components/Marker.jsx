import React from 'react';
import PropTypes from 'prop-types';
import InfoWindow from 'google-map-react';

const K_SIZE = 15;

const style = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 14,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const styleHover = {
  ...style,
  border: '5px solid #3f51b5',
  color: '#f8f8ff',
  zIndex: 5,
};
// {props.$hover ? props.text : null}
const Marker = props => (
  <div
    style ={props.$hover ? styleHover : style}
    alt={props.text}
    // {...props.onClick ? { onClick: props.onClick } : {}}
  >
    {props.$hover ?
      <div>
       {props.text}
      </div>
      : null
    }

  </div>
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;

import React from 'react';

const Logo_svg = (props) => {
  const {className, height, width, fill , stroke, strokeWidth, onClick } = props
  return (
     <svg id="logo" viewBox="0 0 150 40" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={stroke} onClick={onClick}>
      <circle cx="16.5" cy="20" r="14.5" fill="red"/>
      <path id='square' fill="#0f0" d="M122 7.5h25v25h-25z"/>
      <g>
        <path d="M33.5 6.3h3.1v21.6H47v2.6H33.5V6.3zM69.8 18.2c0 8.4-5.1 12.8-11.3 12.8-6.4 0-10.9-5-10.9-12.3C47.6 11 52.4 6 58.9 6c6.6-.1 10.9 5 10.9 12.2zm-18.8.4c0 5.2 2.8 9.8 7.7 9.8 5 0 7.8-4.6 7.8-10.1 0-4.8-2.5-9.9-7.7-9.9-5.2.1-7.8 4.9-7.8 10.2zM92.4 29.5c-1.4.5-4.2 1.3-7.5 1.3-3.7 0-6.7-.9-9.1-3.2-2.1-2-3.4-5.3-3.4-9 0-7.2 5-12.5 13.1-12.5 2.8 0 5 .6 6 1.1l-.8 2.6c-1.3-.6-2.9-1-5.4-1-5.9 0-9.8 3.7-9.8 9.8 0 6.2 3.7 9.8 9.4 9.8 2.1 0 3.5-.3 4.2-.6v-7.2h-4.9v-2.5h8v11.4zM117.9 18.2c0 8.4-5.1 12.8-11.3 12.8-6.4 0-10.9-5-10.9-12.3C95.7 11 100.5 6 107 6c6.6-.1 10.9 5 10.9 12.2zm-18.8.4c0 5.2 2.8 9.8 7.7 9.8 5 0 7.8-4.6 7.8-10.1 0-4.8-2.5-9.9-7.7-9.9-5.2.1-7.8 4.9-7.8 10.2z"/>
      </g>
    </svg>
  )
};

export default Logo_svg;


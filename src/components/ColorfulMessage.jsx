import React from 'react';

const ColorfulMessage = (prpps) => {
  const {color, children} = prpps;//分割代入
  const contentStyle = {
    color,
    fontSize: '18px'
  };
  return (
    <p style ={contentStyle}>{children}</p>      
  );
}
export default ColorfulMessage;

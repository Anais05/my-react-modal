import React, { useState } from 'react';
import './Modal.css'

export default function Modal({ open, onClose, content, theme }) {

  const [isHover, setIsHover] = useState(false);

  const btnStyle = {
    color: isHover ? theme.closeBtnBgColor : theme.closeBtnColor,
    backgroundColor: isHover ? theme.closeBtnColor : theme.closeBtnBgColor,
    border: `0.1px solid ${theme.closeBtnBgColor}`
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  
  if (!open) return;

  return(
    <div className='overlay' onClick={onClose}>
      <div className='modal-container' onClick={(e) => {e.stopPropagation()}}>
        <p className='close-icon' onClick={onClose}>X</p>
        <div className="content">
          {content}
        </div>
        <button style={btnStyle}
          className='close-btn' onClick={onClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Close
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import './Modal.css'

export default function Modal({ open, onClose, content, theme }) {
  
  if (!open) return;

  return(
    <div className='overlay' onClick={onClose}>
      <div className='modal-container' onClick={(e) => {e.stopPropagation()}}>
        <p className='close-icon' onClick={onClose}>X</p>
        <div className="content">
          {content}
        </div>
        <button style={{color: theme.closeBtnColor, backgroundColor: theme.closeBtnBgColor}}
          className='close-btn' onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import './Modal.css'

export default function Modal({ open, onClose, content }) {
  if (!open) return;

  return(
    <div className='overlay' onClick={onClose}>
      <div className='modal-container' onClick={(e) => {e.stopPropagation()}}>
        <p className='close-btn' onClick={onClose}>X</p>
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  ) ;
}
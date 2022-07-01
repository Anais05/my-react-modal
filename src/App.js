import React from 'react';
import { useState } from 'react';
import Modal from './lib/components/Modal';

export default function App()  {
  const [open, setOpen] = useState(false);
  const ModalContent = "You can write the content of your modal here !!"
  const myTheme = {
    closeBtnColor : "#ffffff",
    closeBtnBgColor : "#008000",
  }

  return(
    <div>
      <button onClick={() => setOpen(true)} className='modal-btn'>Open modal</button>
      <Modal 
        open={open} 
        content={ModalContent}  
        theme={myTheme}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}



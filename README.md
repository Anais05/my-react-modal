# A modal React component with customizable text content

## About

This is a simple modal component made as part of a react project for my studies as a frontend developer

## Installation

You can install this component with npm or yarn:

    npm i simple-react-modal-by-assamoi

or

    yarn add simple-react-modal-by-assamoi

## Example

```js
import React, { useState } from "react";
import Modal from "./lib/components/Modal";

export default function App() {
  const [open, setOpen] = useState(false);
  const ModalContent = "You can write the content of your modal here !!";
  const myTheme = {
    closeBtnColor: "#ffffff",
    closeBtnBgColor: "#008000",
  };

  return (
    <div>
      <button onClick={() => setOpen(true)} className="modal-btn">
        Open modal
      </button>
      <Modal
        open={open}
        content={ModalContent}
        theme={myTheme}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
```

## Demo

![](src/demo/modal-demo.gif)

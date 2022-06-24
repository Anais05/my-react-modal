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
import React from "react";
import { useState } from "react";
import { Modal } from "simple-react-modal-by-assamoi";

export default function App() {
  const [open, setOpen] = useState(false);
  const ModalContent = "You can write the content of your modal here !!";

  return (
    <div>
      <button onClick={() => setOpen(true)} className="modal-btn">
        Open modal
      </button>
      <Modal
        open={open}
        content={ModalContent}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
```

## Demo

![](src/demo/demo-modal.gif)

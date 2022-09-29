import React from 'react';
import './Modal.css';
export default function Modal({
  open,
  onClose,
  content,
  theme
}) {
  if (!open) return;
  return /*#__PURE__*/React.createElement("div", {
    className: "overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-container",
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "close-icon",
    onClick: onClose
  }, "X"), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, content), /*#__PURE__*/React.createElement("button", {
    style: {
      color: theme.closeBtnColor,
      backgroundColor: theme.closeBtnBgColor
    },
    className: "close-btn",
    onClick: onClose
  }, "Close")));
}
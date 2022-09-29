import React, { useState } from 'react';
import './Modal.css';
export default function Modal({
  open,
  onClose,
  content,
  theme
}) {
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
    style: btnStyle,
    className: "close-btn",
    onClick: onClose,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, "Close")));
}
import React from 'react'
import { useState } from 'react'

const Modal = ( { isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="shadow-md max-h-full">
      <div className='text-lg'>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  )
}

export default Modal
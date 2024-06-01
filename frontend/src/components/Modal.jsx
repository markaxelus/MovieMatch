import React from 'react'
import { useState } from 'react'

const Modal = ( { isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className='bg-white rounded-lg p-4 '> 

        <div>
          <button onClick={onClose}>X</button>
        </div>
    {/*
        TITLE:
        IMAGE:
        RATINGS:
        AUTHOR:
        GENRE:
        DESCRIPTION:
    */}
        <div>
          
        </div>
      </div>  
    </div>
  )
}

export default Modal
import React from 'react'
import { useState } from 'react'
import test from "../images/download.jpeg"
import "./Modal.css"

const Modal = ( { isOpen, onClose }) => {
  const [showDescription, setShowDescription] = useState(false);

  if (!isOpen) return null;

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className='bg-white rounded-lg p-4 w-1/4'> 

        <div className='flex justify-end mr-4 text-xl '>
          <button className='w-6 h-6 flex items-center justify-center bg-red-500 rounded-full text-xs text-white hover:text-black transition duration-500 ease-in-out'
            onClick={onClose}>
              X
          </button>
        </div>
  
        <div className="flex justify-center mt-1 mb-2">
          <h1 className="text-lg font-bold text-center ">
            Harry Potter and The Chamber of Secrets 
          </h1>
        </div>

        <div className="flex justify-center">
          <img className="w-11/12"
          src={test} />
        </div>

        {/*
          <div className="flex justify-center font-semibold m-4">
            Warner Bros.
          </div>
        */}
      

        <div className="m-4">
          <h2 className="font-semibold mb-2"></h2>
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
            {['Fantasy', 'Adventure', 'Fiction', 'Magic', 'Young Adult', 'Mystery', 'Drama'].map((genre) => (
              <div
                key={genre}
                className="flex-shrink-0 px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {genre}
              </div>
            ))}
          </div>
        </div>

        <div className="flex m-4 flex-col">
          <button className='font-semibold underline underline-offset-8 text-left text-gray-600 decoration-gray-500'
              onClick={toggleDescription}>
              Show More 
          </button>
          
          <div className={`mt-4 overflow-hidden ${showDescription ? 'max-h-full' : 'max-h-0'}`}>
            The second installment of boy wizard Harry Potter's adventures at Hogwarts School of Witchcraft and Wizardry,
            based on the novel by JK Rowling. A mysterious elf tells Harry to expect trouble during his second year at
            Hogwarts, but nothing can prepare him for trees that fight back, flying cars, spiders that talk and deadly
            warnings written in blood on the walls of the school.
          </div>
              
        </div>

      </div>  
    </div>
  )
}

export default Modal
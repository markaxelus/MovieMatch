import { useState } from 'react'
import Modal from "./components/Modal.jsx"
import GenreSelector from './components/GenreSelector.jsx';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  
  return (
    <>
      <button onClick={handleOpenModal}>Open</button>
      <GenreSelector />
      <Modal isOpen={openModal} onClose={handleCloseModal} />
    </>
  )
}

export default App




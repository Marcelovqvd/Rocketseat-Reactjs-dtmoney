import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"

import { useState } from "react"
import Modal from 'react-modal'

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false)
  }

  return (
    <>    
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>     
  );
}

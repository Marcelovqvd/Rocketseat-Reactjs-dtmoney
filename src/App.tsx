import { useState } from "react"

import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { GlobalStyle } from "./styles/global"

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsOpen(true)
  }

  function onRequestClose() {
    setIsOpen(false)
  }

  return (
    <>    
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      />
      <GlobalStyle />
    </>     
  );
}

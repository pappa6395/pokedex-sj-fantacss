import React, { useState } from 'react'
import SideNav from './components/SideNav'
import Header from './components/Header'
import PokeCard from './components/PokeCard'



function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu] = useState(true)

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu)
  }
  function handleCloseMenu() {
    setShowSideMenu(true)
  }

  return (
    <div>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav 
        selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon}
        handleToggleMenu={handleToggleMenu}
        showSideMenu={showSideMenu}
        handleCloseMenu={handleCloseMenu} />
      <PokeCard selectedPokemon={selectedPokemon} />
    </div>
  )
}

export default App

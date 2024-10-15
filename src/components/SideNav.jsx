import React, { useState } from 'react'
import { first151Pokemon, getFullPokedexNumber } from '../utils/index'
import { FaArrowLeftLong } from "react-icons/fa6";

function SideNav(props) {

    const { selectedPokemon, setSelectedPokemon, 
            handleToggleMenu, showSideMenu, handleCloseMenu } = props

    const [searchValue, setSearcValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
        //if full pokedex number includes the current search value return true
        if ((getFullPokedexNumber(eleIndex)).includes(searchValue)) {return true}

        //if the pokemon name includes the current search value return true
        if (ele.toLowerCase().includes(searchValue.toLowerCase())) {return true}

        //otherwise, exclude value from the array
        return false
        
    })

  return (
    
        <nav className={' ' + (!showSideMenu ? 'open' : '')}>
            <div className={'header' + (!showSideMenu ? 'open' : '')}>
                <button onClick={handleToggleMenu} className='open-nav-button'>
                    <FaArrowLeftLong />
                </button>
                <h1 className='text-gradient'>Pokédex</h1>
            </div>
            <input placeholder='E.g.001 or Bulba...' 
                    value={searchValue} 
                    onChange={(e) => {setSearcValue(e.target.value)}} />

            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokemonNumber = first151Pokemon.indexOf(pokemon)
                return (
                    <button 
                        onClick={() => {setSelectedPokemon(truePokemonNumber)
                            handleCloseMenu() 
                        }} 
                        key={pokemonIndex} className={'nav-card' 
                        + (pokemonIndex === selectedPokemon ? 'nav-card-selected' : ' ')}>
                        <p>{getFullPokedexNumber(truePokemonNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>

  )
}

export default SideNav
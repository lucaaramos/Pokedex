import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import BulbasaurPic from '../assets/bulbasaur.gif'
import styles from './Pokemons.module.css'
import { fetchPokemons } from '../api/fetchPokemons';
import { Pokemon } from '../types/types';
export default function Pokemons() {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async() =>{
      const allPokemons = await fetchPokemons()
      
      setPokemons(allPokemons)
    };
    fetchAllPokemons();
  },[])
  
  return (
    <>
    <Header query ={query} setQuery={setQuery}/>
    <main>
        <nav className={styles.nav}>
          {pokemons?.slice(0,151).map((pokemon) => (
            <Link key={pokemon.id} className={styles.listItems} to={`pokemons/${pokemon.name.toLowerCase}`}>
          <img
          className={styles.listitemsIcon}
          src={pokemon.imgSrc} 
          alt={pokemon.name}
          width={50}>
          
          </img>
          <div className={styles.listItemsText}>
            <span>{pokemon.name}</span>
            <span>{pokemon.id}</span>
          </div>
          </Link>
          ))}
                    
        </nav>
    </main>
    <Footer/>
    </>
  );
}

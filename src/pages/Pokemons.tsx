import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './Pokemons.module.css'
import { fetchPokemons } from '../api/fetchPokemons';
import { Pokemon } from '../types/types';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';
export default function Pokemons() {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAllPokemons = async() =>{
      setLoading(true);
      await waitFor(1000);
       const allPokemons = await fetchPokemons()
      setPokemons(allPokemons)
      setLoading(false)
    };
    fetchAllPokemons();
  },[])
  if(loading || !pokemons){
    return <LoadingScreen/>
  }
  
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

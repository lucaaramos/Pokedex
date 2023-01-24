import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import Pokemonpic from '../assets/pikachu.png'
import Location from '../assets/pointer.png'
import Items from '../assets/pokeball.png'
export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <Link className={styles.footerLink} to='/pokemons'>
          <img className={styles.footerIcon} src={Pokemonpic} alt="Pokeball" />
          Pokemons
        </Link>
        <Link className={styles.footerLink} to='/items'>
          <img className={styles.footerIcon} src={Items} alt="Items" />
          Items
        </Link>
        <Link className={styles.footerLink} to='/'>
          <img className={styles.footerIcon} src={Location} alt="Pokeball" />
          Map
        </Link>
      </footer>
    </div>
  )
}

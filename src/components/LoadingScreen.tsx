import React from 'react'
import Pokedex from '../assets/pokedex.png'
import styles from './LoadingScreen.module.css'
export default function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
        <img
        className={styles.loadingScreenIcon} 
        src={Pokedex}
        alt='Pokedex'>
        </img>
    </div>
  )
}

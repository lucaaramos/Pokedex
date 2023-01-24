import React, { useState } from 'react'
import styles from './Header.module.css'

type HeaderProps ={
  query:string;
  setQuery: (query: string) => void
}
export default function Header({query, setQuery}: HeaderProps) {
  
  return (
    <div>
        <header className={styles.header}>
            <input 
            className={styles.input}
            placeholder='Search a Pokemon' 
            type='text'
            onChange={(e) => setQuery(e.target.value)}
            />
        </header>
    </div>
  )
}

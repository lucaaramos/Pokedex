import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Pokemons() {
  const [query, setQuery] = useState("");
  return (
    <>
    <Header query ={query} setQuery={setQuery}/>
    <main>
        poke
    </main>
    <Footer/>
    </>
  );
}

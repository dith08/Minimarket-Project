import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const SpmDaren = () => {
    const [characters, setCharacters] = useState([]); // State untuk menyimpan data karakter
  const [loading, setLoading] = useState(true); // State untuk menampilkan loading
  const [error, setError] = useState(null); // State untuk menampilkan error jika ada

   // Mengambil data dari API ketika komponen pertama kali di-render
   useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(response => {
        setCharacters(response.data.results); // Menyimpan data karakter
        setLoading(false); // Matikan loading setelah data diterima
      })
      .catch(() => {
        setError("Something went wrong!"); // Menangani error
        setLoading(false); // Matikan loading meskipun ada error
      });
  }, []); // [] artinya hanya sekali saat komponen pertama kali di-render

  if (loading) return <div>Loading...</div>; // Menampilkan loading jika data masih dimuat
  if (error) return <div>{error}</div>; // Menampilkan pesan error jika ada
  return (
<div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <ul className="list-disc pl-5">
        {characters.map((character) => (
          <li key={character.id} className="text-lg mb-2">
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpmDaren
import { useState } from 'react'
import './styles/App.css'
import BasicInfo from './components/BasicInfo';

function App() {
  return (
    <main className='app-container'>
      <header>
        <h1>CV Generator</h1>
      </header>

      <BasicInfo />
    </main>
  )
}

export default App

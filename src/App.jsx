import './App.css'
import React from 'react'
import LikeButtons from '../Components/LikeButtons'

export default function App() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
        <div>
            <LikeButtons />
        </div>
    </main>
  )
}

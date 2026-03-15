import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

  return (
    <>
      
        <div>
          
          <Suspense fallback={<p>countries are coming...</p>}>
            <Countries countriesPromise={countriesPromise}></Countries>
          </Suspense>
          
        </div>

    </>
  )
}

export default App

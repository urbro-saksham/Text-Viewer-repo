import { useState } from "react"
import Navbar from "./components/Navbar"
import Word from "./WordCounter"
function App() {
  const [titlle,setTitle] = useState('dark')
  function changetitle() {
    setTitle(prevTitle => (prevTitle === 'light' ? 'dark' : 'light'))
  }
  // Define styles for dark and light modes
  const appStyle = titlle === 'dark'
    ? { backgroundColor: 'rgb(17 24 39 / var(--tw-bg-opacity, 1)) /* #111827 */', color: 'white' }
    : { backgroundColor: 'rgb(147 197 253 / var(--tw-bg-opacity, 1)) /* #93c5fd */', color: 'black' };

  return (
    <><div id="bro" className="h-[100vh] w-[100vw] overflow-x-hidden " 
    style={appStyle}
    >
      <Navbar changetitle={changetitle} title = {titlle}/>
      <Word title= {titlle}/>
      </div>
      </>
  )
}
export default App
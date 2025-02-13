import { useState } from 'react'
import Navbar from './components/Navbar'
import AddNewMovieModal from './components/AddNewMovieModal'
import { TrendingUpIcon } from 'lucide-react'
import Rating from './components/Rating'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div>
        <Navbar setOpen={setOpen}/>
        <AddNewMovieModal open = {open} onClose = {() => setOpen(false)}/> 
      </div>
    </>
  )
}

export default App

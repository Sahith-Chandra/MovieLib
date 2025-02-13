import { useState } from 'react'
import Navbar from './components/Navbar'
import AddNewMovieModal from './components/AddNewMovieModal'
import { TrendingUpIcon } from 'lucide-react'
import Rating from './components/Rating'
import LibraryHome from './components/LibraryHome'
import EditMovie from './components/EditMovie'

function App() {
  const [open, setOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  return (
    <>
      <div>
        <Navbar open = {open} setOpen={setOpen}/>
        <AddNewMovieModal open = {open} onClose = {() => setOpen(false)}/> 
        <LibraryHome setEditOpen = {setEditOpen} />
        <EditMovie open = {editOpen} onClose = {() => setEditOpen(false)}/>
      </div>
    </>
  )
}

export default App

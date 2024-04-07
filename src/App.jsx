import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Puzzle1 from './components/Puzzle1';
import Header from './components/Header';
import Puzzle2 from './components/Puzzle2';
import Puzzle3 from './components/Puzzle3';
import Puzzle4 from './components/Puzzle4';
import Puzzle5 from './components/Puzzle5';

function App() {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/puzzle1' element={<Puzzle1 />}/>
        <Route path='/puzzle2' element={<Puzzle2 />}/>
         <Route path='/puzzle3' element={<Puzzle3 />}/>
        <Route path='/puzzle4' element={<Puzzle4 />}/>
        <Route path='/puzzle5' element={<Puzzle5 />}/>
      </Routes>
    </div>
  )
}

export default App

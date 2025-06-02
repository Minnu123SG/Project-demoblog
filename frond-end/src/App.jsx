import React from 'react'
import Home from './components/Home'
import Addblog from './components/Addblog'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Displayblog  from './components/Displayblog'

 const App = () => {
  return (
   <>
   <Router>
    
    <nav className ='bg-gray-700 shadow-lg'>
      <div className="App" style={{ padding: '20px' }}>
        <h1 style={{  textAlign: 'center',
    marginBottom: '5 px',
        }}> Blog </h1>
      <ul className='flex space-x-6 py-4'>
      <li>
        <Link to='/' 
        className='text-white hover:text-gray-300' 
        >Home</Link>
      </li>
     <li>
        <Link to='/addblog' 
        className='text-white hover:text-gray-300' 
        >Add blog</Link>
      </li>
    <li>
        <Link to='/displayblog' 
        className='text-white hover:text-gray-300' 
        >Display blog </Link>
      </li>
      </ul>
      </div>

    </nav>
    <Routes>
      <Route  path ='/' element={<Home />}/>
      <Route  path ='/Addblog' element={<Addblog />}/>
      <Route  path ='/Displayblog' element={<Displayblog />}/>
      
    </Routes>
   </Router>
   
   </>
  )
}
export default App
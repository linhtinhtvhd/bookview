import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import Reading from './Reading/Reading'

function App() {
  return (
   <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/reading' element={<Reading/>}></Route>
        </Routes>
      </div>
   </Router>
  );
}

export default App;

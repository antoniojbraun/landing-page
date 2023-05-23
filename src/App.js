
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Thankyou from './Pages/Thankyou/Thankyou';
import LeadPage from './Pages/LeadPage/LeadPage';

function App() {
  return (
    // <div className="App">
    //     <Home />
    // </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/thankyou' element={<Thankyou />} />
      <Route path='/leadpage' element={<LeadPage />} />
    </Routes>
  );


}

export default App;

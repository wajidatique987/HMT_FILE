import './App.css';
import Navigation from './Component/Navigation';
import Hero from './Component/Hero';
import Zero from './Component/Zero';
import One from './Component/One';
import Two from './Component/Two';
import Three from './Component/Three';
import Four from './Component/Four';
import Five from './Component/Five';
import Six from './Component/Six';
import Footer from './Component/Footer';
import Web from './Component/Pages/Web';
import Web3 from './Component/Pages/Web3';
import Block from './Component/Pages/Block';
import Software from './Component/Pages/Software';
import Marketing from './Component/Pages/Marketing';
import Devops from './Component/Pages/Devops';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
function App() {
  return (
    <div>
      <Navigation/>
      
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path= "/Web" element={<Web/>} />
      <Route path= "/Web3" element={<Web3/>} />
      <Route path= "/Block" element={<Block/>} />
      <Route path= "/Software" element={<Software/>} />
      <Route path= "/Marketing" element={<Marketing/>} />
      <Route path= "/Devops" element={<Devops/>} />
     </Routes>
     <Six/>
      <Footer/>
    </div>
  )
}

export default App;

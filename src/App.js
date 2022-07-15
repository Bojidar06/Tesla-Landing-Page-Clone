import { Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import Header from './components/Header'
import NavBar from './components/NavBar'


function App() {

  const fixed_style = {
    width: "100%",
    position: "fixed"
  }
  
  return (
    <>
      <div style = {fixed_style}>
      <Header />
      <NavBar />
      </div>

      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/models" element = { <Home /> } />
        <Route path = "/model3" element = { <Home /> } />
        <Route path = "/modelx" element = { <Home /> } />
        <Route path = "/shop" element = { <Home /> } />
        <Route path = "/account" element = { <Home /> } />
        <Route path = "/menu" element = { <Home /> } />
      </Routes>      
    </>
  );
}

export default App;

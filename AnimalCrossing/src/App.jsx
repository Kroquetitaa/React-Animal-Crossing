import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Fish from './pages/Fish/Fish.jsx';
import { AnimalCrossingContextProvider } from './context/context.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>
      <AnimalCrossingContextProvider>
        <Header />
        <Routes>
          <Route path='/' element=""></Route>
          <Route path='/fish' element={ <Fish /> }></Route>
        </Routes>
        <Footer />
        </AnimalCrossingContextProvider>
      </Router>
    </div>
  )
}

export default App

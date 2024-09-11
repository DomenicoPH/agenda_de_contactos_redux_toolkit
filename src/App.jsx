import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import WelcomeScreen from './views/WelcomeScreen';
import AddScreen from './views/AddScreen';
import ListScreen from './views/ListScreen';

import styled from 'styled-components';
import './App.css'
import 'normalize.css';


const AppContainer = styled.div`
  
`

function App() {

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path='/' element={<WelcomeScreen/>} />
        <Route path='/add' element={<AddScreen/>} />
        <Route path='/list' element={<ListScreen/>} />
      </Routes>
    </AppContainer>
  )
}

export default App
